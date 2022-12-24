//
//  OrderScreen.swift
//  MyShop
//
//  Created by Виталий Зарубин on 19.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

struct OrderScreen: View {
    
    // Routing management
    @Environment(\.nav) var nav: NavChange
    
    // model
    @ObservedObject var viewModel = OrderViewModel()
    
    let number: String
    
    init(number: String) {
        self.number = number
        viewModel.load(number: number)
    }
    
    var body: some View {
        VStack {
            if let response = viewModel.response {
                AppScrollView {
                    VStack {
                        AppText(response.number)
                        AppText(response.state.name)
                    }
                }.refreshable {
                    await viewModel.loadAsync(
                        number: number
                    )
                }
            } else {
                LoadingBody()
            }
        }.colorize(L10nApp.screenOrder, true)
    }
}
