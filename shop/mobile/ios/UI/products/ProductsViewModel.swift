//
//  ProductsViewModel.swift
//  YouShop
//
//  Created by Виталий Зарубин on 24.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import Foundation
import shared

class ProductsViewModel: ObservableObject, Identifiable {
    
    var requests = ProductRequests()
    
    @Published var response: ProductPageResponse?
    @Published var error: ResponseError?
    
    func updateStateUI(
        response: ProductPageResponse? = nil,
        error: ResponseError? = nil
    ) {
        DispatchQueue.main.async {
            self.response = response
            self.error = error
        }
    }
    
    func load(
        categories: [Int],
        collections: [Int]
    ) {
        Task {
            await loadAsync(
                categories: categories,
                collections: collections
            )
        }
    }
    
    func loadAsync(
        categories: [Int],
        collections: [Int]
    ) async {
        do {
            try await Task.sleep(nanoseconds: 1000.millisecondToNanoseconds())
            let response = try await requests.productsPublished(
                page: 1,
                order: OrderProduct.newest.name,
                range: [0.0, 999999999.0],
                categories: categories,
                collections: collections
            )
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
