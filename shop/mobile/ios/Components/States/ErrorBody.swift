//
//  ErrorBody.swift
//  YouShop
//
//  Created by Виталий Зарубин on 21.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

struct ErrorBody: View {
    
    var error: ResponseError
    
    var body: some View {
        VStack {
            ErrorAnimation()
        }
        .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .center)
        .padding()
    }
}
