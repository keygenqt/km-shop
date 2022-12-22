//
//  AppSection.swift
//  YouShop
//
//  Created by Виталий Зарубин on 22.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

struct AppSection<Content: View>: View {
    
    var color: Color = Color.surface
    var header: String?
    var content: () -> Content

    init(color: Color = .white, header: String? = nil, @ViewBuilder content: @escaping () -> Content) {
        self.color = color
        self.header = header
        self.content = content
    }
    
    var body: some View {
        VStack(spacing: 0) {
            if header != nil {
                HStack {
                    AppText(text: header!)
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
            .paddingItemBottom()
        }
    }
}
