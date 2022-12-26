//
//  OrderHistoryViewModel.swift
//  YouShop
//
//  Created by Виталий Зарубин on 26.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import Foundation

class OrderHistoryViewModel: ObservableObject, Identifiable {
    
    @Published var response: [OrderHistoryRealm]?
    @Published var error: ErrorResponse?
    
    init() {
        load()
    }
    
    func updateStateUI(
        response: [OrderHistoryRealm]? = nil,
        error: ErrorResponse? = nil
    ) {
        DispatchQueue.main.async {
            self.response = response
            self.error = error
        }
    }
    
    func load() {
        do {
            let response = try OrderHistoryRealm.getModels()
            
            self.updateStateUI(
                response: response
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
