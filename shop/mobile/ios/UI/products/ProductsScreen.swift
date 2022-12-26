//
//  ProductsScreen.swift
//  MyShop
//
//  Created by Виталий Зарубин on 19.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import AlertToast
import SwiftUI
import shared

struct ProductsScreen: View {
    
    // Routing management
    @Environment(\.nav) var nav: NavChange
    
    // App cart products
    @EnvironmentObject var cart: CartObservable
    
    // View Model
    @ObservedObject var viewModel: ProductsViewModel
    
    // States
    @State private var isShowingSheet: Bool = false
    @State private var isShowingCartAdd: Bool = false
    @State private var isShowingCartDel: Bool = false
    
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
        self.viewModel.loadPrices()
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
                                desc: model.description_,
                                price: model.price,
                                isCart: cart.has(model.id),
                                action: {
                                    nav.add(NavScreens.product(
                                        id: Int(model.id)
                                    ))
                                },
                                cartAction: { state in
                                    if state {
                                        cart.add(
                                            id: model.id,
                                            count: 1,
                                            price: model.price
                                        )
                                        isShowingCartAdd = true
                                        isShowingCartDel = false
                                    } else {
                                        cart.remove(model.id)
                                        isShowingCartDel = true
                                        isShowingCartAdd = false
                                    }
                                }
                            ) 
                        }
                        
                        if viewModel.isNextPage() {
                            VStack {
                                LoadingAnimation()
                                    .padding()
                                    .onAppear {
                                        viewModel.nextPage()
                                    }
                            }
                        }
                    }
                    .toast(isPresenting: $isShowingCartAdd) {
                        AlertToast(
                            displayMode: .banner(.pop),
                            type: .regular,
                            title: L10nApp.commonCartAdd,
                            style: .style(
                                backgroundColor: Color.bgVariant1,
                                titleColor: Color.onBackground,
                                titleFont: Font.system(size: 16)
                            )
                        )
                    }
                    .toast(isPresenting: $isShowingCartDel) {
                        AlertToast(
                            displayMode: .banner(.pop),
                            type: .regular,
                            title: L10nApp.commonCartRemove,
                            style: .style(
                                backgroundColor: Color.bgVariant1,
                                titleColor: Color.onBackground,
                                titleFont: Font.system(size: 16)
                            )
                        )
                    }
                    .sheet(isPresented: $isShowingSheet) {
                        VStack {
                            FilterRungPrice(
                                range: $viewModel.range,
                                prices: viewModel.prices ?? 0.0...0.0,
                                onValueChangeFinished: { value in
                                    viewModel.changeFilterPrices(value)
                                }
                            )
                        }.presentationDetents([.height(230)])
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
                    if viewModel.prices != nil {
                        Button {
                            isShowingSheet = true
                        } label: {
                            Image(systemName: "line.3.horizontal.decrease.circle").imageScale(.large)
                        }
                    }
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
