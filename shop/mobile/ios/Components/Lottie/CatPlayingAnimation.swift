//
//  CatPlayingAnimation.swift
//  YouShop
//
//  Created by Виталий Зарубин on 21.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import Lottie
import SwiftUI

struct CatPlayingAnimation: View {
    var body: some View {
        ZStack {
            Circle().strokeBorder(.gray, lineWidth: 5)
            VStack(spacing: 0) {
                LottieView(
                    name: "cat_playing_animation",
                    loopMode: LottieLoopMode.loop,
                    animationSpeed: 1.0
                )
                .frame(width: 185, height: 185)
                .offset(x: 15, y: 7)
            }
            .frame(width: 130, height: 130, alignment: .center)
            .offset(x: 10)
        }
        .frame(width: 150, height: 150, alignment: .center)
    }
}
