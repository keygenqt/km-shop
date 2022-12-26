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
        return  String(format: "₽ %.2f", self)
    }
    
    func toCGFloat() -> CGFloat {
        return CGFloat(self)
    }
}
