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
    @State private var fieldEmail: IFieldText = EmailField()
    @State private var fieldFname: IFieldText = FnameField()
    @State private var fieldLname: IFieldText = LnameOptionalField()
    @State private var fieldPhone: IFieldText = PhoneOptionalField()
    @State private var fieldMessage: IFieldText = MessageField()
    
    var body: some View {
        AppForm(error: $error) {
            AppSection {
                HStack {
                    AppText(text: L10nContactForm.contactFormInfo, typography: .body1)
                    Spacer()
                }.padding()
            }
            
            if error != nil {
                AppSection(color: Color.error) {
                    HStack {
                        AppText(text: error!, color: Color.onError, typography: .body1)
                        Spacer()
                    }.padding()
                }
            }
            
            AppSection(header: L10nContactForm.contactFormTitle2) {
                AppFieldText(field: $fieldEmail) { error in
                    self.error = error
                }
                
                AppFieldText(field: $fieldFname) { error in
                    self.error = error
                }
                
                AppFieldText(field: $fieldLname) { error in
                    self.error = error
                }
                
                AppFieldText(field: $fieldPhone) { error in
                    self.error = error
                }
                
                AppFieldText(field: $fieldMessage, isDivider: false) { error in
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
                    .disabled(!fieldEmail.isValid || fieldEmail.value.isEmpty
                              || !fieldFname.isValid || fieldFname.value.isEmpty
                              || !fieldLname.isValid
                              || !fieldPhone.isValid
                              || !fieldMessage.isValid || fieldMessage.value.isEmpty)
                    Spacer()
                }
            }
        }
        .colorize(L10nApp.screenContactForm, true)
    }
}
