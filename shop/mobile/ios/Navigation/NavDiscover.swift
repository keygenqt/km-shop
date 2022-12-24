//
//  NavDiscover.swift
//  YouShop
//
//  Created by Виталий Зарубин on 25.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI
import Foundation

struct NavDiscover: Hashable, Equatable {
    static func == (lhs: NavDiscover, rhs: NavDiscover) -> Bool {
        lhs.id == rhs.id
    }

    func hash(into hasher: inout Hasher) {
        hasher.combine(id)
    }

    let id = UUID()
    var destination: AnyView
    
    init(_ destination: AnyView) {
        self.destination = destination
    }
}
