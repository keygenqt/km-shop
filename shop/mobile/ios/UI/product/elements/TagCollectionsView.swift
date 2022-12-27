//
//  WrappingHStack.swift
//  YouShop
//
//  Created by Виталий Зарубин on 27.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import Foundation
import SwiftUI
import shared
import Kingfisher

struct TagCollectionsView: View {
    var tags: [CollectionResponse]

    @State private var totalHeight = CGFloat.zero

    var body: some View {
        VStack {
            GeometryReader { geometry in
                self.generateContent(in: geometry)
            }
        }
        .frame(height: totalHeight)
    }

    private func generateContent(in g: GeometryProxy) -> some View {
        var width = CGFloat.zero
        var height = CGFloat.zero

        return ZStack(alignment: .topLeading) {
            ForEach(self.tags, id: \.self) { tag in
                self.item(for: tag)
                    .padding([.horizontal, .vertical], 4)
                    .alignmentGuide(.leading, computeValue: { d in
                        if abs(width - d.width) > g.size.width {
                            width = 0
                            height -= d.height
                        }
                        let result = width
                        if tag == self.tags.last! {
                            width = 0 //last item
                        } else {
                            width -= d.width
                        }
                        return result
                    })
                    .alignmentGuide(.top, computeValue: {d in
                        let result = height
                        if tag == self.tags.last! {
                            height = 0 // last item
                        }
                        return result
                    })
            }
        }.background(viewHeightReader($totalHeight))
    }

    private func item(for collection: CollectionResponse) -> some View {
        VStack {
            HStack(spacing: 4) {
                KFImage(URL(string: ConstantsKMM.getUrl("api/uploads/\(collection.icon)"))!)
                    .placeholder {
                        Image(systemName: "hourglass")
                            .resizable()
                            .aspectRatio(contentMode: .fit)
                            .frame(height: 10)
                            .foregroundColor(Color.primary)
                    }
                    .setProcessor(SVGImgProcessor(
                        tint: Color.primary,
                        identifier: "com.keygenqt.shop.ios.\(collection.icon)"
                    ))
                    .resizable()
                    .aspectRatio(contentMode: .fill)
                    .clipped()
                    .frame(width: 12, height: 12)

                AppText(collection.name, color: Color.primary, typography: .caption)
            }
        }
        .padding(.vertical, 3)
        .padding(.horizontal, 6)
        .background(Color.surface)
        .clipShape(Shapes.large)
        .overlay(Shapes.large.stroke(Color.primary, lineWidth: 1))
    }

    private func viewHeightReader(_ binding: Binding<CGFloat>) -> some View {
        return GeometryReader { geometry -> Color in
            let rect = geometry.frame(in: .local)
            DispatchQueue.main.async {
                binding.wrappedValue = rect.size.height
            }
            return .clear
        }
    }
}
