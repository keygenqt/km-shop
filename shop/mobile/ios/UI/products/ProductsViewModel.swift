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
    @Published var error: ErrorResponse?
    @Published var prices: ClosedRange<Double>?
    @Published var range: [CGFloat] = [0.0, 999999999.0]
    
    private var loadingNext: Bool = false
    private var page = 1

    func updateStateUI(
        response: ProductPageResponse? = nil,
        error: ErrorResponse? = nil
    ) {
        DispatchQueue.main.async {
            if response != nil {
                if self.page == 1 {
                    self.products = response?.products.toArray()
                    self.response = response
                } else {
                    self.products?.append(contentsOf: response?.products.toArray() ?? [])
                    self.response = response
                }
            }

            self.error = error
            self.loading = false
            self.loadingNext = false
        }
    }

    func updateStateUIPrices(
        prices: ClosedRange<Double>
    ) {
        DispatchQueue.main.async {
            self.range = [prices.lowerBound.toCGFloat(), prices.upperBound.toCGFloat()]
            self.prices = prices
        }
    }
    
    func isNextPage() -> Bool {
        return page < Int(response?.pages ?? 0) || loadingNext
    }
    
    func nextPage() {
        self.page += 1
        self.load()
    }
    
    func changeSort(_ sort: OrderProduct) {
        self.sort = sort
        self.page = 1
        DispatchQueue.main.async { self.loading = true }
        self.load()
    }
    
    func changeFilterPrices(_ range: [CGFloat]) {
        self.range = range
        self.page = 1
        DispatchQueue.main.async { self.loading = true }
        self.load()
    }

    func load() {
        job?.cancel()
        job = Task { await loadAsync(false, page: page) }
    }

    func loadAsync(
        _ cancel: Bool = true,
        page: Int = 1
    ) async {
        do {
            if page == 1 {
                self.page = page
            }
            if cancel {
                job?.cancel()
            }
            try await Task.sleep(nanoseconds: 3000.millisecondToNanoseconds())
            let response = try await requests.productsPublished(
                page: page,
                order: sort.name,
                range: range.map { Double($0) },
                categories: categoryIDs,
                collections: collectionIDs
            )
            self.updateStateUI(
                response: response
            )
        } catch let error as ErrorResponse {
            self.updateStateUI(
                error: error
            )
        } catch {}
    }
    
    func loadPrices() {
        Task {
            do {
                let response = try await requests.prices(
                    categories: categoryIDs,
                    collections: collectionIDs
                )
                self.updateStateUIPrices(
                    prices: response.min...response.max
                )
            } catch {
                print("Unexpected error: \(error).")
            }
        }
    }
}
