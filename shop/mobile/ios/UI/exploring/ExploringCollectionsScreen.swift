//
//  ExploringCollectionsScreen.swift
//  MyShop
//
//  Created by Виталий Зарубин on 19.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

struct ExploringCollectionsScreen: View {
    
    // Routing management
    @Environment(\.nav) var nav: NavChange

    // View Model
    @ObservedObject var viewModel = ExploringCollectionsViewModel()
    
    init() {
        viewModel.load()
    }
    
    var body: some View {
        VStack(spacing: 0) {
            if let response = viewModel.response {
                if response.isEmpty {
                    EmptyBody(
                        title: L10nExploring.emptyTab2Title,
                        subtitle: L10nExploring.emptyTab2Text,
                        action: { viewModel.load() }
                    )
                } else {
                    AppScrollView(padding: [.leading, .trailing, .bottom]) {
                        ForEach(response) { model in
                            CollectionItem(
                                icon: model.icon,
                                name: model.name,
                                desc: model.desc
                            ) {
                                nav.add(NavScreens.products(
                                    title: model.name,
                                    collectionID: Int(model.id)
                                ))
                            }
                        }
                    }
                    .refreshable {
                        await viewModel.loadAsync()
                    }
                }
            } else {
                if viewModel.error != nil {
                    ErrorBody(action: { viewModel.load() })
                } else {
                    LoadingBody()
                }
            }
        }.onAppear {
            viewModel.loadDb()
        }
    }
}
