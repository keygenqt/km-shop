//
//  AppMessageRequest.swift
//  YouShop
//
//  Created by Виталий Зарубин on 23.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import Foundation

struct ErrorResponse: Error {
    
    var code: Int
    var message: String
    var validate: [ErrorValidateResponse]

    func find(_ label: String) -> String? {
        for item in validate where item.filed == label {
            return item.errors.joined(separator: ", ")
        }
        return nil
    }

    mutating func clear(_ label: String) -> ErrorResponse? {
        for i in 0 ..< validate.count {
            if i < validate.count && validate[i].filed == label {
                self.validate.remove(at: i)
            }
        }
        return self.validate.isEmpty ? nil : self
    }
}

struct ErrorValidateResponse {
    var filed: String
    var errors: [String]
}
