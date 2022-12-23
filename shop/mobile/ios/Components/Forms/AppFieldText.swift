//
//  AppFieldText.swift
//  YouShop
//
//  Created by Виталий Зарубин on 21.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

struct AppFieldText: View {
    
    @Binding var field: IFieldText
    var disable: Bool = false
    var error: String?
    var isDivider: Bool = true
    var isInitValidate: Bool = false
    var onChange: (() -> Void)?
    var actionError: (String?) -> Void = { _ in }
    
    @State private var innerError: String?
    
    let validateField: (IFieldText, String) -> String? = { field, text in
        var result: String?
        for validate in field.validates {
            result = validate(field.label, text)
            if result != nil {
                return result
            }
        }
        return result
    }

    var body: some View {
        ZStack {
            TextField(text: $field.value, prompt: Text(field.label), axis: field.lineLimit == 1 ... 1 ? .horizontal : .vertical) {
                Text(field.label)
            }
            .padding()
            .accentColor(Color.primary)
            .lineLimit(field.lineLimit)
            .onChange(of: field.value, perform: { text in
                onChange?()
                if !field.isClear {
                    innerError = validateField(field, text)
                    if innerError != nil {
                        field.isValid = false
                    } else {
                        field.isValid = true
                    }
                }
            })
            .onAppear {
                field.isClear = false
                if isInitValidate {
                    innerError = validateField(field, field.value)
                    if innerError != nil {
                        field.isValid = false
                    } else {
                        field.isValid = true
                    }
                }
            }
            .keyboardType(field.keyboardType)
            .padding(.trailing, innerError != nil ? 30 : 0)
            .overlay(ZStack {
                if disable {
                    Rectangle().fill(Color.gray.opacity(0.3))
                }
            })
        }
        .overlay(VStack {
            if isDivider {
                Divider()
            }
        }.padding(.leading), alignment: .bottom)
        .overlay(ZStack {
            VStack {
                Spacer().frame(height: 18)
                Image(systemName: "exclamationmark.circle.fill")
                    .foregroundColor(Color.error)
                    .onTapGesture(count: 1) {
                        if error != nil {
                            actionError(error)
                        } else {
                            actionError(innerError)
                        }
                    }
                Spacer()
            }.padding(.trailing).hiddenModifier(isHide: field.isValid && error == nil)
        }, alignment: .trailing)
    }
}
