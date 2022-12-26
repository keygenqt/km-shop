//
//  CategoryRequest.swift
//  YouShop
//
//  Created by Виталий Зарубин on 22.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import Foundation
import shared

extension CategoryResponse: Identifiable {}

class CategoryRequests {
    func categoriesPublished() async throws -> [CategoryResponse] {
        return try await withCheckedThrowingContinuation { continuation in
            ConstantsKMM.REQUEST.get.categoriesPublished { model, error in
                if let model = model {
                    continuation.resume(returning: model)
                } else {
                    continuation.resume(throwing: ResponseDefaultError.error(error?.localizedDescription))
                }
            }
        }
    }
}
