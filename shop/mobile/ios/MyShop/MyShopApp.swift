import SwiftUI

@main
struct MyShopApp: App {
    
    init() {
        Thread.sleep(forTimeInterval: 2.0)
    }
    
	var body: some Scene {
		WindowGroup {
			ContentView()
		}
	}
}
