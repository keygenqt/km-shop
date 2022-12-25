//
//  HomeTabs.swift
//  MyShop
//
//  Created by Виталий Зарубин on 19.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

struct HomeTabs: View {
    
    // Routing management
    @Environment(\.nav) var nav: NavChange
    
    // App common observable
    @EnvironmentObject var appState: AppObservable

    init() {
        UITabBarItem.appearance().badgeColor = UIColor(Color.secondary)
        UITabBar.appearance().isTranslucent = false
        UITabBar.appearance().barTintColor = UIColor(Color.primary)
        UITabBar.appearance().backgroundColor = UIColor(Color.primary)
        UITabBar.appearance().unselectedItemTintColor = UIColor(Color.onPrimary.opacity(0.5))
    }
    
    @State private var opacityTab1 = -1.0
    @State private var opacityTab2 = 0.5
    @State private var opacityTab3 = 0.5
    
    @State private var homeScreen: NavDiscover = NavScreens.home()
    @State private var exploringScreen: NavDiscover = NavScreens.exploring()
    @State private var cartScreen: NavDiscover = NavScreens.cart()

    var body: some View {
        TabView(selection: $appState.homeTab) {
            VStack {
                homeScreen.destination
                    .opacity(opacityTab1)
                    .onAppear {
                        opacityTab1 = 0.6
                        withAnimation(.linear(duration: 0.2)) {
                            opacityTab1 += 0.4
                        }
                    }
            }
            .tabItem {
                VStack {
                    Image(systemName: "house.circle.fill")
                    Text(L10nApp.tab1)
                }
            }
            .tag(TabsHome.home)

            VStack {
                exploringScreen.destination
                    .opacity(opacityTab2)
                    .onAppear {
                        opacityTab2 = 0.6
                        withAnimation(.linear(duration: 0.2)) {
                            opacityTab2 += 0.4
                        }
                    }
            }
            .tabItem {
                VStack {
                    Image(systemName: "magnifyingglass.circle.fill")
                        .font(.largeTitle)
                    Text(L10nApp.tab2)
                }
            }
            .tag(TabsHome.exploring)

            VStack {
                cartScreen.destination
                    .opacity(opacityTab3)
                    .onAppear {
                        opacityTab3 = 0.6
                        withAnimation(.linear(duration: 0.2)) {
                            opacityTab3 += 0.4
                        }
                    }
            }
            .tabItem {
                VStack {
                    Image(systemName: "cart.circle.fill")
                        .font(.largeTitle)
                    Text(L10nApp.tab3)
                }
            }
            .badge(5)
            .tag(TabsHome.cart)
        }
        .navigationBarItems(trailing: HStack(spacing: 0) {
            
            if appState.homeTab == TabsHome.cart {
                Button(L10nCart.cartBarBtn) {
                    nav.add(NavScreens.orderCreate())
                }
            }

            if appState.homeTab == TabsHome.home {
                Button {
                    nav.add(NavScreens.contact())
                } label: {
                    Image(systemName: "envelope.circle").imageScale(.large)
                }
                
                Button {
                    nav.add(NavScreens.orderSearch())
                } label: {
                    Image(systemName: "briefcase.circle").imageScale(.large)
                }
            }
        })
        .colorize(L10nApp.appName)
        .toolbarLauncher()
    }
}
