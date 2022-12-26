//
//  OrderViewModel.swift
//  YouShop
//
//  Created by Виталий Зарубин on 22.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import Foundation
import shared

class OrderViewModel: ObservableObject, Identifiable {
    
    var requests = OrderRequests()
    
    @Published var response: OrderResponse?
    @Published var error: ErrorResponse?
    
    func updateStateUI(
        response: OrderResponse? = nil,
        error: ErrorResponse? = nil
    ) {
        DispatchQueue.main.async {
            self.response = response
            self.error = error
        }
    }
    
    func load(
        number: String
    ) {
        Task { await loadAsync(number: number) }
    }
    
    func loadAsync(
        number: String
    ) async {
        do {
            try await Task.sleep(nanoseconds: 500.millisecondToNanoseconds())
            
            let response = try await requests.orderByNumber(number: number)
            
            try OrderHistoryRealm.saveModel(OrderHistoryRealm.create(
                number: response.number,
                sum: response.sum,
                images: response.products.toArray().prefix(4).map { $0.product.image1 }
            ))
            
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
