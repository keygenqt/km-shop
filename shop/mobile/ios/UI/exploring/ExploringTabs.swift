//
//  ExploringTabs.swift
//  MyShop
//
//  Created by Виталий Зарубин on 19.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI

struct ExploringTabs: View {
    
    @State private var selectedTab: Int = 0
    
    var body: some View {
        VStack {
            Picker("", selection: $selectedTab) {
                Text(L10nExploring.tab1).tag(0)
                Text(L10nExploring.tab2).tag(1)
            }
            .pickerStyle(SegmentedPickerStyle())
            
            VStack {
                Spacer()
                if selectedTab == 0 {
                    ExploringCategoriesScreen()
                } else {
                    ExploringCollectionsScreen()
                }
                Spacer()
            }.padding(.top)

        }
        .padding()
        .navigationBarTitle(L10nApp.appName)
        .navigationBarTitleDisplayMode(.inline)
        .navigationBarItems(trailing: HStack(spacing: 0) {
            Button {
                print("Edit button was tapped")
            } label: {
                Image(systemName: "paperplane.circle").imageScale(.large)
            }
            Button {
                print("Edit button was tapped")
            } label: {
                Image(systemName: "folder.circle").imageScale(.large)
            }
        })
        .navigationBarItems(leading: HStack(spacing: 0) {
            Image("launcher")
                .resizable()
                .frame(width: 24, height: 24)
                .aspectRatio(contentMode: .fit)
                .clipShape(Circle())
        })
        .accentColor(Color.primary)
    }
}
