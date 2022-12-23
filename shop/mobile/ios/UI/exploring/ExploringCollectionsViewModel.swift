//
//  ExploringCollectionsViewModel.swift
//  YouShop
//
//  Created by Виталий Зарубин on 23.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import Foundation
import shared

class ExploringCollectionsViewModel: ObservableObject, Identifiable {
    
    var requests = CollectionRequests()
    
    @Published var response: [CollectionResponse]?
    @Published var error: ResponseError?
    
    func updateStateUI(
        response: [CollectionResponse]? = nil,
        error: ResponseError? = nil
    ) {
        DispatchQueue.main.async {
            self.response = response
            self.error = error
        }
    }
    
    func load() {
        Task { await loadAsync() }
    }
    
    func loadAsync() async {
        do {
            try await Task.sleep(nanoseconds: 1000.millisecondToNanoseconds())
            let response = try await requests.collectionsPublished()
            self.updateStateUI(
                response: response
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
