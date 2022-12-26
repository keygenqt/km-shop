import SwiftUI
import Kingfisher

@main
struct MyShopApp: App {
    
    @StateObject var appState = AppObservable()
    @StateObject var cart = CartObservable()
    @StateObject var navPath = NavObservable()
    
	var body: some Scene {
		WindowGroup {
            NavigationStack(path: $navPath.route) {
                SplashScreen()
                    .navigationDestination(for: NavDiscover.self) { nav in nav.destination }
            }
            .environmentObject(cart)
            .environmentObject(appState)
            .environment(\.nav, NavChange(
                add: { screen in
                    navPath.add(screen)
                },
                insert: { screens, animation in
                    navPath.insert(screens, animation: animation)
                }
            ))
		}
	}
}
