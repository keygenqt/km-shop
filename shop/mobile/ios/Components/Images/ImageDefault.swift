//
//  ImageDefault.swift
//  YouShop
//
//  Created by Виталий Зарубин on 23.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

struct ImageDefault: View {
    var body: some View {
        ZStack {
            Circle().fill(Color.imageBorder).frame(width: 60, height: 60)
            Image("no_image")
                .resizable()
                .aspectRatio(contentMode: .fill)
                .clipShape(Circle())
                .frame(width: 54, height: 54)
        }
    }
}
