//
//  CategoryItem.swift
//  YouShop
//
//  Created by Виталий Зарубин on 23.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import Kingfisher
import SwiftUI

struct CategoryItem: View {
    
    var icon: String
    var name: String
    var desc: String
    var action: () -> Void
    
    @State private var errorKF: Bool = false
    
    var body: some View {
        AppSection(color: Color.bgVariant1, onClick: action) {
            HStack(spacing: 0) {
                
                if errorKF {
                    ImageDefault()
                        .padding(.trailing)
                } else {
                    KFImage(URL(string: icon)!)
                        .placeholder {
                            LoadingAnimationLarge()
                        }
                        .onFailure { _ in
                            errorKF = true
                        }
                        .resizable()
                        .aspectRatio(contentMode: .fill)
                        .clipShape(Circle())
                        .clipped()
                        .frame(width: 60, height: 60)
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
