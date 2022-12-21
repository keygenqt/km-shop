//
//  EmptyCartBody.swift
//  YouShop
//
//  Created by Виталий Зарубин on 21.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

struct EmptyCartBody: View {
    
    var title: String
    var subtitle: String
    
    var body: some View {
        VStack {
            EmptyCartAnimation()
            Spacer().frame(height: 24)
            AppText(text: title, typography: .h6)
            Spacer().frame(height: 10)
            AppText(text: subtitle, alignment: .center)
        }
        .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .center)
    }
}
