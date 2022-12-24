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
    
    @Published var loading: Bool = false
    @Published var success: Bool = false
    @Published var error: ErrorResponse?
    
    func updateStateUI(
        loading: Bool,
        success: Bool = false,
        error: ErrorResponse? = nil
    ) {
        DispatchQueue.main.async {
            self.loading = loading
            self.success = success
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
        
        let products = KotlinArray<OrderProductRequest>.init(size: Int32(0)) { _ in nil }
        
        do {
            self.updateStateUI(loading: true)
            try await Task.sleep(nanoseconds: 3000.millisecondToNanoseconds())
            _ = try await requests.orderCreate(request: OrderCreateRequest(
                email: email,
                phone: phone,
                address: address,
                products: products
            ))
            self.updateStateUI(
                loading: false,
                success: true
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
