//
//  SVGKImage.swift
//  YouShop
//
//  Created by Виталий Зарубин on 23.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import UIKit
import SwiftUI
import Kingfisher
import SVGKit

public extension UIImage {

    /// Tint Image
    ///
    /// - Parameter color: Color
    /// - Returns: Image with tint color
    func tint(_ color: Color) -> UIImage? {
        let image = withRenderingMode(.alwaysTemplate)
        UIGraphicsBeginImageContextWithOptions(size, false, scale)
        UIColor(color).set()
        image.draw(in: CGRect(origin: .zero, size: size))
        guard let imageColored = UIGraphicsGetImageFromCurrentImageContext() else {
            return nil
        }
        UIGraphicsEndImageContext()
        return imageColored
    }
}
