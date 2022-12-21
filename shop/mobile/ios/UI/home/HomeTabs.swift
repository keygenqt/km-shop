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
    @Binding var selection: Int
    
    @EnvironmentObject var navPath: NavObservable
    
    init(selection: Binding<Int>) {
        _selection = selection
        UITabBar.appearance().isTranslucent = false
        UITabBar.appearance().barTintColor = UIColor(Color.primary)
        UITabBar.appearance().backgroundColor = UIColor(Color.primary)
        UITabBar.appearance().unselectedItemTintColor = UIColor(Color.onPrimary.opacity(0.5))
    }
    
    @State private var opacityTab1 = -1.0
    @State private var opacityTab2 = 0.5
    @State private var opacityTab3 = 0.5
    
    var body: some View {
        TabView(selection: $selection) {
            VStack {
                HomeScreen()
                    .opacity(opacityTab1)
                    .onAppear {
                        opacityTab1 = 0.7
                        withAnimation(.linear(duration: 0.2)) {
                            opacityTab1 += 0.3
                        }
                    }
                    .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .center)
                    .background(Color.background)
            }
            .tabItem {
                VStack {
                    Image(systemName: "house.circle.fill")
                    Text(L10nApp.tab1)
                }
            }
            .tag(0)

            VStack {
                ExploringTabs()
                    .opacity(opacityTab2)
                    .onAppear {
                        opacityTab2 = 0.7
                        withAnimation(.linear(duration: 0.2)) {
                            opacityTab2 += 0.3
                        }
                    }
                    .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .center)
                    .background(Color.background)
            }
            .tabItem {
                VStack {
                    Image(systemName: "magnifyingglass.circle.fill")
                        .font(.largeTitle)
                    Text(L10nApp.tab2)
                }
            }
            .tag(1)

            VStack {
                CartScreen()
                    .opacity(opacityTab3)
                    .onAppear {
                        opacityTab3 = 0.7
                        withAnimation(.linear(duration: 0.2)) {
                            opacityTab3 += 0.3
                        }
                    }
                    .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .center)
                    .background(Color.background)
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
        .navigationBarItems(trailing: HStack(spacing: 0) {
            
            if selection == 2 {
                Button("Оформить") {
                    navPath.add(NavScreen.orderCreate)
                }
            }

            if selection == 0 {
                Button {
                    navPath.add(NavScreen.contact)
                } label: {
                    Image(systemName: "envelope.circle").imageScale(.large)
                }
                
                Button {
                    navPath.add(NavScreen.orderSearch)
                } label: {
                    Image(systemName: "briefcase.circle").imageScale(.large)
                }
            }
        })
        .colorize(L10nApp.appName)
        .toolbarLauncher()
    }
}
