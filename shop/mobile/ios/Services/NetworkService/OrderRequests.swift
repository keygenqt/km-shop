//
//  OrderRequest.swift
//  YouShop
//
//  Created by Виталий Зарубин on 22.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import Foundation
import shared

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
        request: OrderCreateRequest
    ) async throws -> OrderResponse {
        return try await withCheckedThrowingContinuation { continuation in
            ConstantsKMM.REQUEST.post.orderCreate(request: request) { model, error in
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
