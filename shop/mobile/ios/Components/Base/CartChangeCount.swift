//
//  CartChangeCount.swift
//  YouShop
//
//  Created by Виталий Зарубин on 26.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import Foundation
import SwiftUI

struct CartChangeCount: View {
    
    // App cart products
    @EnvironmentObject var cart: CartObservable
    
    var id: Int32
    var price: Double
    var scale: Scale = Scale.medium
    var onFirstAdded: (() -> Void)?
    
    private func getImageScale() -> Image.Scale {
        switch scale {
        case .small:
            return .small
        case .medium:
           return .medium
        case .large:
            return .large
        }
    }
    
    private func getTypography() -> Typography {
        switch scale {
        case .small:
            return .caption
        case .medium:
           return .body1
        case .large:
            return .h6
        }
    }
    
    private func getWidthText() -> CGFloat {
        switch scale {
        case .small:
            return 15
        case .medium:
           return 20
        case .large:
            return 30
        }
    }
    
    private func getVertical() -> CGFloat {
        switch scale {
        case .small:
            return 3
        case .medium:
           return 3
        case .large:
            return 7
        }
    }
    
    private func getHorizontal() -> CGFloat {
        switch scale {
        case .small:
            return 6
        case .medium:
           return 3
        case .large:
            return 10
        }
    }
    
    var body: some View {
        HStack {
            Button {
                cart.del(id)
            } label: {
                Image(systemName: "minus.circle.fill")
                    .imageScale(getImageScale())
                    .tint(Color.primary)
            }
            .disabled(cart.getCount(id) <= 1)
            .padding(.trailing, -4)
            
            VStack {
                AppText("\(cart.getCount(id))", typography: getTypography())
            }.frame(width: getWidthText())
            
            Button {
                if !cart.has(id) {
                    onFirstAdded?()
                }
                cart.add(id: id, price: price)
            } label: {
                Image(systemName: "plus.circle.fill")
                    .imageScale(getImageScale())
                    .tint(Color.primary)
            }
            .disabled(cart.getCount(id) > 99)
            .padding(.leading, -4)
        }
        .onTapGesture {}
        .padding(.vertical, getVertical())
        .padding(.horizontal, getHorizontal())
        .background(Color.bgVariant1)
        .clipShape(Shapes.medium)
    }
}
