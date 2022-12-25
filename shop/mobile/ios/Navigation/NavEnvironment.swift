//
//  NavEnvironment.swift
//  YouShop
//
//  Created by Виталий Зарубин on 25.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI
import Foundation

struct Nav: EnvironmentKey {
    static let defaultValue: NavChange = NavChange()
}

extension EnvironmentValues {
  var nav: NavChange {
    get { self[Nav.self] }
    set { self[Nav.self] = newValue }
  }
}

struct NavChange {
    var add: (NavDiscover) -> Void = {_ in }
    var insert: ([NavDiscover], Bool) -> Void = {_, _ in }
}
