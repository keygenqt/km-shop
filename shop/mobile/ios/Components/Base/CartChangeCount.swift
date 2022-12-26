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
    
    var body: some View {
        HStack {
            Button {
                cart.delCount(id)
            } label: {
                Image(systemName: "minus.circle")
                    .imageScale(.medium)
                    .tint(Color.secondary)
            }
            .disabled(cart.getCount(id) <= 1)
            
            AppText("\(cart.getCount(id))")
            
            Button {
                cart.addCount(id)
            } label: {
                Image(systemName: "plus.circle")
                    .imageScale(.medium)
                    .tint(Color.secondary)
            }
        }
        .onTapGesture {}
    }
}
