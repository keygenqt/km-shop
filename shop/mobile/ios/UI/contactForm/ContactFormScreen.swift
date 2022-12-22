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
        AppForm(error: $error) {
            AppSection {
                HStack {
                    AppText(text: L10nContactForm.contactFormInfo, typography: .body1)
                    Spacer()
                }.padding()
            }
            
            AppSection(color: Color.error) {
                HStack {
                    AppText(text: "Error sumbit form", color: Color.onError, typography: .body1)
                    Spacer()
                }.padding()
            }
            
            AppSection(header: L10nContactForm.contactFormTitle2) {
                AppFieldText(field: $fieldEmail, initValidate: false) { error in
                    self.error = error
                }
                
                AppFieldText(field: $fieldFname, initValidate: false) { error in
                    self.error = error
                }
                
                AppFieldText(field: $fieldLname) { error in
                    self.error = error
                }
                
                AppFieldText(field: $fieldPhone) { error in
                    self.error = error
                }
                
                AppFieldText(field: $fieldMessage, initValidate: false) { error in
                    self.error = error
                }
            }
            
            AppSection(color: Color.transparent) {
                HStack {
                    Button {

                    } label: {
                        AppText(text: L10nContactForm.contactFormBtnSubmit, color: .white).textCase(nil)
                    }
                    .buttonStyle(BottonStyle())
                    .disabled(!fieldLname.isValid
                              || !fieldPhone.isValid
                              || !fieldEmail.isValid
                              || !fieldMessage.isValid)
                    Spacer()
                }
            }
        }
        .colorize(L10nApp.screenContactForm, true)
    }
}
