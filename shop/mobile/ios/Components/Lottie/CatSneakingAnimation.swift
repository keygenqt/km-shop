//
//  CatSneakingAnimation.swift
//  YouShop
//
//  Created by Виталий Зарубин on 21.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import Lottie
import SwiftUI

struct CatSneakingAnimation: View {
    var body: some View {
        VStack(spacing: 0) {
            LottieView(
                name: "cat_sneaking",
                loopMode: LottieLoopMode.loop,
                animationSpeed: 0.6
            )
            .frame(width: 120, height: 120)
        }
        .frame(width: 100, height: 100, alignment: .center)
    }
}

