//
//  Int.swift
//  YouShop
//
//  Created by Виталий Зарубин on 22.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import Foundation

extension Int {
    func millisecondToNanoseconds() -> UInt64 {
        return UInt64(self) * 1_000_000
    }
}
