//
//  View.swift
//  YouShop
//
//  Created by Виталий Зарубин on 20.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

extension View {
    
    public func paddingPage(_ edges: Edge.Set = [.all] ) -> some View {
        return padding(edges, 20)
    }
    
    public func colorize(_ title: String, _ isBack: Bool = false) -> some View {
        return toolbarBackground(Color.primary, for: .navigationBar)
            .toolbarBackground(.visible, for: .navigationBar)
            .toolbar {
                ToolbarItem(placement: .principal) {
                    VStack {
                        Spacer()
                        Text(title)
                            .bold()
                            .foregroundColor(.white)
                        Spacer()
                    }
                }
            }
            .navigationBarTitleDisplayMode(.inline)
            .accentColor(Color.onPrimary)
            .navigationBackButton(text: L10nApp.commonBtnBack, show: isBack)
            .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .center)
            .background(Color.background)
    }
    
    public func toolbarLauncher() -> some View {
        return navigationBarItems(leading: HStack(spacing: 0) {
            Image("launcher")
                .resizable()
                .frame(width: 24, height: 24)
                .aspectRatio(contentMode: .fit)
                .clipShape(Circle())
        })
    }
    
    func hideKeyboard() {
        UIApplication.shared.sendAction(#selector(UIResponder.resignFirstResponder), to: nil, from: nil, for: nil)
    }
    
    /// Applies the given transform if the given condition evaluates to `true`.
    /// - Parameters:
    ///   - condition: The condition to evaluate.
    ///   - transform: The transform to apply to the source `View`.
    /// - Returns: Either the original `View` or the modified `View` if the condition is `true`.
    @ViewBuilder func `if`<Content: View>(_ condition: Bool, transform: (Self) -> Content) -> some View {
        if condition {
            transform(self)
        } else {
            self
        }
    }
}
