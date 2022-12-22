//
//  BottomPrimaryStyle.swift
//  YouShop
//
//  Created by Виталий Зарубин on 21.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

struct BottonStyle: ButtonStyle {
    
    var color: Color = Color.primary
    var colorPress: Color = Color.bgVariant5
    var fullWith: Bool = false
    var size: ButtonStyleSize = .normal
    @Environment(\.isEnabled) var isEnabled
    
    @inlinable public func getShape() -> RoundedRectangle {
        switch size {
        case .large:
            return Shapes.medium
        case .normal:
            return Shapes.medium
        default:
            return Shapes.small
        }
    }
    
    @inlinable public func large(configuration: Configuration) -> some View {
        configuration.label
            .padding(.vertical, 11)
            .padding(.horizontal, 20)
            .font(Font.system(size: 24))
    }

    @inlinable public func normal(configuration: Configuration) -> some View {
        configuration.label
            .padding(.vertical, 8)
            .padding(.horizontal, 18)
            .font(Font.system(size: 18))
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

    func makeBody(configuration: Configuration) -> some View {
        getLabel(configuration: configuration)
            .frame(maxWidth: fullWith ? .infinity : nil)
            .foregroundColor(Color.onPrimary)
            .background(isEnabled ? (configuration.isPressed ? colorPress : color) : Color.gray)
            .clipShape(getShape())
            .scaleEffect(configuration.isPressed ? 0.99 : 1)
            .animation(.easeOut(duration: 0.2), value: configuration.isPressed)
    }
}
