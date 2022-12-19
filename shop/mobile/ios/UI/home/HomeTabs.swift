//
//  HomeTabs.swift
//  MyShop
//
//  Created by Виталий Зарубин on 19.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

struct HomeTabs: View {
    
    // page values
    @State private var selection = 0
    
    init() {
        UITabBar.appearance().backgroundColor = UIColor(Color.primary)
        UITabBar.appearance().unselectedItemTintColor = UIColor(Color.onPrimary.opacity(0.5))
    }
    
    var body: some View {
        TabView(selection: $selection) {
            NavigationView {
                HomeScreen()
            }
            .tabItem {
                VStack {
                    Image(systemName: "house.circle.fill")
                    Text(L10nApp.tab1)
                }
            }
            .tag(0)
            
            NavigationView {
                ExploringTabs()
            }
            .tabItem {
                VStack {
                    Image(systemName: "magnifyingglass.circle.fill")
                        .font(.largeTitle)
                    Text(L10nApp.tab2)
                }
            }
            .tag(1)
            
            NavigationView {
                CartScreen()
            }
            .tabItem {
                VStack {
                    Image(systemName: "cart.circle.fill")
                        .font(.largeTitle)
                    Text(L10nApp.tab3)
                }
            }
            .badge(5)
            .tag(2)
        }
        .accentColor(Color.onPrimary)
    }
}
