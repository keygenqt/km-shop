//
//  OrderNumberField.swift
//  YouShop
//
//  Created by Виталий Зарубин on 22.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import Foundation
import SwiftUI

// validates
private func checkIsBlank(label: String, text: String) -> String? {
    return text.isEmpty ? "Обязательное поле" : nil
}

private func checkIsLong(label: String, text: String) -> String? {
    return text.count != 36 ? "Длинна номера заказа - 32 символа" : nil
}

private func checkLineFirst(label: String, text: String) -> String? {
    return text.prefix(1) == "-" ? "Не допустимый символ в начале" : nil
}

private func checkSymbolLast(label: String, text: String) -> String? {
    return text.last == "-" ? "Не допустимый символ в конце" : nil
}

private func checkSymbolDouble(label: String, text: String) -> String? {
    return text.contains("--") ? "Не допустимые символы" : nil
}

private func getErrorIsNotMatch(label: String, text: String) -> String? {
    return !text.matches("^[a-z\\d-]+$") ? "Не допустимые символы" : nil
}

// field
struct OrderNumberField: IFieldText {
    // params field
    var label: String = L10nFormFields.formFieldOrderNumber + " *"
    var value: String = ""
    var isClear: Bool = false
    var isValid: Bool = true
    var lineLimit = 1 ... 1
    var keyboardType = UIKeyboardType.numbersAndPunctuation
    var validates = [
        checkIsBlank,
        checkIsLong,
        checkLineFirst,
        checkSymbolLast,
        checkSymbolDouble,
        getErrorIsNotMatch,
    ]
    // clear field
    mutating func clear() {
        self.isValid = true
        self.isClear = true
        self.value = ""
    }
}
