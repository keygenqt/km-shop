//
//  OrderProductItem.swift
//  YouShop
//
//  Created by Виталий Зарубин on 26.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import Kingfisher
import SwiftUI

struct OrderProductItem: View {
    
    var icon: String
    var name: String
    var price: Double
    var count: Int
    
    var action: () -> Void
    
    @State private var errorKF: Bool = false
    
    var body: some View {
        AppSection(color: Color.background, onClick: action) {
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
                            .resizable()
                            .aspectRatio(contentMode: .fill)
                            .clipShape(Circle())
                            .clipped()
                            .frame(width: 50, height: 50)
                            .padding(.trailing)
                    }
                    
                    Spacer(minLength: 0)
                }
                
                VStack(alignment: .leading) {
                    AppText(name, typography: .body1)
                    Spacer().frame(height: 6)
                    AppText("\(price.priceFormat()) x \(count)", typography: .caption)
                }.offset(y: -1)
                
                Spacer(minLength: 0)
            }.padding()
        }
    }
}
