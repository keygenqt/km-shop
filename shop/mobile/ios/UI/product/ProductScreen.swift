//
//  ProductScreen.swift
//  MyShop
//
//  Created by Виталий Зарубин on 19.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI
import Kingfisher

struct ProductScreen: View {
    
    // Routing management
    @Environment(\.nav) var nav: NavChange
    
    // App cart products
    @EnvironmentObject var cart: CartObservable

    // View Model
    @ObservedObject var viewModel: ProductViewModel
    
    init(id: Int) {
        self.viewModel = ProductViewModel(id: id)
        self.viewModel.load()
    }
    
    @State private var errorKF: Bool = false
    
    var body: some View {
        VStack {
            if let response = viewModel.response {
                AppScrollView {
                    
                    VStack {
                        if errorKF {
                            ZStack {
                                Circle().fill(Color.imageBorder).frame(width: 60, height: 60)
                                Image("no_image")
                                    .resizable()
                                    .aspectRatio(contentMode: .fill)
                                    .frame(width: UIScreen.main.bounds.width - 40, height: 230)
                                    .clipShape(Shapes.medium)
                            }
                        } else {
                            KFImage(URL(string: response.image1)!)
                                .placeholder {
                                    LoadingAnimationLarge()
                                }
                                .onFailure { _ in
                                    errorKF = true
                                }
                                .resizable()
                                .aspectRatio(contentMode: .fill)
                                .frame(width: UIScreen.main.bounds.width - 40, height: 230)
                                .clipShape(Shapes.medium)
                        }
                    }
                    
                    HStack {
                        VStack {
                            AppText(response.price.priceFormat(), color: Color.bgVariant6)
                        }
                        .padding(.vertical, 6)
                        .padding(.horizontal, 12)
                        .background(Color.surface)
                        .clipShape(Shapes.medium)
                        .overlay(Shapes.medium.stroke(Color.bgVariant6, lineWidth: 1))
                        
                        Spacer(minLength: 0)
                    }
                    
                    VStack(spacing: 10) {
                        HStack {
                            AppText(L10nProduct.productDescription, typography: .h6)
                            Spacer(minLength: 0)
                        }
                        HStack {
                            AppText(response.description_)
                            Spacer(minLength: 0)
                        }
                    }
                    
                    HStack {
                        Spacer(minLength: 0)
                        
                        if cart.has(response.id) {
                            Button(L10nProduct.productBtnRemove) {
                                
                            }.buttonStyle(BottonStyle(
                                color: Color.btnBlack,
                                colorPress: Color.btnBlackPress,
                                size: .small
                            ))
                        } else {
                            Button(L10nProduct.productBtnAdd) {
                                
                            }.buttonStyle(BottonStyle(
                                color: Color.btnBlack,
                                colorPress: Color.btnBlackPress,
                                size: .small
                            ))
                        }
                    }
                    
                    Divider()
                    
                    
                }.refreshable {
                    await viewModel.loadAsync()
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
