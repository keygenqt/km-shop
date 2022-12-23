//
//  NavScreen.swift
//  YouShop
//
//  Created by Виталий Зарубин on 21.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import Foundation

enum NavScreen: Hashable {
    case cart
    case contact
    case contactForm
    case exploring
    case order(String)
    case orderCreate
    case orderHistory
    case orderSearch
    case product(Int)
    case products(Int, Int, String)
}
