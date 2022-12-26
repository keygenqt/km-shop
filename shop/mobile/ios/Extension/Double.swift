//
//  Double.swift
//  YouShop
//
//  Created by Виталий Зарубин on 26.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import Foundation

extension Double {
    func priceFormat() -> String {
        
        let formatter = NumberFormatter()
        formatter.numberStyle = .decimal
        formatter.maximumFractionDigits = 2
        formatter.minimumFractionDigits = 2
        formatter.decimalSeparator = "."
        formatter.groupingSeparator = ","
        
        let number = NSNumber(value: self)
        let formattedValue = formatter.string(from: number)!
        return "₽ \(formattedValue)"
    }
    
    func toCGFloat() -> CGFloat {
        return CGFloat(self)
    }
}
