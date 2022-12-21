//
//  CartScreen.swift
//  MyShop
//
//  Created by Виталий Зарубин on 19.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

struct CartScreen: View {
    var body: some View {
        VStack {
            EmptyCartBody(
                title: "Пусто",
                subtitle: "Ваша корзина пуста, добавьте интересующие вас товары и вернитесь"
            )
        }.paddingPage()
    }
}
