//
//  AppObservable.swift
//  YouShop
//
//  Created by Виталий Зарубин on 25.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import Foundation
import SwiftUI

class AppObservable: ObservableObject {
    @Published var homeTab: TabsHome = TabsHome.home
    @Published var exploringTab: TabsExploring = TabsExploring.categories
    @Published var cartIsReady: Bool = false
    @Published var cartIsBack: Bool = false
}
