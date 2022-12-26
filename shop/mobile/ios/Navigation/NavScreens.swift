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
    
    // SplashScreen
    static func splash() -> NavDiscover {
        return NavDiscover(AnyView(SplashScreen()))
    }
    
    // CartScreen
    static func cart() -> NavDiscover {
        return NavDiscover(AnyView(CartScreen()))
    }
    
    // ContactScreen
    static func contact() -> NavDiscover {
        return NavDiscover(AnyView(ContactScreen()))
    }
    
    // ContactFormScreen
    static func contactForm() -> NavDiscover {
        return NavDiscover(AnyView(ContactFormScreen()))
    }
    
    // ExploringScreen
    static func exploring() -> NavDiscover {
        return NavDiscover(AnyView(ExploringTabs()))
    }
    
    // HomeScreen
    static func home() -> NavDiscover {
        return NavDiscover(AnyView(HomeScreen()))
    }
    
    // ExploringTabs
    static func homeTabs() -> NavDiscover {
        return NavDiscover(AnyView(HomeTabs()))
    }
    
    // ExploringCategoriesScreen
    static func categories() -> NavDiscover {
        return NavDiscover(AnyView(ExploringCategoriesScreen()))
    }
    
    // ExploringCollectionsScreen
    static func collections() -> NavDiscover {
        return NavDiscover(AnyView(ExploringCollectionsScreen()))
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
    static func orderCreate(
        items: [CartItem]
    ) -> NavDiscover {
        return NavDiscover(AnyView(OrderCreateScreen(
            items: items
        )))
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
