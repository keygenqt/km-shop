//
//  LoadingAnimation.swift
//  YouShop
//
//  Created by Виталий Зарубин on 21.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import Lottie
import SwiftUI

struct LoadingAnimation: View {
    var body: some View {
        ZStack {
            Circle().fill(.white).frame(width: 23, height: 23)
            LottieView(
                name: "block_loader",
                loopMode: LottieLoopMode.loop,
                animationSpeed: 0.8
            )
            .frame(width: 34, height: 34)
        }
        .frame(width: 23, height: 23, alignment: .center)
    }
}

struct LoadingAnimationLarge: View {
    var body: some View {
        ZStack {
            Circle().fill(.white).frame(width: 60, height: 60)
            LottieView(
                name: "block_loader",
                loopMode: LottieLoopMode.loop,
                animationSpeed: 0.8
            )
            .frame(width: 75, height: 75)
        }
        .frame(width: 60, height: 60, alignment: .center)
    }
}
