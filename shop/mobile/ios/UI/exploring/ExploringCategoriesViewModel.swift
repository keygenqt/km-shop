//
//  ExploringCategoriesViewModel.swift
//  YouShop
//
//  Created by Виталий Зарубин on 23.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import Foundation
import shared

class ExploringCategoriesViewModel: ObservableObject, Identifiable {
    
    var requests = CategoryRequests()
    
    @Published var response: [CategoryResponse]?
    @Published var error: ErrorResponse?
    
    func updateStateUI(
        response: [CategoryResponse]? = nil,
        error: ErrorResponse? = nil
    ) {
        DispatchQueue.main.async {
            self.response = response
            self.error = error
        }
    }
    
    func load() {
        self.updateStateUI(
            response: nil,
            error: nil
        )
        Task { await loadAsync() }
    }
    
    func loadAsync() async {
        do {
            try await Task.sleep(nanoseconds: 500.millisecondToNanoseconds())
            let response = try await requests.categoriesPublished()
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
