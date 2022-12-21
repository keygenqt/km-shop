//
//  EmailField.swift
//  YouShop
//
//  Created by Виталий Зарубин on 21.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import Foundation

// validates
private func checkIsBlank(label: String, text: String) -> String? {
    return text.isEmpty ? "\(label.replacingOccurrences(of: " *", with: "")), обязательное поле" : nil
}

private func checkIsLong(label: String, text: String) -> String? {
    return text.count >= 255 ? "\(label.replacingOccurrences(of: " *", with: "")), очень дилинно" : nil
}

// field
struct EmailField: IFieldText {
    // params field
    var label: String = L10nFormFields.formFieldEmail + " *"
    var value: String = ""
    var isValid: Bool = false
    var lineLimit = 1 ... 1
    var validates = [
        checkIsBlank,
        checkIsLong,
    ]
}
