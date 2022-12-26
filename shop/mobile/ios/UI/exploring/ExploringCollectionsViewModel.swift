//
//  ExploringCollectionsViewModel.swift
//  YouShop
//
//  Created by Виталий Зарубин on 23.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import Foundation
import shared

class ExploringCollectionsViewModel: ObservableObject, Identifiable {
    
    var requests = CollectionRequests()
    
    @Published var response: [CollectionResponse]?
    @Published var error: ErrorResponse?
    
    func updateStateUI(
        response: [CollectionResponse]? = nil,
        error: ErrorResponse? = nil
    ) {
        DispatchQueue.main.async {
            self.response = response
            self.error = error
        }
    }
    
    func loadDb() {
        do {
            let response = try CollectionRealm.getModels().map {CollectionResponse(
                id: Int32($0.id),
                key: "",
                name: $0.name,
                desc: $0.desc,
                icon: $0.icon,
                isPublished: true,
                createAt: "",
                updateAt: ""
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
            try await Task.sleep(nanoseconds: 500.millisecondToNanoseconds())
            let response = try await requests.collectionsPublished()
            try CollectionRealm.updateList(response)
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
