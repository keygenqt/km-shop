//
//  OrderScreen.swift
//  MyShop
//
//  Created by Виталий Зарубин on 19.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

struct OrderScreen: View {
    
    // nav change
    @EnvironmentObject var navPath: NavObservable
    // model
    @ObservedObject var viewModel = OrderViewModel()
    
    let number: String
    
    init(number: String) {
        self.number = number
        viewModel.load(number: number)
    }
    
    var body: some View {
        VStack {
            if viewModel.loadingPage {
                LoadingBody()
            } else {
                AppScrollView {
                    Text("OrderScreen")
                    Text(number)
                }.refreshable {
                    await viewModel.loadAsync(
                        number: number
                    )
                }
            }
        }.colorize(L10nApp.screenOrder, true)
    }
}
