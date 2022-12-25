//
//  ExploringTabs.swift
//  MyShop
//
//  Created by Виталий Зарубин on 19.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

struct ExploringTabs: View {

    // App common observable
    @EnvironmentObject var appState: AppObservable
    
    var body: some View {
        VStack(spacing: 0) {
            Picker("", selection: $appState.exploringTab) {
                Text(L10nExploring.tab1)
                    .tag(TabsExploring.categories)
                Text(L10nExploring.tab2)
                    .tag(TabsExploring.collections)
            }
            .background(Color.transparent)
            .pickerStyle(SegmentedPickerStyle())
            .paddingPage(.all)
            
            VStack(spacing: 0) {
                if appState.exploringTab == TabsExploring.categories {
                    ExploringCategoriesScreen()
                } else {
                    ExploringCollectionsScreen()
                }
            }
        }
        .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .center)
        .background(Color.background)
    }
}
