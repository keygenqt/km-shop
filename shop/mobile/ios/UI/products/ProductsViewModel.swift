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
    
    let categoryIDs: [Int]
    let collectionIDs: [Int]
    
    init(
        categoryIDs: [Int],
        collectionIDs: [Int]
    ) {
        self.categoryIDs = categoryIDs
        self.collectionIDs = collectionIDs
    }

    private var job: Task<(), Never>?
    
    @Published var loading: Bool = false
    @Published var sort: OrderProduct = OrderProduct.newest
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
            self.loading = false
        }
    }
    
    func changeSort(_ sort: OrderProduct) {
        self.sort = sort
        self.load()
    }

    func load() {
        DispatchQueue.main.async { self.loading = true }
        job?.cancel()
        job = Task { await loadAsync(false) }
    }

    func loadAsync(_ cancel: Bool = true) async {
        do {
            if cancel {
                job?.cancel()
            }
            try await Task.sleep(nanoseconds: 500.millisecondToNanoseconds())
            let response = try await requests.productsPublished(
                page: 1,
                order: sort.name,
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
