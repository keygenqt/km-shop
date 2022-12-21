//
//  OrderScreen.swift
//  MyShop
//
//  Created by Виталий Зарубин on 19.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

struct OrderScreen: View {
    
    @EnvironmentObject var navPath: NavObservable
    
    let number: String
    
    init(number: String) {
        self.number = number
    }
    
    var body: some View {
        VStack {
            Text("OrderScreen")
            Text(number)
        }
        .paddingPage()
        .colorize(L10nApp.screenOrder, true)
    }
}
