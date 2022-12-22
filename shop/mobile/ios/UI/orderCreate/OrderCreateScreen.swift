//
//  OrderCreateScreen.swift
//  MyShop
//
//  Created by Виталий Зарубин on 19.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

struct OrderCreateScreen: View {
    
    @EnvironmentObject var navPath: NavObservable
    
    var onChangeTab: (() -> Void)
    
    // form states
    @State private var isSuccess: Bool = false
    @State private var error: String?
    // form value
    @State private var fieldPhone: IFieldText = PhoneField()
    @State private var fieldEmail: IFieldText = EmailOptionalField()
    @State private var fieldAddress: IFieldText = AddressOptionalField()
    
    var body: some View {
        VStack(spacing: 0) {
            if isSuccess {
                SuccessCartBody(
                    title: L10nOrderCreate.orderCreateSuccessTitle,
                    subtitle: L10nOrderCreate.orderCreateSuccessText,
                    btnTitle: L10nOrderCreate.orderCreateSuccessBtn,
                    action: {
                        navPath.insert([
                            NavScreen.orderSearch,
                            NavScreen.orderHistory,
                            NavScreen.order("fda81678-70b2-409e-950d-36918f1c62b7"),
                        ])
                        onChangeTab()
                    }
                )
            } else {
                AppForm(error: $error) {
                    AppSection {
                        HStack {
                            AppText(text: L10nOrderCreate.orderCreateInfo, typography: .body1)
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
                    
                    AppSection(header: L10nOrderCreate.orderCreateTitle2) {
                        AppFieldText(field: $fieldPhone) { error in
                            self.error = error
                        }

                        AppFieldText(field: $fieldEmail) { error in
                            self.error = error
                        }

                        AppFieldText(field: $fieldAddress, isDivider: false) { error in
                            self.error = error
                        }
                    }
                    
                    AppSection(color: Color.transparent) {
                        HStack {
                            Button {
                                isSuccess = true
                            } label: {
                                AppText(text: L10nOrderCreate.orderCreateBtnSubmit, color: .white).textCase(nil)
                            }
                            .buttonStyle(BottonStyle())
                            .disabled(!fieldPhone.isValid || fieldPhone.value.isEmpty
                                      || !fieldEmail.isValid
                                      || !fieldAddress.isValid)
                            Spacer()
                        }
                    }
                }
            }
        }
        .colorize(L10nApp.screenOrderCreate, true)
    }
}
