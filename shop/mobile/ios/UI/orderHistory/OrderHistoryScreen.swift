//
//  OrderHistoryScreen.swift
//  MyShop
//
//  Created by Виталий Зарубин on 19.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

struct OrderHistoryScreen: View {
    
    // Routing management
    @Environment(\.nav) var nav: NavChange

    // View Model
    @ObservedObject var viewModel = OrderHistoryViewModel()
    
    var body: some View {
        VStack {
            if let response = viewModel.response {
                if response.isEmpty {
                    EmptyBody(
                        title: L10nOrderHistory.orderHistoryEmpty,
                        subtitle: L10nOrderHistory.orderHistoryEmptySubtitle
                    )
                } else {
                    AppScrollView {
                        ForEach(response) { model in
                            OrderHistoryItem(
                                images: model.images.components(separatedBy: [","]),
                                number: model.number,
                                sum: model.sum
                            ) {
                                nav.add(NavScreens.order(
                                    number: model.number
                                ))
                            }
                        }
                    }
                }
            } else {
                LoadingBody()
            }
        }
        .colorize(L10nApp.screenOrderHistory, true)
    }
}
