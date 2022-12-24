//
//  OrderSearchScreen.swift
//  MyShop
//
//  Created by Виталий Зарубин on 19.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

struct OrderSearchScreen: View {
    
    // Routing management
    @Environment(\.nav) var nav: NavChange

    @State private var error: String?
    
    @State private var orderNumberField: IFieldText = OrderNumberField()

    var body: some View {
        AppForm(error: $error, isShowCat: true) {
            
            AppSection {
                HStack {
                    AppText(L10nOrderSearch.orderSearchSubtitle, typography: .body1)
                    Spacer()
                }.padding()
            }.paddingPage(.top)
            
            AppSection {
                AppFieldText(
                    field: $orderNumberField,
                    textCase: .never,
                    actionError: { fieldError in
                        error = fieldError
                    }
                )
            }
            
            AppSection(color: Color.transparent) {
                HStack {
                    Button {
                        hideKeyboard()
                        nav.add(NavScreens.order(
                            number: orderNumberField.value
                        ))
                        orderNumberField.clear()
                    } label: {
                        AppText(L10nOrderSearch.orderSearchNumberBtn, color: .white).textCase(nil)
                    }
                    .buttonStyle(BottonStyle())
                    .disabled(!orderNumberField.isValid || orderNumberField.value.isEmpty)
                    Spacer()
                }
            }
        }
        .navigationBarItems(trailing: HStack(spacing: 0) {
            Button {
                hideKeyboard()
                nav.add(NavScreens.orderHistory())
                orderNumberField.clear()
            } label: {
                Image(systemName: "clock").imageScale(.large)
            }
        })
        .colorize(L10nApp.screenOrderSearch, true)
    }
}
