//
//  OrderRequest.swift
//  YouShop
//
//  Created by Виталий Зарубин on 22.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import Foundation
import shared

extension OrderProductResponse: Identifiable {}

class OrderRequests {
    // search order by number
    func orderByNumber(number: String) async throws -> OrderResponse {
        return try await withCheckedThrowingContinuation { continuation in
            ConstantsKMM.REQUEST.get.orderByNumber(number: number) { model, error in
                if let model = model {
                    continuation.resume(returning: model)
                } else {
                    continuation.resume(throwing: ResponseDefaultError.error(error?.localizedDescription))
                }
            }
        }
    }
    // create
    func orderCreate(
        phone: String,
        email: String,
        address: String,
        products: [CartItem]
    ) async throws -> OrderResponse {
        
        let products = KotlinArray<OrderProductRequest>.init(size: Int32(products.count)) { index in
            let i = Int(Int64(truncating: index))
            return OrderProductRequest(
                productID: products[i].id,
                count: Int32(products[i].count),
                price: products[i].price
            )
        }
        
        return try await withCheckedThrowingContinuation { continuation in
            ConstantsKMM.REQUEST.post.orderCreate(request:  OrderCreateRequest(
                email: email,
                phone: phone,
                address: address,
                products: products
            )) { model, error in
                if let model = model {
                    continuation.resume(returning: model)
                } else {
                    if let throwing = error.toErrorResponse() {
                        continuation.resume(throwing: throwing)
                    } else {
                        continuation.resume(throwing: ResponseDefaultError.error(error?.localizedDescription))
                    }
                }
            }
        }
    }
}
