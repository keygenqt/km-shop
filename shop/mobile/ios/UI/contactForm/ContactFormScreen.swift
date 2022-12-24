//
//  ContactFormScreen.swift
//  MyShop
//
//  Created by Виталий Зарубин on 19.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

struct ContactFormScreen: View {
    
    // model
    @ObservedObject var viewModel = ContactFormViewModel()
    
    // form states
    @State private var error: String?
    
    // form value
    @State private var fieldEmail: IFieldText = EmailField()
    @State private var fieldFname: IFieldText = FnameField()
    @State private var fieldLname: IFieldText = LnameOptionalField()
    @State private var fieldPhone: IFieldText = PhoneOptionalField()
    @State private var fieldMessage: IFieldText = MessageField()

    var body: some View {
        ScrollViewReader { sc in
            AppForm(error: $error) {
                
                AppSection {
                    HStack {
                        AppText(L10nContactForm.contactFormInfo, typography: .body1)
                        Spacer()
                    }.padding()
                }.id(0).paddingPage([.top])
                
                if viewModel.error?.validate.isEmpty ?? false {
                    AppSection(color: Color.error) {
                        HStack {
                            AppText(viewModel.error?.message ?? "", color: Color.onError, typography: .body1)
                            Spacer()
                        }
                        .padding()
                    }.onTapGesture {
                        viewModel.clearError()
                    }
                }
                
                if viewModel.success {
                    AppSection(color: Color.success) {
                        HStack {
                            AppText(L10nContactForm.contactFormSuccess, color: Color.onSuccess, typography: .body1)
                            Spacer()
                        }
                        .padding()
                    }
                }
                
                AppSection(header: L10nContactForm.contactFormTitle2) {
                    AppFieldText(
                        field: $fieldEmail,
                        disable: viewModel.loading,
                        textCase: .never,
                        error: viewModel.error?.find("email"),
                        onChange: {
                            error = nil
                            viewModel.clearError("email")
                        },
                        actionError: { fieldError in
                            error = fieldError
                        }
                    )
                    
                    AppFieldText(
                        field: $fieldFname,
                        disable: viewModel.loading,
                        textCase: .words,
                        error: viewModel.error?.find("fname"),
                        onChange: {
                            error = nil
                            viewModel.clearError("fname")
                        },
                        actionError: { fieldError in
                            error = fieldError
                        }
                    )
                    
                    AppFieldText(
                        field: $fieldLname,
                        disable: viewModel.loading,
                        textCase: .words,
                        error: viewModel.error?.find("lname"),
                        onChange: {
                            error = nil
                            viewModel.clearError("lname")
                        },
                        actionError: { fieldError in
                            error = fieldError
                        }
                    )
                    
                    AppFieldText(
                        field: $fieldPhone,
                        disable: viewModel.loading,
                        textCase: .never,
                        error: viewModel.error?.find("phone"),
                        onChange: {
                            error = nil
                            viewModel.clearError("phone")
                        },
                        actionError: { fieldError in
                            error = fieldError
                        }
                    )
                    
                    AppFieldText(
                        field: $fieldMessage,
                        disable: viewModel.loading,
                        isDivider: false,
                        error: viewModel.error?.find("message"),
                        onChange: {
                            error = nil
                            viewModel.clearError("message")
                        }, actionError: { fieldError in
                            error = fieldError
                        }
                    )
                }
                
                AppSection(color: Color.transparent) {
                    HStack {
                        Button {
                            error = nil
                            hideKeyboard()
                            sc.scrollTo(0)
                            Task {
                                if await viewModel.createMessage(
                                    fname: fieldFname.value,
                                    lname: fieldLname.value,
                                    email: fieldEmail.value,
                                    phone: fieldPhone.value,
                                    message: fieldMessage.value
                                ) {
                                    fieldFname.clear()
                                    fieldLname.clear()
                                    fieldEmail.clear()
                                    fieldPhone.clear()
                                    fieldMessage.clear()
                                }
                            }
                        } label: {
                            HStack {
                                if viewModel.loading {
                                    ProgressView().tint(.white).scaleEffect(0.7)
                                    Spacer().frame(width: 10)
                                }
                                AppText(L10nContactForm.contactFormBtnSubmit, color: .white).textCase(nil)
                            }
                        }
                        .buttonStyle(BottonStyle())
                        .disabled(!fieldEmail.isValid || fieldEmail.value.isEmpty
                                  || !fieldFname.isValid || fieldFname.value.isEmpty
                                  || !fieldLname.isValid
                                  || !fieldPhone.isValid
                                  || !fieldMessage.isValid || fieldMessage.value.isEmpty
                                  || viewModel.loading
                        )
                        Spacer()
                    }
                }
            }
        }
        .navigationBarItems(trailing: HStack(spacing: 0) {
            if viewModel.loading {
                LoadingAnimation()
            }
        })
        .colorize(L10nApp.screenContactForm, true)
    }
}
