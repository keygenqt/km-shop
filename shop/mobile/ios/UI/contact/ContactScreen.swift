//
//  ContactScreen.swift
//  MyShop
//
//  Created by Виталий Зарубин on 19.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

struct ContactScreen: View {
    
    @EnvironmentObject var navPath: NavObservable
    
    var body: some View {
        VStack {
            Button("To send message") {
                navPath.add(NavScreen.contactForm)
            }.background(Color.primary)
        }
        .background(.red)
        .toolbarColorize(L10nApp.screenContact, true)
    }
}
