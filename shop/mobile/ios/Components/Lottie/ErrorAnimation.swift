//
//  ErrorAnimation.swift
//  YouShop
//
//  Created by Виталий Зарубин on 21.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import Lottie
import SwiftUI

struct ErrorAnimation: View {
    var body: some View {
        VStack(spacing: 0) {
            LottieView(
                name: "webpage_error",
                loopMode: LottieLoopMode.loop,
                animationSpeed: 0.8
            )
            .frame(width: 185, height: 185)
            .offset(x: -2, y: -2)
        }
        .frame(width: 150, height: 150, alignment: .center)
    }
}

