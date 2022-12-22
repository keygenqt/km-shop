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
    
    func updateStateUI(
        response: OrderResponse
    ) {
        DispatchQueue.main.async {
            self.response = response
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
            let response = try await requests.orderByNumber(number)
            self.updateStateUI(
                response: response
            )
        } catch {
           print("Unexpected error: \(error).")
        }
    }
}
