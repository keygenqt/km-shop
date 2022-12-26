//
//  ResponseError.swift
//  YouShop
//
//  Created by Виталий Зарубин on 22.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import Foundation

enum ResponseDefaultError: Error, Equatable {
    case error(_ message: String? = nil)
}
