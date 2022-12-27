//
//  ProudctInfoBlock.swift
//  YouShop
//
//  Created by Виталий Зарубин on 27.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import Foundation
import SwiftUI

struct ProudctInfoBlock: View {
    
    var color: String
    var icon: String
    var title: String
    var text: String
    
    var body: some View {
        VStack {
            HStack {
                VStack(alignment: .leading, spacing: 0) {
                    Image(systemName: icon)
                        .imageScale(.medium)
                        .foregroundColor(Color.onBackground)
                    Spacer().frame(height: 10)
                    AppText(title, typography: .body2).fontWeight(.bold)
                    Spacer().frame(height: 6)
                    AppText(text, typography: .caption)
                }
                Spacer(minLength: 0)
            }
        }
        .padding()
        .frame(maxWidth: .infinity)
        .background(Color(color))
        .clipShape(Shapes.medium)
    }
}
