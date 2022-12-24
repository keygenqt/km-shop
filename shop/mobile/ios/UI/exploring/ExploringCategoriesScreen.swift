//
//  ExploringCategoriesScreen.swift
//  MyShop
//
//  Created by Виталий Зарубин on 19.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

struct ExploringCategoriesScreen: View {
    
    // nav change
    @EnvironmentObject var navPath: NavObservable
    
    // model
    @ObservedObject var viewModel = ExploringCategoriesViewModel()
    
    init() {
        viewModel.load()
    }
    
    var body: some View {
        if let response = viewModel.response {
            AppScrollView(padding: [.leading, .trailing]) {
                if response.isEmpty {
                    EmptyBody(
                        title: L10nExploring.emptyTab1Title,
                        subtitle: L10nExploring.emptyTab1Text
                    )
                } else {
                    ForEach(response) { model in
                        CategoryItem(
                            icon: model.image,
                            name: model.name,
                            desc: model.desc
                        ) {
                            navPath.add(NavScreen.products(Int(model.id), 0, model.name))
                        }
                    }
                }
            }
            .refreshable {
                await viewModel.loadAsync()
            }
        } else {
            if let error = viewModel.error {
                ErrorBody(error: error)
            } else {
                LoadingBody()
            }
        }
    }
}
