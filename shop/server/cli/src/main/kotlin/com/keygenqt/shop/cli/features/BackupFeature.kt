/*
 * Copyright 2023 Vitaliy Zarubin
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.keygenqt.shop.cli.features

import com.keygenqt.shop.base.LoaderConfig
import com.keygenqt.shop.cli.args.ArgRoot
import com.keygenqt.shop.cli.args.BackupTypes
import com.keygenqt.shop.cli.utils.Command
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.runBlocking
import kotlinx.coroutines.withContext
import org.apache.commons.net.ftp.FTP
import org.apache.commons.net.ftp.FTPClient
import org.koin.core.component.KoinComponent
import org.koin.core.component.inject
import java.io.File
import java.io.FileInputStream

class BackupFeature : KoinComponent {

    private val arg: ArgRoot by inject()
    private val config: LoaderConfig by inject()
    private lateinit var ftpClient: FTPClient

    fun runBackupDb(): File {
        return runBlocking {
            try {
                // load configurations
                val user: String = config.getPropOrNull("dataSource.user")!!
                val password: String = config.getPropOrNull("dataSource.password")!!
                val dbname: String = config.getPropOrNull<String>("jdbcUrl")
                    ?.substringBefore("?")
                    ?.substringAfterLast("/")!!

                // file name
                val dumpName = "${dbname}_dump_db_${System.currentTimeMillis()}.sql"

                // make dump
                config.getPropOrNull<String>("mysqldump")?.let {
                    Command.execute("$it -u $user -p$password $dbname > $dumpName")
                } ?: run {
                    Command.execute("mysqldump -u $user -p$password $dbname > $dumpName")
                }

                // return file
                File(dumpName)
            } catch (ex: Exception) {
                if (ex.message?.contains("mysqldump: command not found") == true) {
                    throw RuntimeException(
                        """
                        You must install mysqldump or specify the path to mysqldump in the config
                        
                        app.properties:
                        mysqldump = /usr/local/mysql-8.0.30-macos12-arm64/bin/mysqldump
                        """.trimIndent()
                    )
                } else {
                    throw ex
                }
            }
        }
    }

    fun runBackupFiles(): File {
        return runBlocking {
            // file name
            val dumpName = "dump_uploads_${System.currentTimeMillis()}.zip"
            // make dump
            Command.execute("zip -r $dumpName uploads")
            // return file
            File(dumpName)
        }
    }

    companion object {
        fun init() {
            with(BackupFeature()) {
                if (arg.backup.isInit) {

                    val ftpHostname: String = config.getPropOrNull("ftpHostname")!!
                    val ftpUsername: String = config.getPropOrNull("ftpUsername")!!
                    val ftpPassword: String = config.getPropOrNull("ftpPassword")!!
                    val ftpDirectory: String = config.getPropOrNull("ftpDirectory")!!

                    // init ftp
                    ftpClient = FTPClient().apply {
                        connect(ftpHostname)
                        login(ftpUsername, ftpPassword)
                        setFileType(FTP.BINARY_FILE_TYPE)
                        changeWorkingDirectory(ftpDirectory)
                    }

                    // run dump
                    val file = when (arg.backup.type) {
                        BackupTypes.DB, null -> runBackupDb()
                        BackupTypes.FILES -> runBackupFiles()
                    }

                    // upload file
                    runBlocking {
                        withContext(Dispatchers.IO) {
                            FileInputStream(file).let {
                                if (ftpClient.storeFile(file.name, it)) {
                                    println("\nThe file is uploaded successfully.\n")
                                } else {
                                    println("\nThe file error uploaded. Code: ${ftpClient.replyCode}\n")
                                }
                                it.close()
                            }
                        }
                    }

                    // clear cache
                    file.delete()

                    // disconnect
                    ftpClient.disconnect()
                }
            }
        }
    }
}
