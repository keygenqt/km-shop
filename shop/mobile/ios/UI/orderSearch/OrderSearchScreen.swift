//
//  OrderSearchScreen.swift
//  MyShop
//
//  Created by Виталий Зарубин on 19.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

struct OrderSearchScreen: View {
    
    @EnvironmentObject var navPath: NavObservable
    
    @State private var error: String?
    
    @State private var orderNumberField: IFieldText = OrderNumberField()
    
    var body: some View {
        AppForm(error: $error, isShowCat: true) {
            AppSection {
                HStack {
                    AppText(text: L10nOrderSearch.orderSearchSubtitle, typography: .body1)
                    Spacer()
                }.padding()
            }
            
            AppSection {
                AppFieldText(field: $orderNumberField, isDivider: false) { error in
                    self.error = error
                }
            }
            
            AppSection(color: Color.transparent) {
                HStack {
                    Button {
                        hideKeyboard()
                        navPath.add(NavScreen.order(orderNumberField.value))
                        orderNumberField.isValid = true
                        orderNumberField.isClear = true
                        orderNumberField.value = ""
                    } label: {
                        AppText(text: L10nOrderSearch.orderSearchNumberBtn, color: .white).textCase(nil)
                    }
                    .buttonStyle(BottonStyle())
                    .disabled(!orderNumberField.isValid)
                    Spacer()
                }
            }
        }
        .navigationBarItems(trailing: HStack(spacing: 0) {
            Button {
                hideKeyboard()
                navPath.add(NavScreen.orderHistory)
                orderNumberField.isValid = true
                orderNumberField.isClear = true
                orderNumberField.value = ""
            } label: {
                Image(systemName: "clock").imageScale(.large)
            }
        })
        .colorize(L10nApp.screenOrderSearch, true)
    }
}
