//
//  CartScreen.swift
//  MyShop
//
//  Created by Виталий Зарубин on 19.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI
import AlertToast

struct CartScreen: View {
    
    // Routing management
    @Environment(\.nav) var nav: NavChange
    
    // App cart products
    @EnvironmentObject var cart: CartObservable
    
    // App common observable
    @EnvironmentObject var appState: AppObservable
    
    // View Model
    @ObservedObject var viewModel = CartViewModel()
    
    // States
    @State private var isShowingCartAdd: Bool = false
    @State private var isShowingCartDel: Bool = false
    
    var body: some View {
        VStack {
            if cart.isEmpty() {
                EmptyCartBody(
                    title: L10nCart.cartEmptyTitle,
                    subtitle: L10nCart.cartEmptyText
                )
            } else {
                if let response = viewModel.response {
                    AppScrollView {
                        ForEach(response) { model in
                            ProductCartItem(
                                disabled: viewModel.loading,
                                id: model.id,
                                icon: model.image1,
                                name: model.name,
                                desc: model.description_,
                                price: model.price,
                                action: {
                                    appState.cartIsBack = true
                                    nav.add(NavScreens.product(
                                        id: Int(model.id)
                                    ))
                                },
                                cartDel: {
                                    cart.remove(model.id)
                                    viewModel.remove(model.id)
                                    isShowingCartDel = true
                                    isShowingCartAdd = false
                                }
                            )
                        }
                    }
                    .refreshable {
                        await viewModel.loadAsync(cart.getIDs())
                    }
                    .onAppear {
                        appState.cartIsReady = true
                    }
                } else {
                    if viewModel.error != nil {
                        ErrorBody(action: {
                            viewModel.clear()
                            viewModel.load(cart.getIDs())
                        })
                    } else {
                        LoadingBody()
                    }
                }
            }
        }
        .onAppear {
            if !appState.cartIsBack {
                if !cart.isEmpty() {
                    viewModel.load(cart.getIDs())
                }
                appState.cartIsReady = false
            }
            appState.cartIsBack = false
        }
        .onDisappear {
            if !appState.cartIsBack {
                viewModel.clear()
            }
        }
        .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .center)
        .background(Color.background)
    }
}
