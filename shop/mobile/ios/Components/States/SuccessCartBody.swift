//
//  SuccessCartBody.swift
//  YouShop
//
//  Created by Виталий Зарубин on 21.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

struct SuccessCartBody: View {
    
    var title: String
    var subtitle: String
    var btnTitle: String
    var action: (() -> Void)?
    
    var body: some View {
        VStack {
            SuccessCartAnimation()
            Spacer().frame(height: 24)
            AppText(title, typography: .h6)
            Spacer().frame(height: 10)
            AppText(subtitle, alignment: .center)
            Spacer().frame(height: 24)
            Button(btnTitle) {
                action?()
            }.buttonStyle(BottonStyle())
        }
        .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .center)
        .padding()
    }
}
