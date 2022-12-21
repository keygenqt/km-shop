//
//  ContactFormScreen.swift
//  MyShop
//
//  Created by Виталий Зарубин on 19.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

struct ContactFormScreen: View {
    
    // form states
    @State private var error: String?
    // form value
    @State private var fieldLname: IFieldText = LnameOptionalField()
    @State private var fieldPhone: IFieldText = PhoneOptionalField()
    
    @State private var fieldEmail: IFieldText = EmailField()
    @State private var fieldFname: IFieldText = FnameField()
    @State private var fieldMessage: IFieldText = MessageField()
    
    var body: some View {
        VStack(spacing: 0) {
            AppForm(error: $error) {
                
                Section {
                    AppText(text: L10nContactForm.contactFormInfo, typography: .body1)
                }
                
                Section(header: Text(L10nContactForm.contactFormTitle2)) {
                    AppFieldText(field: $fieldEmail, initValidate: false) { error in
                        self.error = error
                    }
                    AppFieldText(field: $fieldFname, initValidate: false) { error in
                        self.error = error
                    }
                    AppFieldText(field: $fieldLname, initValidate: true) { error in
                        self.error = error
                    }
                    AppFieldText(field: $fieldPhone, initValidate: true) { error in
                        self.error = error
                    }
                    AppFieldText(field: $fieldMessage, initValidate: false) { error in
                        self.error = error
                    }
                }
                
                Section(header: VStack(alignment: .center, spacing: 0) {
                    Button(L10nContactForm.contactFormBtnSubmit) {

                    }
                    .buttonStyle(BottonStyle())
                    .disabled(!fieldLname.isValid
                              || !fieldPhone.isValid
                              || !fieldEmail.isValid
                              || !fieldMessage.isValid)
                    .listRowInsets(.init())
                    .listRowBackground(Color.clear)
                }) {
                    EmptyView()
                }
                .padding(.leading, -20)
                .padding(.top, -7)
                
            }.padding(.top, -10)
        }
        .colorize(L10nApp.screenContactForm, true)
    }
}
