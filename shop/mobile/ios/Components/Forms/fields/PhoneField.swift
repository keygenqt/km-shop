//
//  PhoneField.swift
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
    return text.count >= 255 ? "\(label.replacingOccurrences(of: " *", with: "")), очень дилинно" : nil
}

// field
struct PhoneField: IFieldText {
    // params field
    var label: String = L10nFormFields.formFieldPhone + " *"
    var value: String = ""
    var isValid: Bool = false
    var lineLimit = 1 ... 1
    var keyboardType = UIKeyboardType.phonePad
    var validates = [
        checkIsBlank,
        checkIsLong,
    ]
}
