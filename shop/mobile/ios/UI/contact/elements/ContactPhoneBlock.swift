//
//  ContactPhoneBlock.swift
//  YouShop
//
//  Created by Виталий Зарубин on 21.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

struct ContactPhoneBlock: View {
    
    var action: (() -> Void)?
    
    var body: some View {
        VStack {
            VStack {
                HStack(spacing: 0) {
                    ZStack {
                        Circle().fill(.white.opacity(0.9)).frame(width: 70, height: 70)
                        Image("contact_phone")
                            .resizable()
                            .aspectRatio(contentMode: .fit)
                            .frame(width: 45, height: 45)
                            .offset(y: 1)
                    }.padding(.trailing)
                    VStack(alignment: .leading) {
                        AppText(text: L10nContact.contactPhoneTitle)
                        Button {
                            action?()
                        } label: {
                            HStack {
                                Image(systemName: "phone.fill").imageScale(.small)
                                Spacer()
                                AppText(text: ConstantsKMM.CONST.other.CONTACT_PHONE, color: Color.white)
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
        .background(Color.surface)
        .clipShape(Shapes.medium)
        .padding(.horizontal)
    }
}
