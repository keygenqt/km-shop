//
//  ProductScreen.swift
//  MyShop
//
//  Created by Виталий Зарубин on 19.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI
import AlertToast
import Kingfisher
import Lottie

struct ProductScreen: View {
    
    // Routing management
    @Environment(\.nav) var nav: NavChange
    
    // App cart products
    @EnvironmentObject var cart: CartObservable

    // View Model
    @ObservedObject var viewModel: ProductViewModel
    
    init(id: Int) {
        self.viewModel = ProductViewModel(id: id)
        self.viewModel.load()
    }
    
    @State private var errorKF: Bool = false
    @State private var isShowingCartAdd: Bool = false
    @State private var isShowingCartDel: Bool = false
    @State private var imageActon: String?
    
    let infoBlocks = [
        [
            "color": "bgVariant1",
            "icon": "box.truck",
            "title": L10nProduct.productBlock1Title,
            "text": L10nProduct.productBlock1Text,
        ],
        [
            "color": "bgVariant2",
            "icon": "repeat.circle",
            "title": L10nProduct.productBlock2Title,
            "text": L10nProduct.productBlock2Text,
        ],
        [
            "color": "bgVariant3",
            "icon": "globe.americas.fill",
            "title": L10nProduct.productBlock3Title,
            "text": L10nProduct.productBlock3Text,
        ],
        [
            "color": "bgVariant4",
            "icon": "goforward.60",
            "title": L10nProduct.productBlock4Title,
            "text": L10nProduct.productBlock4Text,
        ],
    ]
    
