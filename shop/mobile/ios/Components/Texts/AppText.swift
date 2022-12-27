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
    var width: CGFloat?
    
    init(_ text: String,
         maxLines: Int = Int.max,
         color: Color? = nil,
         alignment: TextAlignment = .leading,
         typography: Typography = .body1,
         width: CGFloat? = nil
    ) {
        self.text = text
        self.maxLines = maxLines
        self.color = color
        self.alignment = alignment
        self.typography = typography
        self.width = width
    }
    
    func getFontSize() -> CGFloat {
        switch typography {
        case .h5: return 24
        case .h6: return 20
        case .body1: return 16
        case .body2: return 14
        case .caption: return 12
        }
    }
    
    func getFontWeight() -> Font.Weight {
        switch typography {
        case .h5: return .bold
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
        case .h5: return Color.onBackground
        case .h6: return Color.onBackground
        case .body1: return Color.onBackground
        case .body2: return Color.onBackground
        case .caption: return Color.textCaption
        }
    }

    var body: some View {
        Text(text)
            .if(width != nil, transform: { view in
                view.frame(width: width)
            })
            .font(Font.system(size: getFontSize()).weight(getFontWeight()))
            .foregroundColor(getFontColor())
            .lineSpacing(0.5)
//            .lineLimit(maxLines)
//            .multilineTextAlignment(alignment)
    }
}
