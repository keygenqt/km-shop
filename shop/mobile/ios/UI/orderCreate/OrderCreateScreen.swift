//
//  OrderCreateScreen.swift
//  MyShop
//
//  Created by Виталий Зарубин on 19.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

struct OrderCreateScreen: View {
    
    // Routing management
    @Environment(\.nav) var nav: NavChange
    
    // App cart products
    @EnvironmentObject var cart: CartObservable
    
    // App common observable
    @EnvironmentObject var appState: AppObservable

    // View Model
    @ObservedObject var viewModel: OrderCreateViewModel
    
    // Form states
    @State private var error: String?
    
    // Form fields
    @State private var fieldPhone: IFieldText = PhoneField()
    @State private var fieldEmail: IFieldText = EmailOptionalField()
    @State private var fieldAddress: IFieldText = AddressOptionalField()
    
    init(items: [CartItem]) {
        self.viewModel = OrderCreateViewModel(items)
    }

    var body: some View {
        VStack(spacing: 0) {
            if let number = viewModel.number {
                SuccessCartBody(
                    title: L10nOrderCreate.orderCreateSuccessTitle,
                    subtitle: L10nOrderCreate.orderCreateSuccessText,
                    btnTitle: L10nOrderCreate.orderCreateSuccessBtn,
                    action: {
                        nav.insert([
                            NavScreens.homeTabs(),
                            NavScreens.orderSearch(),
                            NavScreens.orderHistory(),
                            NavScreens.order(number: number),
                        ])
                        appState.homeTab = .home
                    }
                ).onAppear {
                    cart.clear()
                }
            } else {
                ScrollViewReader { sc in
                    AppForm(error: $error) {
                        AppSection {
                            HStack {
                                AppText(L10nOrderCreate.orderCreateInfo, typography: .body1)
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
                        
                        AppSection(header: L10nOrderCreate.orderCreateTitle2) {
                            
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
                                field: $fieldAddress,
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
                                        if await viewModel.createOrder(
                                            phone: fieldPhone.value,
                                            email: fieldEmail.value,
                                            address: fieldAddress.value
                                        ) {
                                            fieldPhone.clear()
                                            fieldEmail.clear()
                                            fieldAddress.clear()
                                        }
                                    }
                                } label: {
                                    HStack {
                                        if viewModel.loading {
                                            ProgressView().tint(.white).scaleEffect(0.7)
                                            Spacer().frame(width: 10)
                                        }
                                        AppText(L10nOrderCreate.orderCreateBtnSubmit, color: .white).textCase(nil)
                                    }
                                }
                                .buttonStyle(BottonStyle())
                                .disabled(!fieldPhone.isValid || fieldPhone.value.isEmpty
                                          || !fieldEmail.isValid
                                          || !fieldAddress.isValid
                                          || viewModel.loading
                                )
                                Spacer()
                            }
                        }
                    }
                }
            }
        }
        .colorize(L10nApp.screenOrderCreate, true)
    }
}
