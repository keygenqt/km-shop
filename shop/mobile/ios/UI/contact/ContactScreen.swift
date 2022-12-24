//
//  ContactScreen.swift
//  MyShop
//
//  Created by Виталий Зарубин on 19.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

struct ContactScreen: View {
    
    // Routing management
    @Environment(\.nav) var nav: NavChange
    
    @Environment(\.openURL) private var openURL

    var body: some View {
        AppScrollView {
            AppSection(color: Color.bgVariant4) {
                ContactMessageBlock(action: {
                    nav.add(NavScreens.contactForm())
                })
            }
            
            AppSection {
                ContactEmailBlock(action: {
                    openURL(URL(string: "mailto:" + ConstantsKMM.CONST.other.CONTACT_EMAIL)!)
                })
            }
            
            AppSection {
                ContactPhoneBlock(action: {
                    openURL(URL(string: ConstantsKMM.CONST.other.CONTACT_TG)!)
                })
            }
            
            AppSection {
                ContactAddressBlock()
            }
            
            AppSection {
                ContactMapBlock()
            }
        }
        .colorize(L10nApp.screenContact, true)
    }
}
