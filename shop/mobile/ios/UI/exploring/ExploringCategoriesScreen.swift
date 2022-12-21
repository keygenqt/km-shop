//
//  ExploringCategoriesScreen.swift
//  MyShop
//
//  Created by Виталий Зарубин on 19.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

struct ExploringCategoriesScreen: View {
    
    @EnvironmentObject var navPath: NavObservable
    
    var body: some View {
        VStack {
            EmptyBody(
                title: L10nExploring.emptyTab1Title,
                subtitle: L10nExploring.emptyTab1Text
            )
        }
    }
}
