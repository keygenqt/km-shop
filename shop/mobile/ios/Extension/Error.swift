//
//  Error.swift
//  YouShop
//
//  Created by Виталий Зарубин on 23.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import Foundation
import shared

extension Error? {
    func toErrorResponse() -> ErrorResponse? {
        if let nsError = self as? NSError {
            if let responseEx = nsError.kotlinException as? ResponseException {
                
                // get validates
                var validate: [ErrorValidateResponse] = []
                for index in 0...(Int(responseEx.validate?.size ?? 1) - 1) {
                    if let violation = responseEx.validate?.get(index: Int32(index)) {
                        // get errors
                        var errors: [String] = []
                        for index2 in 0...(Int(violation.errors.size) - 1) {
                            if let error = violation.errors.get(index: Int32(index2)) {
                                // set error
                                errors.append(error as String)
                            }
                        }
                        // set validate
                        validate.append(ErrorValidateResponse(
                            filed: violation.filed,
                            errors: errors
                        ))
                    }
                }
                return ErrorResponse(
                    code: Int(responseEx.code),
                    message: responseEx.message,
                    validate: validate
                )
            }
        }
        return nil
    }
}
