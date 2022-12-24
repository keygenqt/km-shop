//
//  NavScreen.swift
//  YouShop
//
//  Created by Виталий Зарубин on 21.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI
import Foundation

struct NavScreens {
    
    // ContactScreen
    static func contact() -> NavDiscover {
        return NavDiscover(AnyView(ContactScreen()))
    }
    
    // ContactFormScreen
    static func contactForm() -> NavDiscover {
        return NavDiscover(AnyView(ContactFormScreen()))
    }
    
    // OrderScreen
    static func order(
        number: String
    ) -> NavDiscover {
        return NavDiscover(AnyView(OrderScreen(
            number: number
        )))
    }
    
    // OrderCreateScreen
    static func orderCreate() -> NavDiscover {
        return NavDiscover(AnyView(OrderCreateScreen()))
    }
    
    // OrderHistoryScreen
    static func orderHistory() -> NavDiscover {
        return NavDiscover(AnyView(OrderHistoryScreen()))
    }
    
    // OrderSearchScreen
    static func orderSearch() -> NavDiscover {
        return NavDiscover(AnyView(OrderSearchScreen()))
    }
    
    // ProductScreen
    static func product(
        id: Int
    ) -> NavDiscover {
        return NavDiscover(AnyView(ProductScreen(
            id: id
        )))
    }
    
    // ProductsScreen
    static func products(
        title: String,
        categoryID: Int = 0,
        collectionID: Int = 0
    ) -> NavDiscover {
        return NavDiscover(AnyView(ProductsScreen(
            title: title,
            categoryIDs: categoryID == 0 ? [] : [categoryID],
            collectionIDs: collectionID == 0 ? [] : [collectionID]
        )))
    }
}
