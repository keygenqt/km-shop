//
//  ProductItem.swift
//  YouShop
//
//  Created by Виталий Зарубин on 24.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import Kingfisher
import SwiftUI

struct ProductItem: View {
    
    var icon: String
    var name: String
    var desc: String
    var price: Double
    var isCart: Bool
    
    var action: () -> Void
    var cartAction: (Bool) -> Void
    
    @State private var errorKF: Bool = false
    
    var body: some View {
        AppSection(color: Color.surface, onClick: action) {
            HStack(spacing: 0) {
                
                VStack {
                    if errorKF {
                        ImageDefault()
                            .padding(.trailing)
                    } else {
                        KFImage(URL(string: icon)!)
                            .placeholder {
                                LoadingAnimationBorder()
                            }
                            .onFailure { _ in
                                errorKF = true
                            }
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
                    Divider()
                    Spacer().frame(height: 13)
                    HStack(alignment: .center, spacing: 0) {
                        AppText(price.priceFormat())
                        Spacer()
                        VStack(spacing: 0) {
                            if isCart {
                                Button {
                                    cartAction(false)
                                } label: {
                                    Image(systemName: "cart.circle.fill")
                                        .imageScale(.large)
                                        .tint(Color.secondary)
                                }
                            } else {
                                Button {
                                    cartAction(true)
                                } label: {
                                    Image(systemName: "cart.circle")
                                        .imageScale(.large)
                                        .tint(Color.textCaption)
                                }
                            }
                        }.offset(x: 4)
                    }
                }
                
                Spacer()
            }.padding()
        }
    }
}
