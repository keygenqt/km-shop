//
//  OrderHistoryScreen.swift
//  MyShop
//
//  Created by Виталий Зарубин on 19.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

struct OrderHistoryScreen: View {
    var body: some View {
        VStack {
            EmptyBody(
                title: L10nOrderHistory.orderHistoryEmpty,
                subtitle: L10nOrderHistory.orderHistoryEmptySubtitle
            )
        }
        .toolbarColorize(L10nApp.screenOrderHistory, true)
    }
}
