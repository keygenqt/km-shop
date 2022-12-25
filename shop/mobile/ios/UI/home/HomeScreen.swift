//
//  HomeScreen.swift
//  MyShop
//
//  Created by Виталий Зарубин on 19.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

struct HomeScreen: View {
    
    // Routing management
    @Environment(\.nav) var nav: NavChange
    
    // App common observable
    @EnvironmentObject var appState: AppObservable
    
    // View Model
    @ObservedObject var viewModel = HomeViewModel()
    
    init() {
        viewModel.load()
    }
    
    var body: some View {
        AppScrollView {
            AppSection(color: Color.bgVariant2) {
                InfoBlock(action: {
                    appState.exploringTab = TabsExploring.collections
                    appState.homeTab = TabsHome.exploring
                })
            }
            if let response = viewModel.response {
                if response.isEmpty {
                    EmptyView()
                } else {
                    AppSection(color: Color.bgVariant1) {
                        CategoriesBlock(
                            categories: response,
                            actionAll: {
                                appState.exploringTab = TabsExploring.categories
                                appState.homeTab = TabsHome.exploring
                            },
                            actionItem: { title, id in
                                nav.add(NavScreens.products(
                                    title: title,
                                    categoryID: id
                                ))
                            }
                        )
                    }
                }
            } else {
                AppSection(color: Color.bgVariant1) {
                    VStack {
                        if viewModel.error == nil {
                            LoadingAnimationLarge()
                        } else {
                            ErrorAnimation()
                        }
                    }.paddingPage()
                }
            }
        }
        .refreshable {
            await viewModel.loadAsync()
        }
        .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .center)
        .background(Color.background)
    }
}
