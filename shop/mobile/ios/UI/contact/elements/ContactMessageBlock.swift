//
//  ContactMessageBlock.swift
//  YouShop
//
//  Created by Виталий Зарубин on 21.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

struct ContactMessageBlock: View {
    
    var action: (() -> Void)?
    
    var body: some View {
        VStack {
            VStack {
                HStack(spacing: 0) {
                    ZStack {
                        Circle().fill(Color.onSurface.opacity(0.9)).frame(width: 70, height: 70)
                        Image("contact_comment")
                            .resizable()
                            .aspectRatio(contentMode: .fit)
                            .frame(width: 45, height: 45)
                            .offset(y: 2)
                    }.padding(.trailing)
                    VStack(alignment: .leading) {
                        AppText(L10nContact.contactMessageTitle)
                        Button {
                            action?()
                        } label: {
                            HStack {
                                Image(systemName: "paperplane.fill").imageScale(.small)
                                Spacer()
                                AppText(L10nContact.contactMessageBtn, maxLines: 1, color: Color.white)
                                Spacer()
                            }
                        }.buttonStyle(BottonStyle(
                            fullWith: true,
                            size: .normal
                        ))
                    }
                }
            }.padding()
        }
        .frame(maxWidth: .infinity)
    }
}
