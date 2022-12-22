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
        AppScrollView {
            AppSection(color: Color.bgVariant4) {
                ContactMessageBlock(action: {
                    navPath.add(NavScreen.contactForm)
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
