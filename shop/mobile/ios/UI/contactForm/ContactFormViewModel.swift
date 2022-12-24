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
    @Published var success: Bool = false
    @Published var error: ErrorResponse?
    
    func updateStateUI(
        loading: Bool,
        success: Bool = false,
        error: ErrorResponse? = nil
    ) {
        DispatchQueue.main.async {
            self.loading = loading
            self.success = success
            self.error = error
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
    ) async -> Bool {
        do {
            self.updateStateUI(loading: true)
            try await Task.sleep(nanoseconds: 3000.millisecondToNanoseconds())
            _ = try await requests.message(request: MessageRequest(
                fname: fname,
                lname: lname,
                email: email,
                phone: phone,
                message: message
            ))
            self.updateStateUI(
                loading: false,
                success: true
            )
            DispatchQueue.main.asyncAfter(deadline: .now() + 2) {
                self.success = false
            }
            return true
        } catch let error as ErrorResponse {
            self.updateStateUI(
                loading: false,
                error: error
            )
        } catch {
            self.updateStateUI(
                loading: false,
                error: ErrorResponse(
                    code: 500, message: L10nApp.commonError, validate: []
                )
            )
        }
        return false
    }
}
