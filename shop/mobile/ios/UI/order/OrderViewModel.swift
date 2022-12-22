//
//  OrderViewModel.swift
//  YouShop
//
//  Created by Виталий Зарубин on 22.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import Foundation

class OrderViewModel: ObservableObject, Identifiable {
    
    @Published var loadingPage: Bool = true
    
    func updateStateUI() {
        DispatchQueue.main.async {
            self.loadingPage = false
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
            try await Task.sleep(nanoseconds: 3_000_000_000)
            self.updateStateUI()
        } catch {
           print("Unexpected error: \(error).")
        }
    }
}
