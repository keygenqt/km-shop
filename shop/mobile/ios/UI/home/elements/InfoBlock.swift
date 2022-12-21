//
//  InfoBlock.swift
//  YouShop
//
//  Created by Виталий Зарубин on 21.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

struct InfoBlock: View {
    
    var action: (() -> Void)?
    
    var body: some View {
        VStack {
            ZStack {
                HStack {
                    VStack(alignment: .leading) {
                        AppText(text: L10nHome.infoBlockTitle, typography: .body2)
                        Spacer().frame(height: 16)
                        AppText(text: L10nHome.infoBlockSubtitle, typography: .h5)
                        Spacer().frame(height: 16)
                        Button(L10nHome.infoBlockBtn) {
                            action?()
                        }.buttonStyle(BottonStyle(
                            color: Color.btnBlack,
                            colorPress: Color.btnBlackPress,
                            size: .small
                        ))
                    }
                    Spacer()
                }.padding()
            }
            .overlay(HStack {
                Spacer()
                Image("girl")
                    .resizable()
                    .aspectRatio(contentMode: .fit)
                    .frame(width: 135, height: 110)
            }, alignment: .bottom)
        }
        .frame(maxWidth: .infinity)
        .background(Color.bgVariant2)
        .clipShape(Shapes.medium)
    }
}
