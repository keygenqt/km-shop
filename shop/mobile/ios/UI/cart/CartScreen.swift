//
//  CartScreen.swift
//  MyShop
//
//  Created by Виталий Зарубин on 19.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

struct CartScreen: View {
    var body: some View {
        VStack {
            Text("CartScreen")
        }
        .navigationBarTitle(L10nApp.appName)
        .navigationBarTitleDisplayMode(.inline)
        .navigationBarItems(leading: HStack(spacing: 0) {
            Image("launcher").resizable().frame(width: 24, height: 24).aspectRatio(contentMode: .fit).clipShape(Circle())
        })
        .accentColor(Color.primary)
    }
}
