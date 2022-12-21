//
//  BottomPrimaryStyle.swift
//  YouShop
//
//  Created by Виталий Зарубин on 21.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

struct BottomPrimaryStyle: ButtonStyle {
    
    var fullWith: Bool = false
    @Environment(\.isEnabled) var isEnabled

    func makeBody(configuration: Configuration) -> some View {
        configuration.label
            .padding(.vertical, 11)
            .padding(.horizontal, 20)
            .frame(maxWidth: fullWith ? .infinity : nil)
            .font(Font.system(size: 20))
            .foregroundColor(Color.onPrimary)
            .background(isEnabled ? (configuration.isPressed ? Color.bgVariant5 : Color.primary) : Color.gray)
            .clipShape(RoundedRectangle(cornerSize: CGSize(width: 10, height: 10)))
            .scaleEffect(configuration.isPressed ? 0.99 : 1)
            .animation(.easeOut(duration: 0.2), value: configuration.isPressed)
    }
}
