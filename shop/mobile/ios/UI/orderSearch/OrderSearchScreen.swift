//
//  OrderSearchScreen.swift
//  MyShop
//
//  Created by Виталий Зарубин on 19.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

struct OrderSearchScreen: View {
    
    var body: some View {
        VStack {
            Text("OrderSearchScreen")
        }
        .navigationBarItems(trailing: HStack(spacing: 0) {
            NavigationLink {
                OrderHistoryScreen()
            } label: {
                Image(systemName: "clock").imageScale(.large)
            }
        })
        .toolbarColorize(L10nApp.screenOrderSearch, true)
    }
}
