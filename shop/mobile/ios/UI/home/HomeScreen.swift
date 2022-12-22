//
//  HomeScreen.swift
//  MyShop
//
//  Created by Виталий Зарубин on 19.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

struct HomeScreen: View {
    var body: some View {
        AppScrollView {
            AppSection(color: Color.bgVariant2) {
                InfoBlock()
            }
            AppSection(color: Color.bgVariant1) {
                CategoriesBlock()
            }
        }
    }
}
