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

    var initValidate: Bool = false
    var actionError: (String?) -> Void = { _ in }

    @State private var error: String?

    var body: some View {
        
        let validateField: (String) -> Void = { text in
            for validate in field.validates {
                error = validate(field.label, text)
                if error != nil {
                    break
                }
            }
            if error != nil {
                field.isValid = false
            } else {
                field.isValid = true
            }
        }
        
        ZStack {
            TextField(text: $field.value, prompt: Text(field.label), axis: field.lineLimit == 1 ... 1 ? .horizontal : .vertical) {
                Text(field.label)
            }
            .padding()
            .accentColor(Color.primary)
            .lineLimit(field.lineLimit)
            .onChange(of: field.value, perform: { text in
                validateField(text)
            })
            .onAppear {
                if !field.value.isEmpty || initValidate {
                    validateField(field.value)
                }
            }
            .keyboardType(field.keyboardType)
            .padding(.trailing, error != nil ? 30 : 0)
        }
        .overlay(VStack {
            Divider()
        }.padding(.leading), alignment: .bottom)
        .overlay(ZStack {
            VStack {
                Spacer().frame(height: 18)
                Image(systemName: "exclamationmark.circle.fill")
                    .foregroundColor(Color.error)
                    .onTapGesture(count: 1) {
                        actionError(error)
                    }
                Spacer()
            }.padding(.trailing).hiddenModifier(isHide: error == nil)
        }, alignment: .trailing)
    }
}
