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

    @Published var products: [ProductResponse]?
    @Published var response: ProductPageResponse?
    @Published var error: ResponseError?

    func updateStateUI(
        response: ProductPageResponse? = nil,
        error: ResponseError? = nil
    ) {
        DispatchQueue.main.async {
            self.products = response?.products.toArray()
            self.response = response
            self.error = error
        }
    }

    func load(
        categoryIDs: [Int],
        collectionIDs: [Int]
    ) {
        Task {
            await loadAsync(
                categoryIDs: categoryIDs,
                collectionIDs: collectionIDs
            )
        }
    }

    func loadAsync(
        categoryIDs: [Int],
        collectionIDs: [Int]
    ) async {
        do {
            try await Task.sleep(nanoseconds: 1000.millisecondToNanoseconds())
            let response = try await requests.productsPublished(
                page: 1,
                order: OrderProduct.newest.name,
                range: [0.0, 999999999.0],
                categories: categoryIDs,
                collections: collectionIDs
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
