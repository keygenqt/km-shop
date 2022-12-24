//
//  MessageRequest.swift
//  YouShop
//
//  Created by Виталий Зарубин on 22.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import Foundation
import shared

class MessageRequests {
    // create
    func message(
        request: MessageRequest
    ) async throws -> MessageResponse {
        return try await withCheckedThrowingContinuation { continuation in
            ConstantsKMM.REQUEST.post.message(request: request) { model, error in
                if let model = model {
                    continuation.resume(returning: model)
                } else {
                    if let throwing = error.toErrorResponse() {
                        continuation.resume(throwing: throwing)
                    } else {
                        continuation.resume(throwing: ResponseError.error(error?.localizedDescription))
                    }
                }
            }
        }
    }
}
