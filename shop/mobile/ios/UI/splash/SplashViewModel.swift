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
    
    @Published var error: ResponseError?
    @Published var isError: Bool = false
    
    func updateStateUI(
        nav: NavChange? = nil,
        error: ResponseError? = nil
    ) {
        DispatchQueue.main.async {
            self.isError = error == nil ? false : true
            self.error = error
            if let nav = nav {
                nav.insert([
                    NavScreens.homeTabs()
                ], false)
            }
        }
    }
    
    func load(nav: NavChange) {
        Task {
            do {
//                let categries = try await loadCategoriesAsync() // @todo
                let collections = try await loadCollectionsAsync()
                self.updateStateUI(
                    nav: nav
                )
            } catch let error as ResponseError {
                self.updateStateUI(
                    error: error
                )
            } catch {
                print("Unexpected error: \(error).")
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
