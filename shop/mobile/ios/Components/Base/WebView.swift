//
//  WebView.swift
//  YouShop
//
//  Created by Виталий Зарубин on 21.12.2022.
//  Copyright © 2022 orgName. All rights reserved.
//

import SwiftUI
import WebKit

struct WebView: UIViewRepresentable {
    
    class WebDelegate: UIViewController, WKNavigationDelegate {
        var finish: (() -> Void)?
        
        func listenFinish(listen: (() -> Void)?) {
            self.finish = listen

        }
        
        func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
            finish?()
        }
    }
    
    @Binding var isLoad: Bool
 
    var url: String
    var finish: (() -> Void)?
    var delegate: WebDelegate = WebDelegate()
 
    func makeUIView(context: Context) -> WKWebView {
        let webView = WKWebView()
        delegate.listenFinish(listen: finish)
        webView.navigationDelegate = delegate
        return webView
    }
 
    func updateUIView(_ webView: WKWebView, context: Context) {
        if !isLoad {
            let request = URLRequest(url: URL(string: url)!)
            webView.load(request)
        }
    }
}
