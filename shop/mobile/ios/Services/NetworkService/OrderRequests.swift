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
    func orderByNumber(_ number: String) async throws -> OrderResponse {
        return try await withCheckedThrowingContinuation { continuation in
            ConstantsKMM.REQUEST.get.orderByNumber(number: number) { model, error in
                if let model = model {
                    continuation.resume(returning: model)
                } else {
                    continuation.resume(throwing: ResponseError.error(error?.localizedDescription))
                }
            }
        }
    }
}
