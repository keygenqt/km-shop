//
//  LottieView.swift
//  YouShop
//
//  Created by Виталий Зарубин on 20.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import Lottie
import SwiftUI

struct LottieView: View {
    var name: String
    var loopMode: LottieLoopMode
    var animationSpeed: CGFloat
    
    @State private var lottieID = UUID()

    var body: some View {
        LottieUIView(
            name: name,
            loopMode: loopMode,
            animationSpeed: animationSpeed
        )
            .id(lottieID)
            .onAppear {
                lottieID = UUID()
            }
    }
}

private struct LottieUIView: UIViewRepresentable {
    var name: String
    var loopMode: LottieLoopMode
    var animationSpeed: CGFloat
    
    var animationView = LottieAnimationView()

    func makeUIView(context _: UIViewRepresentableContext<LottieUIView>) -> UIView {
        let view = UIView(frame: .zero)

        animationView.animation = LottieAnimation.named(name)
        animationView.contentMode = .scaleAspectFit
        animationView.loopMode = loopMode
        animationView.animationSpeed = animationSpeed
        animationView.play()

        animationView.translatesAutoresizingMaskIntoConstraints = false
        view.addSubview(animationView)

        NSLayoutConstraint.activate([
            animationView.heightAnchor.constraint(equalTo: view.heightAnchor),
            animationView.widthAnchor.constraint(equalTo: view.widthAnchor),
        ])

        return view
    }

    func updateUIView(_: UIView, context _: UIViewRepresentableContext<LottieUIView>) {}
}
