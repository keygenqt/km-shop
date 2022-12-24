//
//  ProductsScreen.swift
//  MyShop
//
//  Created by Виталий Зарубин on 19.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

struct ProductsScreen: View {
    
    // model
    @ObservedObject var viewModel = ProductsViewModel()
    
    let title: String
    
    init(
        categoryID: Int,
        collectionID: Int,
        title: String
    ) {
        self.title = title
        viewModel.load(
            categories: categoryID == 0 ? [] : [categoryID],
            collections: collectionID == 0 ? [] : [collectionID]
        )
    }
    
    var body: some View {
        VStack {
            Text("ProductsScreen")
        }
        .paddingPage()
        .colorize(title, true)
    }
}
