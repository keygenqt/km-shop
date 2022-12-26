//
//  OrderState.swift
//  YouShop
//
//  Created by Виталий Зарубин on 26.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI
import shared

struct OrderStateDetail: View {
    
    var state: OrderState
    var note: String
    
    var body: some View {
        VStack(spacing: 10) {
            HStack {
                Image(systemName: "info.circle").imageScale(.medium)
                AppText(L10nOrder.orderListTitle)
                Spacer()
            }.padding(.bottom, 4)
            
            VStack(spacing: 15) {
                
                switch state {
                case OrderState.theNew:
                    HStack(alignment: .top) {
                        Image(systemName: "n.circle")
                            .imageScale(.medium)
                            .foregroundColor(Color.stateNew)
                        AppText(L10nOrder.stateNew)
                        Spacer()
                    }
                case OrderState.pending:
                    HStack(alignment: .top) {
                        Image(systemName: "p.circle")
                            .imageScale(.medium)
                            .foregroundColor(Color.statePending)
                        AppText(L10nOrder.statePending)
                        Spacer()
                    }
                case OrderState.completed:
                    HStack(alignment: .top) {
                        Image(systemName: "checkmark.circle")
                            .imageScale(.medium)
                            .foregroundColor(Color.stateCompleted)
                        AppText(L10nOrder.stateCompleted)
                        Spacer()
                    }
                default:
                    HStack(alignment: .top) {
                        Image(systemName: "xmark.circle")
                            .imageScale(.medium)
                            .foregroundColor(Color.stateCanceled)
                        AppText(L10nOrder.stateCanceled)
                        Spacer()
                    }
                }
                
                if !note.isEmpty {
                    HStack(alignment: .top) {
                        Image(systemName: "note.text")
                            .imageScale(.medium)
                            .foregroundColor(Color.primary)
                        AppText(note)
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
