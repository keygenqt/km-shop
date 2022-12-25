//
//  SplashScreen.swift
//  YouShop
//
//  Created by Виталий Зарубин on 25.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import AlertToast
import SwiftUI

struct SplashScreen: View {
    
    // Routing management
    @Environment(\.nav) var nav: NavChange
    
    // View Model
    @ObservedObject var viewModel = SplashViewModel()
    
    var body: some View {
        VStack {
            ZStack {
                Image("launcher")
                    .resizable()
                    .aspectRatio(contentMode: .fit)
                    .frame(width: 130, height: 130)
                Spacer().frame(height: 20)
            }.overlay(VStack {
                if viewModel.error == nil {
                    ProgressView().tint(.white).offset(y: 40)
                }
            }, alignment: .bottom)
        }
        .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .center)
        .paddingPage()
        .background(Color.splash)
        .onAppear {
            viewModel.load(nav: nav)
        }
        .toast(isPresenting: $viewModel.isError) {
            AlertToast(
                displayMode: .banner(.pop),
                type: .regular,
                title: L10nApp.commonError,
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
