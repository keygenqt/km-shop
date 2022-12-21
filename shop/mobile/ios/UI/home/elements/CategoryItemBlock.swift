//
//  CategoryItemBlock.swift
//  YouShop
//
//  Created by Виталий Зарубин on 21.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

struct CategoryItemBlock: View {
    
    @Environment(\.colorScheme) var colorScheme
    
    var bgIcon: String
    var actionItem: ((Int) -> Void)?
    
    var body: some View {
        ZStack {
            HStack {
                VStack(alignment: .leading) {
                    AppText(text: "Бантики", color: colorScheme == .dark ? Color.surface : Color.textCaption, typography: .caption)
                    Spacer().frame(height: 8)
                    AppText(text: "Стильные бантики ручной работы", color: Color.black, typography: .body1)
                    Spacer().frame(height: 14)
                    Button {
                        actionItem?(1)
                    } label: {
                        HStack {
                            AppText(text: L10nHome.categoryBlockBtn, color: Color.white)
                            Image(systemName: "arrow.right").imageScale(.small)
                        }
                    }.buttonStyle(BottonStyle(
                        color: Color.btnGray,
                        colorPress: Color.btnGrayPress,
                        size: .small
                    ))
                }.padding()
                Spacer()
            }
        }
        .overlay(HStack {
            Spacer()
            Image(bgIcon)
                .resizable()
                .aspectRatio(contentMode: .fit)
                .frame(width: 100, height: 110)
        }, alignment: .bottom)
        .frame(maxWidth: .infinity)
        .background(Color.white)
        .clipShape(Shapes.medium)
    }
}
