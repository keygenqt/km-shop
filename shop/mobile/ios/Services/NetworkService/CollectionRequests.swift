//
//  CollectionRequest.swift
//  YouShop
//
//  Created by Виталий Зарубин on 22.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import Foundation
import shared

extension CollectionResponse: Identifiable {}

class CollectionRequests {
    func collectionsPublished() async throws -> [CollectionResponse] {
        return try await withCheckedThrowingContinuation { continuation in
            ConstantsKMM.REQUEST.get.collectionsPublished { model, error in
                if let model = model {
                    continuation.resume(returning: model)
                } else {
                    continuation.resume(throwing: ResponseError.error(error?.localizedDescription))
                }
            }
        }
    }
}
