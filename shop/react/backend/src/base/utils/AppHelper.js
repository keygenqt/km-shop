import {ConstantConf} from "../../conf/app/ConstantConf";
import {Requests} from "../constants/ConstantKMM";

/**
 * App helper functions
 */
export const AppHelper = {

    /**
     * Find error array validate
     */
    findError: function (field, validate) {
        if (!validate) {
            return null
        }
        return validate.find(el => el['filed'] === field)?.errors.join(', ') ?? null
    },

    /**
     * Check if all object value is null
     */
    isEmpty: function (obj) {
        let result = true
        Object.keys(obj).forEach(key => {
            if (obj[key] !== null && obj[key] !== undefined) {
                result = false
            }
        });
        return result
    },

    /**
     * Check if all object value is not null
     */
    isNotEmpty: function (obj) {
        return !AppHelper.isEmpty(obj)
    },

    /**
     * Check is image
     */
    isImage: (fileMime) => {
        return fileMime !== null
            && (fileMime.includes('png') || fileMime.includes('jpg') | fileMime.includes('jpeg'))
    },

    /**
     * Create file link
     */
    getFileUrl: (fileName) => {
        return `${ConstantConf.domainAPI}/api/uploads/${fileName}`
    },

    /**
     * Convert array uploads to array request
     */
    convertUploads: async (uploads) => {
        const requests = []
        for (const file of uploads) {
            requests.push(
                new Requests.FileRequest(
                    file.name,
                    file.type,
                    new Int8Array(await file.arrayBuffer())
                )
            )
        }
        return requests
    },
};