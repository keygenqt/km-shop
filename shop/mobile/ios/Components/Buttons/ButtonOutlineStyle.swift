//
//  ButtonOutlineStyle.swift
//  YouShop
//
//  Created by Виталий Зарубин on 21.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

struct ButtonOutlineStyle: ButtonStyle {
    var fullWith: Bool = false
    var size: ButtonStyleSize = .normal
    
    @Environment(\.isEnabled) var isEnabled

    @inlinable public func large(configuration: Configuration) -> some View {
        configuration.label
            .padding(.vertical, 11)
            .padding(.horizontal, 20)
            .font(Font.system(size: 24))
    }

    @inlinable public func normal(configuration: Configuration) -> some View {
        configuration.label
            .padding(.vertical, 11)
            .padding(.horizontal, 20)
            .font(Font.system(size: 20))
    }

    @inlinable public func small(configuration: Configuration) -> some View {
        configuration.label
            .padding(.vertical, 6)
            .padding(.horizontal, 12)
            .font(Font.system(size: 16))
    }

    @inlinable public func getLabel(configuration: Configuration) -> some View {
        switch size {
        case .large:
            return AnyView(large(configuration: configuration))
        case .normal:
            return AnyView(normal(configuration: configuration))
        default:
            return AnyView(small(configuration: configuration))
        }
    }

    @inlinable public func getRadius() -> CGFloat {
        switch size {
        case .large:
            return 8
        case .normal:
            return 8
        default:
            return 4
        }
    }

    func makeBody(configuration: Configuration) -> some View {
        getLabel(configuration: configuration)
            .frame(maxWidth: fullWith ? .infinity : nil)
            .foregroundColor(isEnabled ? Color.white.opacity(configuration.isPressed ? 0.7 : 1) : Color.gray)
            .background(Color.clear)
            .clipShape(Shapes.medium)
            .scaleEffect(configuration.isPressed ? 0.99 : 1)
            .animation(.easeOut(duration: 0.2), value: configuration.isPressed)
            .overlay(
                RoundedRectangle(cornerRadius: getRadius())
                    .stroke(isEnabled ? Color.white.opacity(configuration.isPressed ? 0.7 : 1) : Color.gray, lineWidth: 1)
                    .animation(.easeOut(duration: 0.2), value: configuration.isPressed)
            )
    }
}
