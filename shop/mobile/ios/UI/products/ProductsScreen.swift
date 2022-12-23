//
//  ProductsScreen.swift
//  MyShop
//
//  Created by Виталий Зарубин on 19.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

struct ProductsScreen: View {
    
    let categoryID: Int
    let collectionID: Int
    let title: String
    
    init(
        categoryID: Int,
        collectionID: Int,
        title: String
    ) {
        self.categoryID = categoryID
        self.collectionID = collectionID
        self.title = title
    }
    
    var body: some View {
        VStack {
            Text("ProductsScreen")
        }
        .paddingPage()
        .colorize(title, true)
    }
}