    var body: some View {
        VStack {
            if let response = viewModel.response {
                AppScrollView {
                    VStack {
                        if errorKF {
                            ZStack {
                                Circle().fill(Color.imageBorder).frame(width: 60, height: 60)
                                Image("no_image")
                                    .resizable()
                                    .aspectRatio(contentMode: .fill)
                                    .frame(width: UIScreen.main.bounds.width - 40, height: 230)
                                    .clipShape(Shapes.medium)
                            }
                        } else {
                            if imageActon != nil {
                                KFImage(URL(string: imageActon!)!)
                                    .placeholder {
                                        VStack {
                                            LoadingAnimationLarge()
                                        }
                                        .frame(width: UIScreen.main.bounds.width - 40, height: 230)
                                        .background(Color.surface)
                                        .clipShape(Shapes.medium)
                                    }
                                    .onFailure { _ in
                                        errorKF = true
                                    }
                                    .resizable()
                                    .aspectRatio(contentMode: .fill)
                                    .frame(width: UIScreen.main.bounds.width - 40, height: 230)
                                    .clipShape(Shapes.medium)
                            }
                        }
                        
                        HStack {
                            ImageBtn(
                                active: response.image1 == imageActon,
                                image: response.image1,
                                action: { url in
                                    imageActon = url
                                }
                            )
                            ImageBtn(
                                active: response.image2 == imageActon,
                                image: response.image2,
                                action: { url in
                                    imageActon = url
                                }
                            )
                            ImageBtn(
                                active: response.image3 == imageActon,
                                image: response.image3,
                                action: { url in
                                    imageActon = url
                                }
                            )
                            Spacer()
                        }
                    }.onAppear {
                        imageActon = response.image1
                    }
                    
                    HStack {
                        VStack {
                            AppText(response.price.priceFormat(), color: Color.bgVariant6)
                        }
                        .padding(.vertical, 6)
                        .padding(.horizontal, 12)
                        .background(Color.surface)
                        .clipShape(Shapes.medium)
                        .overlay(Shapes.medium.stroke(Color.bgVariant6, lineWidth: 1))
                        
                        Spacer(minLength: 0)
                    }
                    
                    AppSection {
                        VStack(spacing: 10) {
                            HStack {
                                AppText(L10nProduct.productDescription, typography: .h6)
                                Spacer(minLength: 0)
                            }
                            HStack {
                                AppText(response.description_)
                                Spacer(minLength: 0)
                            }
                        }.padding()
                    }
                    
                    HStack {
                        
                        CartChangeCount(
                            id: response.id,
                            price: response.price,
                            scale: .large,
                            onFirstAdded: {
                                isShowingCartAdd = true
                                isShowingCartDel = false
                            }
                        )
                        
                        if cart.has(response.id) {
                            Button {
                                cart.delItem(response.id)
                                isShowingCartAdd = false
                                isShowingCartDel = true
                            } label: {
                                HStack {
                                    Image(systemName: "cart.badge.minus")
                                        .imageScale(.medium)
                                        .foregroundColor(.white)
                                    
                                    AppText(L10nProduct.productBtnRemove, color: .white)
                                }
                            }.buttonStyle(BottonStyle(
                                color: Color.btnBlack,
                                colorPress: Color.btnBlackPress,
                                fullWith: true,
                                size: .normal
                            ))
                        } else {
                            Button {
                                cart.add(
                                    id: response.id,
                                    price: response.price
                                )
                                isShowingCartAdd = true
                                isShowingCartDel = false
                            } label: {
                                HStack {
                                    Image(systemName: "cart.badge.plus")
                                        .imageScale(.medium)
                                        .foregroundColor(.white)
                                    
                                    AppText(L10nProduct.productBtnAdd, color: .white)
                                }
                            }.buttonStyle(BottonStyle(
                                color: Color.btnBlack,
                                colorPress: Color.btnBlackPress,
                                fullWith: true,
                                size: .normal
                            ))
                        }
                    }
                    
                    Divider().overlay(.gray)
                    
                    if response.collections?.size != 0 {
                        HStack {
                            TagCollectionsView(tags: response.collections!.toArray())
                            Spacer(minLength: 0)
                        }
                        Divider().overlay(.gray)
                    }
                    
                    LazyVGrid(columns: [
                        GridItem(.flexible(), alignment: .top),
                        GridItem(.flexible(), alignment: .top),
                    ], spacing: 10) {
                        ForEach(infoBlocks, id: \.self) { item in
                            ProudctInfoBlock(
                                color: item["color"]!,
                                icon: item["icon"]!,
                                title: item["title"]!,
                                text: item["text"]!
                            )
                        }
                    }
                    
                }.refreshable {
                    await viewModel.loadAsync()
                }
                .toast(isPresenting: $isShowingCartAdd) {
                    AlertToast(
                        displayMode: .banner(.pop),
                        type: .regular,
                        title: L10nApp.commonCartAdd,
                        style: .style(
                            backgroundColor: Color.bgVariant1,
                            titleColor: Color.onBackground,
                            titleFont: Font.system(size: 16)
                        )
                    )
                }
                .toast(isPresenting: $isShowingCartDel) {
                    AlertToast(
                        displayMode: .banner(.pop),
                        type: .regular,
                        title: L10nApp.commonCartRemove,
                        style: .style(
                            backgroundColor: Color.bgVariant1,
                            titleColor: Color.onBackground,
                            titleFont: Font.system(size: 16)
                        )
                    )
                }
            } else {
                if viewModel.error != nil {
                    EmptyBody(
                        title: L10nProduct.productEmptyTitle,
                        subtitle: L10nProduct.productEmptySubtitle
                    )
                } else {
                    LoadingBody()
                }
            }
        }.colorize(viewModel.response?.name ?? (viewModel.error == nil ? L10nApp.screenProduct : ""), true)
    }
    
    func cell(header: String, text: String, color: Color) -> some View {
            HStack {
                VStack(alignment: .leading) {
                    Text(header)
                        .font(.caption)
                    Text(text)
                        .fontWeight(.semibold)
                }
                Spacer()
            }
            .frame(maxWidth: .infinity)
            .padding(20)
            .background(color)
            .cornerRadius(10)
            .padding(10)
        }
}
