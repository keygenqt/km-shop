//
//  ExploringCollectionsScreen.swift
//  MyShop
//
//  Created by Виталий Зарубин on 19.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

struct ExploringCollectionsScreen: View {
    
    // nav change
    @EnvironmentObject var navPath: NavObservable
    
    // model
    @ObservedObject var viewModel = ExploringCollectionsViewModel()
    
    init() {
        viewModel.load()
    }
    
    var body: some View {
        if let response = viewModel.response {
            AppScrollView(padding: [.leading, .trailing]) {
                if response.isEmpty {
                    EmptyBody(
                        title: L10nExploring.emptyTab2Title,
                        subtitle: L10nExploring.emptyTab2Text
                    )
                } else {
                    ForEach(response) { model in
                        CollectionItem(
                            icon: model.icon,
                            name: model.name,
                            desc: model.desc
                        ) {
                            navPath.add(NavScreen.products(0, Int(model.id), model.name))
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
