//
//  CartViewModel.swift
//  YouShop
//
//  Created by Виталий Зарубин on 26.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import Foundation
import shared

class CartViewModel: ObservableObject, Identifiable {

    var requests = ProductRequests()
    
    @Published var loading: Bool = false
    @Published var response: [ProductResponse]?
    @Published var error: ErrorResponse?

    func updateStateUI(
        response: [ProductResponse]? = nil,
        error: ErrorResponse? = nil
    ) {
        DispatchQueue.main.async {
            self.response = response
            self.error = error
            self.loading = false
        }
    }
    
    func clear() {
        updateStateUI()
    }
    
    func remove(_ id: Int32) {
        response = response?.filter { $0.id != id }
    }
    
    func load(_ ids: [Int]) {
        DispatchQueue.main.async {
            self.loading = true
        }
        Task { await loadAsync(ids) }
    }

    func loadAsync(_ ids: [Int]) async {
        do {
            try await Task.sleep(nanoseconds: 500.millisecondToNanoseconds())
            let response = try await requests.productsPublishedByIDs(
                ids: ids
            )
            self.updateStateUI(
                response: response
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
