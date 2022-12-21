//
//  EmailOptionalField.swift
//  YouShop
//
//  Created by Виталий Зарубин on 21.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import Foundation

// validates
private func checkIsLong(label: String, text: String) -> String? {
    return text.count >= 255 ? "\(label.replacingOccurrences(of: " *", with: "")), очень дилинно" : nil
}

// field
struct EmailOptionalField: IFieldText {
    // params field
    var label: String = L10nFormFields.formFieldEmail
    var value: String = ""
    var isValid: Bool = true
    var lineLimit = 1 ... 1
    var validates = [
        checkIsLong,
    ]
}
