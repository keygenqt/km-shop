//
//  LnameField.swift
//  YouShop
//
//  Created by Виталий Зарубин on 21.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

// validates
private func checkIsLong(label: String, text: String) -> String? {
    return text.count >= 255 ? "\(label.replacingOccurrences(of: " *", with: "")), очень дилинно" : nil
}

// field
struct LnameOptionalField: IFieldText {
    // params field
    var label: String = L10nFormFields.formFieldLname
    var value: String = ""
    var isClear: Bool = false
    var isValid: Bool = true
    var lineLimit = 1 ... 1
    var keyboardType = UIKeyboardType.asciiCapable
    var validates = [
        checkIsLong,
    ]
}
