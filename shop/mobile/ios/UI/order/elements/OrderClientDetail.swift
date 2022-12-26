//
//  OrderClientInfo.swift
//  YouShop
//
//  Created by Виталий Зарубин on 26.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

struct OrderClientDetail: View {
    
    var email: String
    var phone: String
    var address: String
    
    var body: some View {
        VStack(spacing: 10) {
            HStack {
                Image(systemName: "person.circle").imageScale(.medium)
                AppText(L10nOrder.orderListTitle)
                Spacer()
            }.padding(.bottom, 4)
            
            VStack(spacing: 15) {
                if !phone.isEmpty {
                    HStack(alignment: .top) {
                        Image(systemName: "phone.fill")
                            .imageScale(.medium)
                            .foregroundColor(Color.primary)
                        AppText(phone)
                        Spacer()
                    }
                }
                
                if !email.isEmpty {
                    HStack(alignment: .top) {
                        Image(systemName: "mail.fill")
                            .imageScale(.medium)
                            .foregroundColor(Color.primary)
                        AppText(email)
                        Spacer()
                    }
                }
                
                if !address.isEmpty {
                    HStack(alignment: .top) {
                        Image(systemName: "location.fill")
                            .imageScale(.medium)
                            .foregroundColor(Color.primary)
                        AppText(address)
                        Spacer()
                    }
                }
            }
            .padding()
            .background(Color.background)
            .clipShape(Shapes.medium)
        }
        .padding()
        .frame(maxWidth: .infinity)
    }
}
