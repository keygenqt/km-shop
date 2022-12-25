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
    @Published var error: ResponseError?
    
    func updateStateUI(
        response: [CategoryResponse]? = nil,
        error: ResponseError? = nil
    ) {
        DispatchQueue.main.async {
            self.response = response
            self.error = error
        }
    }
    
    func load() {
        Task { await loadAsync() }
    }
    
    func loadAsync() async {
        do {
            try await Task.sleep(nanoseconds: 1000.millisecondToNanoseconds())
            let response = try await requests.categoriesPublished()
            if response.count <= 3 {
                self.updateStateUI(
                    response: response
                )
            } else {
                self.updateStateUI(
                    response: Array(response[1..<3])
                )
            }
        } catch let error as ResponseError {
            self.updateStateUI(
                error: error
            )
        } catch {
            print("Unexpected error: \(error).")
        }
    }
}
