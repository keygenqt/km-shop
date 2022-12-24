import SwiftUI
import Kingfisher

@main
struct MyShopApp: App {
    
    @StateObject var navPath = NavObservable()
    @State private var selection = 0
    
    @State var navChange: NavChange?
    
    init() {
        Thread.sleep(forTimeInterval: 1.0)
    }
    
	var body: some Scene {
		WindowGroup {
            NavigationStack(path: $navPath.route) {
                HomeTabs(selection: $selection)
                    .navigationDestination(for: NavDiscover.self) { nav in nav.destination }
            }
            .environment(\.nav, NavChange(
                add: { screen in
                    navPath.add(screen)
                },
                insert: { screens in
                    navPath.insert(screens)
                }
            ))
		}
	}
}
