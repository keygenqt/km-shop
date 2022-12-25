//
//  ProductsScreen.swift
//  MyShop
//
//  Created by Виталий Зарубин on 19.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

struct ProductsScreen: View {
    
    // Routing management
    @Environment(\.nav) var nav: NavChange
    
    // View Model
    @ObservedObject var viewModel = ProductsViewModel()
    
    let title: String
    let categoryIDs: [Int]
    let collectionIDs: [Int]
    
    init(
        title: String,
        categoryIDs: [Int],
        collectionIDs: [Int]
    ) {
        self.title = title
        self.categoryIDs = categoryIDs
        self.collectionIDs = collectionIDs
        
        viewModel.load(
            categoryIDs: categoryIDs,
            collectionIDs: collectionIDs
        )
    }
    
    var body: some View {
        VStack {
            if let products = viewModel.products {
                AppScrollView {
                    if products.isEmpty {
                        EmptyBody(
                            title: L10nExploring.emptyTab1Title,
                            subtitle: L10nExploring.emptyTab1Text
                        )
                    } else {
                        ForEach(products) { model in
                            ProductItem(
                                icon: model.image1,
                                name: model.name,
                                desc: model.description_
                            ) {
                                nav.add(NavScreens.product(
                                    id: Int(model.id)
                                ))
                            }
                        }
                    }
                }
                .refreshable {
                    await viewModel.loadAsync(
                        categoryIDs: categoryIDs,
                        collectionIDs: collectionIDs
                    )
                }
            } else {
                if let error = viewModel.error {
                    ErrorBody(error: error)
                } else {
                    LoadingBody()
                }
            }
        }.colorize(title, true)
    }
}
