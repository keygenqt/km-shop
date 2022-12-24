//
//  ExploringCategoriesScreen.swift
//  MyShop
//
//  Created by Виталий Зарубин on 19.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

struct ExploringCategoriesScreen: View {
    
    // Routing management
    @Environment(\.nav) var nav: NavChange

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
                            nav.add(NavScreens.products(
                                title: model.name,
                                categoryID: Int(model.id)
                            ))
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
