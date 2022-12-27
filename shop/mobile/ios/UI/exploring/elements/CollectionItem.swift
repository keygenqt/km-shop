//
//  CollectionItem.swift
//  YouShop
//
//  Created by Виталий Зарубин on 23.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import Kingfisher
import SwiftUI

struct CollectionItem: View {
    
    @Environment(\.colorScheme) var colorScheme
    
    var icon: String
    var name: String
    var desc: String
    var action: () -> Void
    
    @State private var errorKF: Bool = false
    
    var body: some View {
        AppSection(color: Color.bgVariant3, onClick: action) {
            HStack(spacing: 0) {
                
                if errorKF {
                    ImageDefault()
                        .padding(.trailing)
                } else {
                    ZStack {
                        Circle().fill(LinearGradient(
                            gradient: Gradient(colors: [Color.collectionGr1, Color.collectionGr2]),
                            startPoint: .leading, endPoint: .trailing))
                        .frame(width: 60, height: 60)
                    }.overlay(VStack {
                        KFImage(URL(string: ConstantsKMM.getUrl("api/uploads/\(icon)"))!)
                            .placeholder {
                                LoadingAnimationLarge()
                            }
                            .onFailure { _ in
                                errorKF = true
                            }
                            .setProcessor(SVGImgProcessor(
                                tint: (colorScheme == .dark ? .white : .black),
                                identifier: "com.keygenqt.shop.ios.\(icon)" + (colorScheme == .dark ? ".white" : ".black")
                            ))
                            .resizable()
                            .aspectRatio(contentMode: .fill)
                            .clipped()
                            .frame(width: 35, height: 35)
                            
                    }, alignment: .center)
                    .padding(.trailing)
                }
                
                VStack(alignment: .leading) {
                    AppText(name, typography: .h6)
                    Spacer().frame(height: 4)
                    AppText(desc, typography: .caption)
                }
                
                Spacer()
            }.padding()
        }
    }
}
