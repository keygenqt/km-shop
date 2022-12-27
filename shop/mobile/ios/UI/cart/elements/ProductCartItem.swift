//
//  ProductCartItem.swift
//  YouShop
//
//  Created by Виталий Зарубин on 26.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import Kingfisher
import SwiftUI

struct ProductCartItem: View {
    
    // App cart products
    @EnvironmentObject var cart: CartObservable
    
    var disabled: Bool
    var id: Int32
    var icon: String
    var name: String
    var desc: String
    var price: Double
    
    var action: () -> Void
    var cartDel: () -> Void
    
    @State private var errorKF: Bool = false
    
    var body: some View {
        AppSection(color: Color.surface, onClick: disabled ? nil : action) {
            VStack {
                HStack(spacing: 0) {
                    VStack {
                        if errorKF {
                            ImageDefault()
                                .padding(.trailing)
                        } else {
                            KFImage(URL(string: icon)!)
                                .placeholder {
                                    LoadingAnimationLarge()
                                }
                                .onFailure { _ in
                                    errorKF = true
                                }
                                .forceRefresh() // @todo
                                .resizable()
                                .aspectRatio(contentMode: .fill)
                                .clipShape(Circle())
                                .clipped()
                                .frame(width: 60, height: 60)
                                .padding(.trailing)
                        }
                        Spacer()
                    }
                    
                    VStack(alignment: .leading) {
                        AppText(name, typography: .h6)
                        Spacer().frame(height: 4)
                        AppText(desc, typography: .caption)
                        Spacer().frame(height: 10)
                    }
                    
                    Spacer()
                }
                
                Spacer().frame(height: 13)
                Divider()
                Spacer().frame(height: 13)
                
                HStack(alignment: .center, spacing: 0) {
                    CartChangeCount(
                        id: id,
                        price: price
                    )
                    Spacer().frame(width: 13)
                    AppText((price * Double(cart.getCount(id))).priceFormat())
                    Spacer()
                    VStack(spacing: 0) {
                        Button {
                            cartDel()
                        } label: {
                            Image(systemName: "cart.circle.fill")
                                .imageScale(.large)
                                .tint(Color.secondary)
                        }
                        .disabled(disabled)
                    }.offset(x: 4)
                }
            }.padding()
        }
    }
}
