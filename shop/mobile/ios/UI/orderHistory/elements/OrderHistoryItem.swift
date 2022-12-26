//
//  OrderHistoryItem.swift
//  YouShop
//
//  Created by Виталий Зарубин on 26.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import Kingfisher
import SwiftUI

struct OrderHistoryItem: View {
    
    var images: [String]
    var number: String
    var sum: Double
    var action: () -> Void
    
    @State private var errorKF: Bool = false
    
    var body: some View {
        AppSection(color: Color.surface, onClick: action) {
            HStack(spacing: 0) {
                
                if errorKF {
                    ImageDefault()
                        .padding(.trailing)
                } else {
                    ImageCombine(
                        images: images
                    ).padding(.trailing)
                }
                
                VStack(alignment: .leading) {
                    AppText("# \(number)", maxLines: 1, typography: .h6)
                    Spacer().frame(height: 10)
                    AppText(sum.priceFormat(), typography: .caption)
                }
                
                Spacer()
            }.padding()
        }
    }
}
