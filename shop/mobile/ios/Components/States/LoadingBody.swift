//
//  LoadingBody.swift
//  YouShop
//
//  Created by Виталий Зарубин on 21.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

struct LoadingBody: View {
    var body: some View {
        VStack {
            CatPlayingAnimation()
        }
        .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .center)
        .padding()
        .background(Color.background)
    }
}
