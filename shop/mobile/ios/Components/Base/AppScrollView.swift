//
//  AppScrollView.swift
//  YouShop
//
//  Created by Виталий Зарубин on 22.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

struct AppScrollView<Content: View>: View {
    
    var content: () -> Content

    init(@ViewBuilder content: @escaping () -> Content) {
        self.content = content
    }
    
    var body: some View {
        ScrollView {
            VStack(spacing: 0) {
                content()
            }.paddingPage()
        }
    }
}
