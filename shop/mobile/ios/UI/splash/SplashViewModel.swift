//
//  SplashViewModel.swift
//  YouShop
//
//  Created by Виталий Зарубин on 25.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import Foundation
import shared

class SplashViewModel: ObservableObject, Identifiable {
    
    var requestsCategory = CategoryRequests()
    var requestsCollection = CollectionRequests()
    
    @Published var error: ErrorResponse?
    @Published var isError: Bool = false
    
    func updateStateUI(
        nav: NavChange? = nil,
        error: ErrorResponse? = nil
    ) {
        DispatchQueue.main.async {
            self.isError = error == nil ? false : true
            self.error = error
            if let nav = nav {
                nav.insert([
                    NavScreens.homeTabs()
                ])
            }
        }
    }
    
    func load(nav: NavChange) {
        Task {
            do {
                let categries = try await loadCategoriesAsync()
                let collections = try await loadCollectionsAsync()
                try CategoryRealm.updateList(categries)
                try CollectionRealm.updateList(collections)
                self.updateStateUI(
                    nav: nav
                )
            } catch let error as ErrorResponse {
                self.updateStateUI(
                    error: error
                )
            } catch {
                self.updateStateUI(
                    error: ErrorResponse(
                        code: 500, message: L10nApp.commonError, validate: []
                    )
                )
            }
        }
    }
    
    func loadCategoriesAsync() async throws -> [CategoryResponse] {
        try await Task.sleep(nanoseconds: 1000.millisecondToNanoseconds())
        return try await requestsCategory.categoriesPublished()
    }
    
    func loadCollectionsAsync() async throws -> [CollectionResponse] {
        try await Task.sleep(nanoseconds: 1000.millisecondToNanoseconds())
        return try await requestsCollection.collectionsPublished()
    }
}
