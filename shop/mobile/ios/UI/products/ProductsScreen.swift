//
//  ProductsScreen.swift
//  MyShop
//
//  Created by Виталий Зарубин on 19.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

struct ProductsScreen: View {
    
    let title: String
    
    init(title: String) {
        self.title = title
    }
    
    var body: some View {
        VStack {
            Text("ProductsScreen")
        }
        .toolbarColorize(title, true)
    }
}
