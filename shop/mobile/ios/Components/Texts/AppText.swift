//
//  TextCaption.swift
//  YouShop
//
//  Created by Виталий Зарубин on 21.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

struct AppText: View {
    var text: String
    var maxLines = Int.max
    var color: Color?
    var alignment: TextAlignment = .leading
    var typography: Typography = .body1
    
    init(_ text: String) {
        self.text = text
    }
    
    init(_ text: String, maxLines: Int) {
        self.text = text
        self.maxLines = maxLines
    }
    
    init(_ text: String, alignment: TextAlignment) {
        self.text = text
        self.alignment = alignment
    }
    
    init(_ text: String, typography: Typography) {
        self.text = text
        self.typography = typography
    }
    
    init(_ text: String, typography: Typography, maxLines: Int) {
        self.text = text
        self.typography = typography
        self.maxLines = maxLines
    }
    
    func getFontSize() -> CGFloat {
        switch typography {
        case .h6: return 20
        case .body1: return 16
        case .body2: return 14
        case .caption: return 12
        }
    }
    
    func getFontWeight() -> Font.Weight {
        switch typography {
        case .h6: return .bold
        case .body1: return .regular
        case .body2: return .regular
        case .caption: return .light
        }
    }
    
    func getFontColor() -> Color {
        if color != nil {
            return color!
        }
        switch typography {
        case .h6: return Color.onBackground
        case .body1: return Color.onBackground
        case .body2: return Color.onBackground
        case .caption: return Color.textCaption
        }
    }

    var body: some View {
        Text(text)
            .font(Font.system(size: getFontSize()).weight(getFontWeight()))
            .foregroundColor(getFontColor())
            .lineSpacing(0.5)
            .lineLimit(maxLines)
            .multilineTextAlignment(alignment)
    }
}
