//
//  ExploringTabs.swift
//  MyShop
//
//  Created by Виталий Зарубин on 19.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

struct ExploringTabs: View {
    
    @State private var selectedTab: Int = 0
    
    var body: some View {
        VStack {
            Picker("", selection: $selectedTab) {
                Text(L10nExploring.tab1).tag(0)
                Text(L10nExploring.tab2).tag(1)
            }
            .pickerStyle(SegmentedPickerStyle())
            
            Spacer()
            
            VStack {
                if selectedTab == 0 {
                    ExploringCategoriesScreen()
                } else {
                    ExploringCollectionsScreen()
                }
            }.padding(.top)
            Spacer()
        }
        .paddingPage()
    }
}
