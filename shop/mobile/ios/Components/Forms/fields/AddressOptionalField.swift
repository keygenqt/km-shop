//
//  AddressField.swift
//  YouShop
//
//  Created by Виталий Зарубин on 21.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

// validates
private func checkIsLong(label: String, text: String) -> String? {
    return text.count >= 1000 ? "\(label.replacingOccurrences(of: " *", with: "")), очень дилинно" : nil
}

// field
struct AddressOptionalField: IFieldText {
    // params field
    var label: String = L10nFormFields.formFieldAddress
    var value: String = ""
    var isValid: Bool = false
    var lineLimit = 1 ... 10
    var validates = [
        checkIsLong,
    ]
}
