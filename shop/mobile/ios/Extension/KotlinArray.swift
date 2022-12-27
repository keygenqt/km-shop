//
//  KotlinArray.swift
//  YouShop
//
//  Created by Виталий Зарубин on 24.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import Foundation
import shared

extension KotlinArray<ProductResponse> {
    func toArray() -> [ProductResponse] {
        var result: [ProductResponse] = []
        for index in 0..<Int(self.size) {
            result.append(self.get(index: Int32(index))!)
        }
        return result
    }
}

extension KotlinArray<OrderProductResponse> {
    func toArray() -> [OrderProductResponse] {
        var result: [OrderProductResponse] = []
        for index in 0..<Int(self.size) {
            result.append(self.get(index: Int32(index))!)
        }
        return result
    }
}

extension KotlinArray<CollectionResponse> {
    func toArray() -> [CollectionResponse] {
        var result: [CollectionResponse] = []
        for index in 0..<Int(self.size) {
            result.append(self.get(index: Int32(index))!)
        }
        return result
    }
}
