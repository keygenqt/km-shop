//
//  EmptyCartAnimation.swift
//  YouShop
//
//  Created by Виталий Зарубин on 21.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import Lottie
import SwiftUI

struct EmptyCartAnimation: View {
    var body: some View {
        VStack(spacing: 0) {
            LottieView(
                name: "cart_empty",
                loopMode: LottieLoopMode.loop,
                animationSpeed: 0.8
            )
            .frame(width: 190, height: 190)
            .offset(x: 2)
        }
        .frame(width: 150, height: 150, alignment: .center)
    }
}
