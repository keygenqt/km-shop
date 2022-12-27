//
//  ProductViewModel.swift
//  YouShop
//
//  Created by Виталий Зарубин on 25.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import Foundation
import shared

class ProductViewModel: ObservableObject, Identifiable {
    
    var requests = ProductRequests()
    
    var id: Int
    
    init(id: Int) {
        self.id = id
    }
    
    @Published var response: ProductResponse?
    @Published var error: ErrorResponse?
    
    func updateStateUI(
        response: ProductResponse? = nil,
        error: ErrorResponse? = nil
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
            try await Task.sleep(nanoseconds: 500.millisecondToNanoseconds())
            let response = try await requests.product(id: id)
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
