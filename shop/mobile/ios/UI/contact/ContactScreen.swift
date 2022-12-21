//
//  ContactScreen.swift
//  MyShop
//
//  Created by Виталий Зарубин on 19.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

struct ContactScreen: View {
    
    @Environment(\.openURL) private var openURL
    
    @EnvironmentObject var navPath: NavObservable
    
    var body: some View {
        ScrollView {
            VStack {
                VStack {
                    ContactMessageBlock(action: {
                        navPath.add(NavScreen.contactForm)
                    }).paddingItemBottom()
                    
                    ContactEmailBlock(action: {
                        openURL(URL(string: "mailto:" + ConstantsKMM.CONST.other.CONTACT_EMAIL)!)
                    }).paddingItemBottom()
                    
                    ContactPhoneBlock(action: {
                        openURL(URL(string: ConstantsKMM.CONST.other.CONTACT_TG)!)
                    }).paddingItemBottom()
                }
                VStack {
                    ContactAddressBlock()
                        .paddingItemBottom()
                    
                    ContactMapBlock()
                }
                Spacer()
            }.paddingPage()
        }
        .colorize(L10nApp.screenContact, true)
    }
}
