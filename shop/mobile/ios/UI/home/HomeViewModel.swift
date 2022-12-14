//
//  HomeViewModel.swift
//  YouShop
//
//  Created by Виталий Зарубин on 25.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import Foundation
import shared

class HomeViewModel: ObservableObject, Identifiable {
    
    var requests = CategoryRequests()
    
    @Published var response: [CategoryResponse]?
    @Published var error: ErrorResponse?
    
    func updateStateUI(
        response: [CategoryResponse]? = nil,
        error: ErrorResponse? = nil
    ) {
        DispatchQueue.main.async {
            self.response = response
            self.error = error
        }
    }
    
    func loadDb() {
        do {
            let response = try CategoryRealm.getModels().prefix(3).map {CategoryResponse(
                id: Int32($0.id),
                key: "",
                name: $0.name,
                desc: $0.desc,
                image: $0.image,
                isPublished: true,
                createAt: "",
                updateAt: "",
                products: nil,
                uploads: nil
            )}
            self.updateStateUI(
                response: response
            )
        } catch {
            print("Unexpected error: \(error).")
        }
    }
    
    func load() {
        Task { await loadAsync() }
    }
    
    func loadAsync() async {
        do {
            try await Task.sleep(nanoseconds: 1000.millisecondToNanoseconds())
            let response = try await requests.categoriesPublished()
            try CategoryRealm.updateList(response)
            if response.count <= 3 {
                self.updateStateUI(
                    response: response
                )
            } else {
                self.updateStateUI(
                    response: Array(response[1..<3])
                )
            }
        } catch let error as ErrorResponse {
            self.updateStateUI(
                error: error
            )
        } catch {
            print("Unexpected error: \(error).")
        }
    }
}
