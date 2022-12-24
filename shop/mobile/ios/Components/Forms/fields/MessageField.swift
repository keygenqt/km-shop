//
//  MessageField.swift
//  YouShop
//
//  Created by Виталий Зарубин on 21.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

// validates
private func checkIsBlank(label: String, text: String) -> String? {
    return text.isEmpty ? "\(label.replacingOccurrences(of: " *", with: "")), обязательное поле" : nil
}

private func checkIsLong(label: String, text: String) -> String? {
    return text.count >= 1000 ? "\(label.replacingOccurrences(of: " *", with: "")), очень дилинно" : nil
}

// field
struct MessageField: IFieldText {
    // params field
    var label: String = L10nFormFields.formFieldMessage + " *"
    var value: String = ""
    var isClear: Bool = false
    var isValid: Bool = true
    var lineLimit = 1 ... 10
    var keyboardType = UIKeyboardType.asciiCapable
    var validates = [
        checkIsBlank,
        checkIsLong,
    ]
    // clear field
    mutating func clear() {
        self.isValid = true
        self.isClear = true
        self.value = ""
    }
}
