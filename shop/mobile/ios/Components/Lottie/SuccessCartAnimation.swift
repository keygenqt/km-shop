//
//  SuccessCartAnimation.swift
//  YouShop
//
//  Created by Виталий Зарубин on 21.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import Lottie
import SwiftUI

struct SuccessCartAnimation: View {
    var body: some View {
        VStack(spacing: 0) {
            LottieView(
                name: "order_success",
                loopMode: LottieLoopMode.loop,
                animationSpeed: 0.8
            )
            .frame(width: 185, height: 185)
        }
        .frame(width: 150, height: 150, alignment: .center)
    }
}
