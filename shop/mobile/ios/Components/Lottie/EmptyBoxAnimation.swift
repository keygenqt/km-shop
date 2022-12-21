//
//  EmptyBoxAnimation.swift
//  YouShop
//
//  Created by Виталий Зарубин on 21.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import Lottie
import SwiftUI

struct EmptyBoxAnimation: View {
    var body: some View {
        VStack(spacing: 0) {
            LottieView(
                name: "empty_box_blue",
                loopMode: LottieLoopMode.playOnce,
                animationSpeed: 0.8
            )
            .frame(width: 250, height: 250)
            .offset(y: -13)
        }
        .frame(width: 150, height: 150, alignment: .center)
    }
}
