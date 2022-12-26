//
//  OrderClientInfo.swift
//  YouShop
//
//  Created by Виталий Зарубин on 26.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

struct OrderClientInfo: View {
    var body: some View {
        VStack {
            VStack(alignment: .center, spacing: 0) {
                ZStack {
                    Circle().fill(Color.onSurface.opacity(0.9)).frame(width: 70, height: 70)
                    Image("contact_address")
                        .resizable()
                        .aspectRatio(contentMode: .fit)
                        .frame(width: 55, height: 55)
                        .offset(y: -2)
                }.padding(.bottom)
                
                AppText(L10nContact.contactAddressTitle, alignment: .center)
            }.padding()
        }
        .frame(maxWidth: .infinity)
    }
}
