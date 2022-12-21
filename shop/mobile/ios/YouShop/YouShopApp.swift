import SwiftUI

@main
struct MyShopApp: App {
    
    @StateObject var navPath = NavObservable()
    @State private var selection = 0
    
    init() {
        Thread.sleep(forTimeInterval: 2.0)
    }
    
	var body: some Scene {
		WindowGroup {
            NavigationStack(path: $navPath.route) {
                HomeTabs(selection: $selection)
                    .navigationDestination(for: NavScreen.self) { nav in
                        switch nav {
                        case NavScreen.cart: CartScreen()
                        case NavScreen.contact: ContactScreen()
                        case NavScreen.contactForm: ContactFormScreen()
                        case NavScreen.exploring: ExploringTabs()
                        case NavScreen.order:
                            if case let .order(number) = nav {
                                OrderScreen(number: number)
                            }
                        case NavScreen.orderCreate: OrderCreateScreen(onChangeTab: {
                            selection = 0
                        })
                        case NavScreen.orderHistory: OrderHistoryScreen()
                        case NavScreen.orderSearch: OrderSearchScreen()
                        case NavScreen.product: ProductScreen()
                        case NavScreen.products:
                            if case let .products(title) = nav {
                                ProductsScreen(title: title)
                            }
                        }
                    }
            }
            .environmentObject(navPath)
		}
	}
}
