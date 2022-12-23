//
//  AppForm.swift
//  YouShop
//
//  Created by Виталий Зарубин on 21.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import AlertToast
import Foundation
import SwiftUI

struct AppForm<Content: View>: View {
    
    // cat custom for app
    var isShowCat: Bool = false
    var content: () -> Content

    @Binding var error: String?

    init(
        error: Binding<String?>,
        isShowCat: Bool = false,
        @ViewBuilder content: @escaping () -> Content
    ) {
        self.content = content
        self.isShowCat = isShowCat
        _error = error
    }

    var body: some View {
        AppScrollView {
            content()
        }
        .overlay(HStack {
            if isShowCat {
                Spacer()
                CatSneakingAnimation().offset(x: -10, y: 25)
            }
        }, alignment: .bottom)
        .toast(isPresenting: Binding(get: { self.error != nil }, set: { self.error = $0 ? "" : nil }), duration: 99999) {
            AlertToast(
                displayMode: .banner(.pop),
                type: .systemImage("exclamationmark.circle.fill", Color.onError),
                title: error ?? "Error validation",
                style: .style(
                    backgroundColor: Color.error,
                    titleColor: Color.onError,
                    subTitleColor: Color.onError,
                    titleFont: Font.system(size: 16),
                    subTitleFont: Font.system(size: 12)
                )
            )
        }
    }
}
