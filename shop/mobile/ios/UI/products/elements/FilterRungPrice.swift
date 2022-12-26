//
//  FilterRungPrice.swift
//  YouShop
//
//  Created by Виталий Зарубин on 26.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import Foundation
import SwiftUI
import MultiSlider

struct FilterRungPrice: View {
    
    var prices: ClosedRange<Double>
    var onValueChangeFinished: ([CGFloat]) -> Void
    
    @Binding private var range: [CGFloat]
    @State private var job: Task<(), Never>?
    
    init(
        range: Binding<[CGFloat]>,
        prices: ClosedRange<Double>,
        onValueChangeFinished: @escaping ([CGFloat]) -> Void
    ) {
        _range = range
        self.prices = prices
        self.onValueChangeFinished = onValueChangeFinished
    }
    
    var body: some View {
        VStack(spacing: 0) {
            AppText(L10nProducts.productsFilterTitle, typography: .h6)
            
            Spacer().frame(height: 16)
            
            AppText(L10nProducts.productsFilterSubtitle, typography: .caption)
            
            Spacer().frame(height: 8)
            
            ZStack {
                MultiValueSlider(
                    value: $range.onChange { value in
                        DispatchQueue.main.asyncAfter(deadline: .now() + 1.0) {
                            if value == range {
                                onValueChangeFinished(value)
                            }
                        }
                    },
                    minimumValue: prices.lowerBound.toCGFloat(),
                    maximumValue: prices.upperBound.toCGFloat(),
                    orientation: .horizontal,
                    showsThumbImageShadow: false
                )
            }
            .paddingPage([.leading, .trailing])
            .frame(width: UIScreen.main.bounds.width, height: 80, alignment: .center)
            
            HStack {
                AppText(range[0].toDouble().priceFormat(), typography: .h6)
                Spacer()
                AppText(range[1].toDouble().priceFormat(), typography: .h6)
            }
            .padding([.leading, .trailing], 8)
            
        }.paddingPage()
    }
}
