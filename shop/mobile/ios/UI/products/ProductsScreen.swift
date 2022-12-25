//
//  ProductsScreen.swift
//  MyShop
//
//  Created by Виталий Зарубин on 19.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI
import shared

struct ProductsScreen: View {
    
    // Routing management
    @Environment(\.nav) var nav: NavChange
    
    // View Model
    @ObservedObject var viewModel: ProductsViewModel
    
    let title: String
    
    init(
        title: String,
        categoryIDs: [Int],
        collectionIDs: [Int]
    ) {
        self.title = title
        self.viewModel = ProductsViewModel(
            categoryIDs: categoryIDs,
            collectionIDs: collectionIDs
        )
        self.viewModel.load()
    }
    
    var body: some View {
        VStack {
            if let products = viewModel.products {
                if products.isEmpty {
                    EmptyBody(
                        title: L10nExploring.emptyTab1Title,
                        subtitle: L10nExploring.emptyTab1Text,
                        action: { viewModel.load() }
                    )
                } else {
                    AppScrollView {
                        
                        if viewModel.loading {
                            Spacer().frame(height: 45)
                        }
                        
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
                    .if(!viewModel.loading) { view in
                        view.refreshable {
                            await viewModel.loadAsync()
                        }
                    }
                    .overlay(VStack {
                        if viewModel.loading {
                            ProgressView().scaleEffect(1.5).offset(y: 20)
                        }
                    }, alignment: .top)
                }
            } else {
                if viewModel.error != nil {
                    ErrorBody(action: { viewModel.load() })
                } else {
                    LoadingBody()
                }
            }
        }
        .navigationBarItems(trailing: HStack(spacing: 0) {
            if let products = viewModel.products {
                if !products.isEmpty {
                    if viewModel.sort == OrderProduct.newest {
                        Button {
                            viewModel.changeSort(OrderProduct.low)
                        } label: {
                            Image(systemName: "arrow.up.arrow.down.circle").imageScale(.large)
                        }
                    }
                    if viewModel.sort == OrderProduct.low {
                        Button {
                            viewModel.changeSort(OrderProduct.height)
                        } label: {
                            Image(systemName: "arrow.down.right.circle").imageScale(.large)
                        }
                    }
                    if viewModel.sort == OrderProduct.height {
                        Button {
                            viewModel.changeSort(OrderProduct.newest)
                        } label: {
                            Image(systemName: "arrow.up.right.circle").imageScale(.large)
                        }
                    }
                }
            }
        })
        .colorize(title, true)
    }
}
