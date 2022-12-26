//
//  Cart.swift
//  YouShop
//
//  Created by Виталий Зарубин on 26.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import Foundation

struct CartItem {
    var id: Int32
    var count: Int
    var price: Double
}

class CartObservable: ObservableObject {
    
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
    
    func addCount(_ id: Int32) {
        if let index = products.firstIndex(where: { $0.id == id }) {
            products[index].count += 1
        }
    }
    
    func delCount(_ id: Int32) {
        if let index = products.firstIndex(where: { $0.id == id }) {
            products[index].count -= 1
        }
    }
    
    func getCount(_ id: Int32) -> Int {
        if let index = products.firstIndex(where: { $0.id == id }) {
            return products[index].count
        }
        return 0
    }
    
    func getCount() -> Int {
        return products.map { $0.count }.reduce(0, +)
    }
    
    func isEmpty() -> Bool {
        return products.isEmpty
    }
    
    func getIDs() -> [Int] {
        return products.map { Int($0.id) }
    }
    
    func clear() {
        products.removeAll()
    }
}
