//
//  CategoriesBlock.swift
//  YouShop
//
//  Created by Виталий Зарубин on 21.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

struct CategoriesBlock: View {
    
    var actionAll: (() -> Void)?
    var actionItem: ((Int) -> Void)?
    
    var body: some View {
        VStack {
            VStack {
                HStack {
                    AppText(text: L10nHome.categoryBlockTitle, typography: .h6)
                    Spacer()
                    Button(L10nHome.categoryBlockTitleBtn) {
                        actionAll?()
                    }.buttonStyle(BottonStyle(
                        size: .small
                    ))
                }
                
                VStack {
                    CategoryItemBlock(bgIcon: "cat_bg_1")
                    Spacer().frame(height: 16)
                    CategoryItemBlock(bgIcon: "cat_bg_3")
                    Spacer().frame(height: 16)
                    CategoryItemBlock(bgIcon: "cat_bg_5")
                }
            }
            .padding()
        }
        .frame(maxWidth: .infinity)
        .background(Color.bgVariant1)
        .clipShape(Shapes.medium)
        .padding(.horizontal)
    }
}
