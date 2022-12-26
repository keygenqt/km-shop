//
//  Cart.swift
//  YouShop
//
//  Created by Виталий Зарубин on 26.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import Foundation

class CartObservable: ObservableObject {
    
    struct CartItem {
        var id: Int32
        var count: Int
        var price: Double
    }
    
    @Published var products: [CartItem] = []
    
    func add(
        id: Int32,
        count: Int,
        price: Double
    ) {
        products.append(CartItem(
            id: id,
            count: count,
            price: price
        ))
    }
    
    func remove(_ id: Int32) {
        if let index = products.firstIndex(where: { $0.id == id }) {
            products.remove(at: index)
        }
    }
    
    func has(_ id: Int32) -> Bool {
        return products.contains { $0.id == id }
    }
}
