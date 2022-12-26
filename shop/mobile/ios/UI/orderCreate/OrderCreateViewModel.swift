//
//  CreateOrderViewModel.swift
//  YouShop
//
//  Created by Виталий Зарубин on 24.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import Foundation
import shared

class OrderCreateViewModel: ObservableObject, Identifiable {
    
    var requests = OrderRequests()
    
    var items: [CartItem]
    
    init(_ items: [CartItem]) {
        self.items = items
    }
    
    @Published var loading: Bool = false
    @Published var number: String?
    @Published var error: ErrorResponse?
    
    func updateStateUI(
        loading: Bool,
        number: String? = nil,
        error: ErrorResponse? = nil
    ) {
        DispatchQueue.main.async {
            self.loading = loading
            self.number = number
            self.error = error
        }
    }
    
    func clearError(_ label: String? = nil) {
        DispatchQueue.main.async {
            if label == nil {
                self.error = nil
            } else {
                self.error = self.error?.clear(label!)
            }
        }
    }
    
    func createOrder(
        phone: String,
        email: String,
        address: String
    ) async -> Bool {
        do {
            self.updateStateUI(loading: true)
            try await Task.sleep(nanoseconds: 3000.millisecondToNanoseconds())
            let response = try await requests.orderCreate(
                phone: phone,
                email: email,
                address: address,
                products: items
            )
            
            try OrderHistoryRealm.saveModel(OrderHistoryRealm.create(
                number: response.number,
                sum: response.sum,
                images: response.products.toArray().prefix(4).map { $0.product.image1 }
            ))
            
            self.updateStateUI(
                loading: false,
                number: response.number
            )
            return true
        } catch let error as ErrorResponse {
            self.updateStateUI(
                loading: false,
                error: error
            )
        } catch {
            self.updateStateUI(
                loading: false,
                error: ErrorResponse(
                    code: 500, message: L10nApp.commonError, validate: []
                )
            )
        }
        return false
    }
}
