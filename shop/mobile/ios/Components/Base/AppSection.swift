//
//  AppSection.swift
//  YouShop
//
//  Created by Виталий Зарубин on 22.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

struct AppSection<Content: View>: View {
    
    var color: Color
    var header: String?
    var onClick: (() -> Void)?
    var content: () -> Content

    init(
        color: Color = Color.surface,
        header: String? = nil,
        onClick: (() -> Void)? = nil,
        @ViewBuilder content: @escaping () -> Content
    ) {
        self.color = color
        self.header = header
        self.onClick = onClick
        self.content = content
    }
    
    var body: some View {
        VStack(spacing: 0) {
            if header != nil {
                HStack {
                    AppText(header!)
                    Spacer()
                }.padding(.leading)
                Spacer().frame(height: 8)
            }
            
            VStack(spacing: 0) {
                content()
            }
            .frame(maxWidth: .infinity)
            .background(color)
            .clipShape(Shapes.medium)
            .onClick(disabled: onClick == nil) {
                onClick?()
            }
        }
    }
}
