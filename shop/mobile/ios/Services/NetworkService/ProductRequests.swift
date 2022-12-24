//
//  ProductRequest.swift
//  YouShop
//
//  Created by Виталий Зарубин on 22.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import Foundation
import shared

class ProductRequests {
    // get proudct list
    func productsPublished(
        page: Int,
        order: String,
        range: [Double],
        categories: [Int],
        collections: [Int]
    ) async throws -> ProductPageResponse {
        
        let kotlinRange = KotlinArray<KotlinDouble>.init(size: Int32(2)) { index in
            let i = Int(Int64(truncating: index))
            return KotlinDouble.init(double: range[i])
        }
        
        let kotlinCategories = KotlinArray<KotlinInt>.init(size: Int32(categories.count)) { index in
            let i = Int(Int64(truncating: index))
            return KotlinInt.init(int: Int32(categories[i]))
        }
        
        let kotlinCollections = KotlinArray<KotlinInt>.init(size: Int32(collections.count)) { index in
            let i = Int(Int64(truncating: index))
            return KotlinInt.init(int: Int32(collections[i]))
        }
        
        return try await withCheckedThrowingContinuation { continuation in
            ConstantsKMM.REQUEST.get.productsPublished(
                page: Int32(page),
                order: order,
                range: kotlinRange,
                categories: kotlinCategories,
                collections: kotlinCollections
            ) { model, error in
                if let model = model {
                    continuation.resume(returning: model)
                } else {
                    continuation.resume(throwing: ResponseError.error(error?.localizedDescription))
                }
            }
        }
    }
}
