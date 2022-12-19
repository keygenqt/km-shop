import SwiftUI

@main
struct YouShopApp: App {
    
    init() {
        Thread.sleep(forTimeInterval: 2.0)
    }
    
	var body: some Scene {
		WindowGroup {
            HomeTabs()
		}
	}
}
