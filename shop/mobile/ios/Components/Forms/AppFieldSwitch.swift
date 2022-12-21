//
//  AppFieldSwitch.swift
//  YouShop
//
//  Created by Виталий Зарубин on 21.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

struct AppFieldSwitch: View {
    @Binding var field: IFieldSwitch
    @State private var isOn: Bool

    init(field: Binding<IFieldSwitch>) {
        _field = field
        _isOn = State(initialValue: field.wrappedValue.value)
    }

    var body: some View {
        Toggle(field.label, isOn: $isOn).onChange(of: isOn, perform: { value in
            field.value = value
        })
    }
}
