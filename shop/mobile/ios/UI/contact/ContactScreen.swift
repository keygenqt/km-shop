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
            VStack(spacing: 0) {
                Spacer().frame(height: 16)
                VStack {
                    ContactMessageBlock(action: {
                        navPath.add(NavScreen.contactForm)
                    })
                    Spacer().frame(height: 16)
                    ContactEmailBlock(action: {
                        openURL(URL(string: "mailto:" + ConstantsKMM.CONST.other.CONTACT_EMAIL)!)
                    })
                    Spacer().frame(height: 16)
                    ContactPhoneBlock(action: {
                        openURL(URL(string: ConstantsKMM.CONST.other.CONTACT_TG)!)
                    })
                }
                VStack {
                    Spacer().frame(height: 16)
                    ContactAddressBlock()
                    Spacer().frame(height: 16)
                    ContactMapBlock()
                }
                Spacer().frame(height: 16)
                Spacer()
            }
        }.toolbarColorize(L10nApp.screenContact, true)

    }
}
