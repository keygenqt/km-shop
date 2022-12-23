//
//  SVGImgProcessor.swift
//  YouShop
//
//  Created by Виталий Зарубин on 23.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI
import Kingfisher
import SVGKit

struct SVGImgProcessor: ImageProcessor {
    
    var tint: Color = Color.black
    
    var identifier: String = "com.keygenqt.shop.ios.webpprocessor"
    
    public func process(item: ImageProcessItem, options: KingfisherParsedOptionsInfo) -> KFCrossPlatformImage? {
        switch item {
        case .image(let image):
            return image.tint(tint)
        case .data(let data):
            let svg = SVGKImage(data: data)
            if svg == nil {
                return SVGKImage(data: data)?.uiImage.tint(tint)
            }
            return svg?.uiImage.tint(tint)
        }
    }
}
