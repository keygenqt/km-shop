//
//  OrderCreateScreen.swift
//  MyShop
//
//  Created by Виталий Зарубин on 19.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

struct OrderCreateScreen: View {
    
    @EnvironmentObject var navPath: NavObservable
    
    var onChangeTab: (() -> Void)
    
    var body: some View {
        VStack {
            SuccessCartBody(
                title: L10nOrderCreate.orderCreateSuccessTitle,
                subtitle: L10nOrderCreate.orderCreateSuccessText,
                btnTitle: L10nOrderCreate.orderCreateSuccessBtn,
                action: {
                    navPath.insert([
                        NavScreen.orderSearch,
                        NavScreen.orderHistory,
                        NavScreen.order("fda81678-70b2-409e-950d-36918f1c62b7"),
                    ])
                    onChangeTab()
                }
            )
        }
        .toolbarColorize(L10nApp.screenOrderCreate, true)
    }
}
