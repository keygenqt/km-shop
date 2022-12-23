//
//  ClickModifier.swift
//  YouShop
//
//  Created by Виталий Зарубин on 23.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import Foundation
import SwiftUI

struct ClickModifier: ViewModifier {
    var disabled: Bool
    var action: () -> Void
    
    @State private var opacity = 0.0
    
    private let duration = 0.1
    
    func body(content: Content) -> some View {
        if disabled {
            content
        } else {
            content.onTapGesture {
                withAnimation(.linear(duration: duration)) {
                    opacity += 1.0
                }
                DispatchQueue.main.asyncAfter(deadline: .now() + duration) {
                    withAnimation(.linear(duration: duration)) {
                        opacity -= 1.0
                    }
                }
                DispatchQueue.main.asyncAfter(deadline: .now() + duration * 2) {
                    action()
                }
            }.overlay {
                if opacity > 0.0 {
                    Rectangle()
                        .fill(Color.onClick)
                        .clipShape(Shapes.medium)
                        .opacity(opacity)
                }
            }
        }
    }
}

extension View {
    func onClick(disabled: Bool = false, action: @escaping () -> Void) -> some View {
        return self.modifier(ClickModifier(
            disabled: disabled,
            action: action
        ))
    }
}
