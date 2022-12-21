//
//  ContactMapBlock.swift
//  YouShop
//
//  Created by Виталий Зарубин on 21.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

struct ContactMapBlock: View {
    
    @State var isLoad: Bool = false
    
    var body: some View {
        VStack {
            ZStack {
                WebView(isLoad: $isLoad, url: ConstantsKMM.CONST.links.URL_MAP, finish: {
                    DispatchQueue.main.asyncAfter(deadline: .now() + 0.5) {
                        isLoad = true
                    }
                }).frame(maxWidth: .infinity, maxHeight: .infinity)
                
                if !isLoad {
                    VStack {
                        LoadingAnimationLarge()
                    }
                    .frame(maxWidth: .infinity, maxHeight: .infinity).background(Color.surface)
                }
            }
            .frame(maxWidth: .infinity)
            .frame(height: 200)
            .background(.red)
        }
        .frame(maxWidth: .infinity)
        .background(Color.surface)
        .clipShape(Shapes.medium)
        .padding(.horizontal)
    }
}
