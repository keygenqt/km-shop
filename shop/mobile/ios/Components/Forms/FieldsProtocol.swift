//
//  IFieldText.swift
//  YouShop
//
//  Created by Виталий Зарубин on 21.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

protocol IField {
    var label: String { get set }
}

protocol IFieldSwitch: IField {
    var value: Bool { get set }
}

protocol IFieldText: IField {
    var value: String { get set }
    var isClear: Bool { get set }
    var isValid: Bool { get set }
    var keyboardType: UIKeyboardType { get set }
    var lineLimit: ClosedRange<Int> { get set }
    var validates: [(String, String) -> String?] { get set }
    mutating func clear()
}
