//
//  NavigationBackButton.swift
//  YouShop
//
//  Created by Виталий Зарубин on 20.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import Foundation
import SwiftUI

struct NavigationBackButton: ViewModifier {

    @Environment(\.presentationMode) var presentationMode
    var color: Color
    var text: String?
    var show: Bool = false

    func body(content: Content) -> some View {
        if !show {
            content.navigationBarBackButtonHidden(true)
        } else {
            content
                .navigationBarBackButtonHidden(true)
                .navigationBarItems(
                    leading: Button(action: {  presentationMode.wrappedValue.dismiss() }, label: {
                        HStack(spacing: 2) {
                            Image(systemName: "chevron.backward")
                                .foregroundColor(color)

                            if let text = text {
                                Text(text)
                                    .foregroundColor(color)
                            }
                        }
                    })
                )
        }
    }
}

extension View {
    func navigationBackButton(text: String, show: Bool, color: Color = Color.white) -> some View {
        modifier(NavigationBackButton(color: color, text: text, show: show))
    }
}
