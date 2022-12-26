//
//  ErrorBody.swift
//  YouShop
//
//  Created by Виталий Зарубин on 21.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

struct ErrorBody: View {
    
    var btn: String = L10nApp.commonBtnError
    var action: (() -> Void)?
    
    var body: some View {
        VStack(spacing: 20) {
            ErrorAnimation()
            if let action = action {
                Button(btn) {
                    action()
                }.buttonStyle(BottonStyle())
            }
        }
        .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .center)
        .paddingPage()
    }
}
