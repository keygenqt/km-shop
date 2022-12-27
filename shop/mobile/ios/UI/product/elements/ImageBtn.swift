//
//  ImageBtn.swift
//  YouShop
//
//  Created by Виталий Зарубин on 27.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import Foundation
import SwiftUI
import Kingfisher
import Lottie

struct ImageBtn: View {
    
    @Environment(\.colorScheme) var colorScheme
    
    var active: Bool
    var image: String?
    var action: (String) -> Void
    
    @State private var imageState: Bool?
    
    var body: some View {
        
        let opacity = colorScheme == .dark ? 0.3 : 0.1
        
        if let image = self.image {
            if imageState != false {
                Button {
                    action(image)
                } label: {
                    ZStack {
                        Rectangle().fill(
                            imageState == nil ? Color.surface : (
                                active ? Color.secondary.opacity(opacity) : Color.onBackground.opacity(opacity)
                            )
                        ).frame(width: 75, height: 50)
                        KFImage(URL(string: image)!)
                            .placeholder {
                                LottieView(
                                    name: "block_loader",
                                    loopMode: LottieLoopMode.loop,
                                    animationSpeed: 0.8
                                )
                                .frame(width: 45, height: 45)
                            }
                            .onFailure { _ in
                                imageState = false
                            }
                            .onSuccess { _ in
                                imageState = true
                            }
                            .forceRefresh()
                            .resizable()
                            .aspectRatio(contentMode: .fill)
                            .frame(width: 60, height: 35)
                            .clipShape(Shapes.small)
                    }
                    .clipShape(Shapes.small)
                    .frame(width: 75, height: 50)
                }.disabled(imageState != true)
            }
        } else {
            EmptyView()
        }
    }
}
