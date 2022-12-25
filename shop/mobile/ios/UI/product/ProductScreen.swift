//
//  ProductScreen.swift
//  MyShop
//
//  Created by Виталий Зарубин on 19.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

struct ProductScreen: View {
    
    // Routing management
    @Environment(\.nav) var nav: NavChange

    // View Model
    @ObservedObject var viewModel = ProductViewModel()
    
    var id: Int
    
    init(id: Int) {
        self.id = id
        viewModel.load(id: id)
    }
    
    var body: some View {
        VStack {
            if let response = viewModel.response {
                AppScrollView {
                    VStack {
                        AppText(response.description_)
                    }
                }.refreshable {
                    await viewModel.loadAsync(
                        id: id
                    )
                }
            } else {
                if viewModel.error != nil {
                    EmptyBody(
                        title: L10nProduct.productEmptyTitle,
                        subtitle: L10nProduct.productEmptySubtitle
                    )
                } else {
                    LoadingBody()
                }
            }
        }.colorize(viewModel.response?.name ?? (viewModel.error == nil ? L10nApp.screenProduct : ""), true)
    }
}
