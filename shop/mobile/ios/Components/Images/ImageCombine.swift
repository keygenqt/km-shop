//
//  ImageCombine.swift
//  YouShop
//
//  Created by Виталий Зарубин on 26.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import Kingfisher
import SwiftUI

struct ImageCombine: View {
    
    var images: [String]
    
    @State private var countUpload: Int = 0
    @State private var errorKF: Bool = false
    
    var body: some View {
        ZStack {
            if images.count == 1 {
                images1()
            } else if images.count == 2 {
                images2()
            } else if images.count == 3 {
                images3()
            } else {
                images4()
            }
            
            if countUpload != images.count {
                LoadingAnimationBorder()
            }
            
            if images.isEmpty || errorKF {
                ImageDefault()
            }
        }

    }
    
    func images1() -> some View {
        VStack(spacing: 0) {
            KFImage(URL(string: images[0])!)
                .resizable()
                .onSuccess { _ in
                    countUpload += 1
                }
                .onFailure { _ in
                    errorKF = true
                }
                .aspectRatio(contentMode: .fill)
                .frame(width: 60, height: 60)
                .clipped()
        }
        .clipShape(Circle())
        .frame(width: 60, height: 60)
    }
    
    func images2() -> some View {
        VStack(spacing: 0) {
            
            KFImage(URL(string: images[0])!)
                .resizable()
                .onSuccess { _ in
                    countUpload += 1
                }
                .onFailure { _ in
                    errorKF = true
                }
                .aspectRatio(contentMode: .fill)
                .frame(width: 60, height: 30)
                .clipped()
            
            Spacer(minLength: 2)
            
            KFImage(URL(string: images[1])!)
                .resizable()
                .onSuccess { _ in
                    countUpload += 1
                }
                .onFailure { _ in
                    errorKF = true
                }
                .aspectRatio(contentMode: .fill)
                .frame(width: 60, height: 30)
                .clipped()
        }
        .clipShape(Circle())
        .frame(width: 60, height: 60)
    }
    
    func images3() -> some View {
        VStack(spacing: 0) {
            HStack(spacing: 0) {
                KFImage(URL(string: images[0])!)
                    .resizable()
                    .onSuccess { _ in
                        countUpload += 1
                    }
                    .onFailure { _ in
                        errorKF = true
                    }
                    .aspectRatio(contentMode: .fill)
                    .frame(width: 30, height: 30)
                    .clipped()
                
                Spacer(minLength: 2)
                
                KFImage(URL(string: images[1])!)
                    .resizable()
                    .onSuccess { _ in
                        countUpload += 1
                    }
                    .onFailure { _ in
                        errorKF = true
                    }
                    .aspectRatio(contentMode: .fill)
                    .frame(width: 30, height: 30)
                    .clipped()
            }.frame(width: 60, height: 30)
            
            Spacer(minLength: 2)
            
            HStack(spacing: 0) {
                KFImage(URL(string: images[2])!)
                    .resizable()
                    .onSuccess { _ in
                        countUpload += 1
                    }
                    .onFailure { _ in
                        errorKF = true
                    }
                    .aspectRatio(contentMode: .fill)
                    .frame(width: 60, height: 30)
                    .clipped()
            }
        }
        .clipShape(Circle())
        .frame(width: 60, height: 60)
    }
    
    func images4() -> some View {
        VStack(spacing: 0) {
            HStack(spacing: 0) {
                KFImage(URL(string: images[0])!)
                    .resizable()
                    .onSuccess { _ in
                        countUpload += 1
                    }
                    .onFailure { _ in
                        errorKF = true
                    }
                    .aspectRatio(contentMode: .fill)
                    .frame(width: 30, height: 30)
                    .clipped()
                    
                Spacer(minLength: 2)
                
                KFImage(URL(string: images[1])!)
                    .resizable()
                    .onSuccess { _ in
                        countUpload += 1
                    }
                    .onFailure { _ in
                        errorKF = true
                    }
                    .aspectRatio(contentMode: .fill)
                    .frame(width: 29, height: 29)
                    .clipped()
            }.frame(width: 60, height: 30)
            
            Spacer(minLength: 2)
            
            HStack(spacing: 0) {
                KFImage(URL(string: images[2])!)
                    .resizable()
                    .onSuccess { _ in
                        countUpload += 1
                    }
                    .onFailure { _ in
                        errorKF = true
                    }
                    .aspectRatio(contentMode: .fill)
                    .frame(width: 30, height: 30)
                    .clipped()
                
                Spacer(minLength: 2)
                
                KFImage(URL(string: images[3])!)
                    .resizable()
                    .onSuccess { _ in
                        countUpload += 1
                    }
                    .onFailure { _ in
                        errorKF = true
                    }
                    .aspectRatio(contentMode: .fill)
                    .frame(width: 30, height: 30)
                    .clipped()
            }.frame(width: 60, height: 30)
        }
        .clipShape(Circle())
        .frame(width: 60, height: 60)
    }
}
