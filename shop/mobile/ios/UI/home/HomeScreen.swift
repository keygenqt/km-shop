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
        ScrollView {
            VStack {
                Spacer().frame(height: 16)
                InfoBlock()
                Spacer().frame(height: 16)
                CategoriesBlock()
                Spacer().frame(height: 16)
                Spacer()
            }
        }

    }
}
