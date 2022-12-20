//
//  View.swift
//  YouShop
//
//  Created by Виталий Зарубин on 20.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

extension View {
    public func toolbarColorize(_ title: String, _ isBack: Bool = false) -> some View {
        return toolbarBackground(Color.primary, for: .navigationBar)
            .toolbarBackground(.visible, for: .navigationBar)
            .toolbar {
                ToolbarItem(placement: .principal) {
                    VStack {
                        Spacer()
                        Text(title)
                            .bold()
                            .foregroundColor(.white)
                        Spacer()
                    }
                }
            }
            .navigationBarTitleDisplayMode(.inline)
            .accentColor(Color.onPrimary)
            .navigationBackButton(text: "Back", show: isBack)
    }
    
    public func toolbarLauncher() -> some View {
        return navigationBarItems(leading: HStack(spacing: 0) {
            Image("launcher")
                .resizable()
                .frame(width: 24, height: 24)
                .aspectRatio(contentMode: .fit)
                .clipShape(Circle())
        })
    }
}
