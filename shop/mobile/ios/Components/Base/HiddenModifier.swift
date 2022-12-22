//
//  HiddenModifier.swift
//  YouShop
//
//  Created by Виталий Зарубин on 20.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import Foundation
import SwiftUI

struct HiddenModifier: ViewModifier {
    var isHide: Bool
    
    func body(content: Content) -> some View {
        if isHide {
            content.hidden().frame(width: 0).disabled(true)
        } else {
            content
        }
    }
}

extension View {
    func hiddenModifier(isHide: Bool) -> some View {
        return self.modifier(HiddenModifier(isHide: isHide))
    }
}
