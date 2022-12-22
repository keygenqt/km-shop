//
//  ConstantsKMM.swift
//  iosApp
//
//  Created by Виталий Зарубин on 19.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import Foundation
import shared

struct ConstantsKMM {
    // Constants
    static let CONST: AppConstants = AppConstants()
    
    // Network service
    static let REQUEST: ServiceRequest = ServiceRequest(apiUrl: nil, logger: nil)
}
