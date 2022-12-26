//
//  OrderProductList.swift
//  YouShop
//
//  Created by Виталий Зарубин on 26.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI
import shared

struct OrderProductList: View {
    
    // Routing management
    @Environment(\.nav) var nav: NavChange
    
    var sum: Double
    var products: [OrderProductResponse]
    
    var body: some View {
        VStack(spacing: 10) {
            HStack {
                Image(systemName: "list.bullet.circle").imageScale(.medium)
                AppText(L10nOrder.orderListTitle)
                Spacer()
            }.padding(.bottom, 4)
            
            ForEach(products) { model in
                OrderProductItem(
                    icon: model.product.image1,
                    name: model.product.name,
                    price: model.price,
                    count: Int(model.count),
                    action: {
                        nav.add(NavScreens.product(
                            id: Int(model.product.id)
                        ))
                    }
                )
            }
            
            HStack {
                Spacer()
                AppText("\(L10nOrder.orderListSum): \(sum.priceFormat())")
            }.padding(.top, 4)
        }
        .padding()
        .frame(maxWidth: .infinity)
    }
}
