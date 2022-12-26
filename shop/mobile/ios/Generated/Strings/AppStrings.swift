// swiftlint:disable all
// Generated using SwiftGen — https://github.com/SwiftGen/SwiftGen

import Foundation

// swiftlint:disable superfluous_disable_command file_length implicit_return prefer_self_in_static_references

// MARK: - Strings

// swiftlint:disable explicit_type_interface function_parameter_count identifier_name line_length
// swiftlint:disable nesting type_body_length type_name vertical_whitespace_opening_braces
internal enum L10nApp {
  /// Localizable.strings
  ///   GitHubViewer
  /// 
  ///   Created by Виталий Зарубин on 05.10.2021.
  internal static let appName = L10nApp.tr("App", "app_name", fallback: "You Shop")
  /// Перезагрузить
  internal static let commonBtnError = L10nApp.tr("App", "common_btn_error", fallback: "Перезагрузить")
  /// Повторить
  internal static let commonBtnRetry = L10nApp.tr("App", "common_btn_retry", fallback: "Повторить")
  /// Произошла непредвиденная ошибка, попробуйте позже
  internal static let commonError = L10nApp.tr("App", "common_error", fallback: "Произошла непредвиденная ошибка, попробуйте позже")
  /// ₽
  internal static let commonRub = L10nApp.tr("App", "common_rub", fallback: "₽")
  /// Корзина
  internal static let screenCart = L10nApp.tr("App", "screen_cart", fallback: "Корзина")
  /// Контакты
  internal static let screenContact = L10nApp.tr("App", "screen_contact", fallback: "Контакты")
  /// Связь
  internal static let screenContactForm = L10nApp.tr("App", "screen_contactForm", fallback: "Связь")
  /// Каталог
  internal static let screenExploring = L10nApp.tr("App", "screen_exploring", fallback: "Каталог")
  /// You Shop
  internal static let screenHome = L10nApp.tr("App", "screen_home", fallback: "You Shop")
  /// Заказ
  internal static let screenOrder = L10nApp.tr("App", "screen_order", fallback: "Заказ")
  /// Оформить заказ
  internal static let screenOrderCreate = L10nApp.tr("App", "screen_orderCreate", fallback: "Оформить заказ")
  /// История
  internal static let screenOrderHistory = L10nApp.tr("App", "screen_orderHistory", fallback: "История")
  /// Поиск заказа
  internal static let screenOrderSearch = L10nApp.tr("App", "screen_orderSearch", fallback: "Поиск заказа")
  /// Поиск...
  internal static let screenProduct = L10nApp.tr("App", "screen_product", fallback: "Поиск...")
  /// Продукты
  internal static let screenProducts = L10nApp.tr("App", "screen_products", fallback: "Продукты")
  /// Главная
  internal static let tab1 = L10nApp.tr("App", "tab_1", fallback: "Главная")
  /// Каталог
  internal static let tab2 = L10nApp.tr("App", "tab_2", fallback: "Каталог")
  /// Корзина
  internal static let tab3 = L10nApp.tr("App", "tab_3", fallback: "Корзина")
}
// swiftlint:enable explicit_type_interface function_parameter_count identifier_name line_length
// swiftlint:enable nesting type_body_length type_name vertical_whitespace_opening_braces

// MARK: - Implementation Details

extension L10nApp {
  private static func tr(_ table: String, _ key: String, _ args: CVarArg..., fallback value: String) -> String {
    let format = BundleToken.bundle.localizedString(forKey: key, value: value, table: table)
    return String(format: format, locale: Locale.current, arguments: args)
  }
}

// swiftlint:disable convenience_type
private final class BundleToken {
  static let bundle: Bundle = {
    #if SWIFT_PACKAGE
    return Bundle.module
    #else
    return Bundle(for: BundleToken.self)
    #endif
  }()
}
// swiftlint:enable convenience_type
