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
    
    // View Model
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
                    AppSection {
                        OrderProductList(
                            sum: response.sum,
                            products: response.products.toArray()
                        )
                    }
                    
                    AppSection {
                        OrderStateDetail(
                            state: response.state,
                            note: response.note
                        )
                    }
                    
                    AppSection {
                        OrderClientDetail(
                            email: response.email,
                            phone: response.phone,
                            address: response.address
                        )
                    }
                }.refreshable {
                    await viewModel.loadAsync(
                        number: number
                    )
                }
            } else {
                if viewModel.error != nil {
                    EmptyBody(
                        title: L10nOrder.orderErrorTitle,
                        subtitle: L10nOrder.orderErrorText
                    )
                } else {
                    LoadingBody()
                }
            }
        }.colorize(L10nApp.screenOrder, true)
    }
}
