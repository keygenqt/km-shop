//
//  ExploringCategoriesViewModel.swift
//  YouShop
//
//  Created by Виталий Зарубин on 23.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import Foundation
import shared

class ExploringCategoriesViewModel: ObservableObject, Identifiable {
    
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
            let response = try CategoryRealm.getModels().map {CategoryResponse(
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
        self.updateStateUI(
            response: nil,
            error: nil
        )
        Task { await loadAsync() }
    }
    
    func loadAsync() async {
        do {
            try await Task.sleep(nanoseconds: 500.millisecondToNanoseconds())
            let response = try await requests.categoriesPublished()
            try CategoryRealm.updateList(response)
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
