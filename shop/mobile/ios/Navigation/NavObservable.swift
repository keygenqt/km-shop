//
//  NavObservable.swift
//  YouShop
//
//  Created by Виталий Зарубин on 21.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import Foundation
import SwiftUI

class NavObservable: ObservableObject {
    @Published var route: [NavDiscover] = []
    
    // add screen
    func add(_ screen: NavDiscover) {
        route.append(screen)
    }
    
    // update routing
    func insert(_ screens: [NavDiscover], animation: Bool = true) {
        UIView.setAnimationsEnabled(animation)
        route = screens
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.25) {
            UIView.setAnimationsEnabled(true)
        }
    }
}
