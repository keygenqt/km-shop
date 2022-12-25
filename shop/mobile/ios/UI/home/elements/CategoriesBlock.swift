//
//  CategoriesBlock.swift
//  YouShop
//
//  Created by Виталий Зарубин on 21.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI
import shared

struct CategoriesBlock: View {
    
    var categories: [CategoryResponse]
    var actionAll: (() -> Void)?
    var actionItem: ((String, Int) -> Void)?
    
    private let backgrounds: [String] = [
        "cat_bg_1",
        "cat_bg_3",
        "cat_bg_5",
    ]
    
    var body: some View {
        VStack {
            VStack {
                HStack {
                    AppText(L10nHome.categoryBlockTitle, typography: .h6)
                    Spacer()
                    Button(L10nHome.categoryBlockTitleBtn) {
                        actionAll?()
                    }.buttonStyle(BottonStyle(
                        size: .small
                    ))
                }
                
                VStack(spacing: 10) {
                    ForEach(0..<categories.count, id: \.self) { index in
                        CategoryItemBlock(
                            id: Int(categories[index].id),
                            name: categories[index].name,
                            desc: categories[index].desc,
                            bgIcon: backgrounds[index],
                            actionItem: { title, id in
                                actionItem?(title, id)
                            }
                        )
                    }
                }
            }
            .padding()
        }
        .frame(maxWidth: .infinity)
    }
}
