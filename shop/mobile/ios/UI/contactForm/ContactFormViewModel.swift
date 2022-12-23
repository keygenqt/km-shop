//
//  ContactFormViewModel.swift
//  YouShop
//
//  Created by Виталий Зарубин on 23.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import Foundation
import shared

class ContactFormViewModel: ObservableObject, Identifiable {
    
    var requests = MessageRequests()
    
    @Published var loading: Bool = false
    @Published var response: MessageResponse?
    @Published var error: ErrorResponse?
    
    func updateStateUI(
        response: MessageResponse? = nil,
        error: ErrorResponse? = nil,
        loading: Bool
    ) {
        DispatchQueue.main.async {
            self.response = response
            self.error = error
            self.loading = loading
        }
    }
    
    func clearError(_ label: String? = nil) {
        DispatchQueue.main.async {
            if label == nil {
                self.error = nil
            } else {
                self.error = self.error?.clear(label!)
            }
        }
    }
    
    func createMessage(
        fname: String,
        lname: String,
        email: String,
        phone: String,
        message: String
    ) {
        Task {
            do {
                self.updateStateUI(loading: true)
                try await Task.sleep(nanoseconds: 3000.millisecondToNanoseconds())
                let response = try await requests.message(request: MessageRequest(
                    fname: fname,
                    lname: lname,
                    email: email,
                    phone: phone,
                    message: message
                ))
                self.updateStateUI(
                    response: response,
                    loading: false
                )
            } catch let error as ErrorResponse {
                self.updateStateUI(
                    error: error,
                    loading: false
                )
            } catch {
                self.updateStateUI(
                    error: ErrorResponse(
                        code: 500, message: L10nApp.commonError, validate: []
                    ),
                    loading: false
                )
            }
        }
    }
}
