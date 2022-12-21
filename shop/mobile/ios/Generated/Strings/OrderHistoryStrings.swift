// swiftlint:disable all
// Generated using SwiftGen — https://github.com/SwiftGen/SwiftGen

import Foundation

// swiftlint:disable superfluous_disable_command file_length implicit_return prefer_self_in_static_references

// MARK: - Strings

// swiftlint:disable explicit_type_interface function_parameter_count identifier_name line_length
// swiftlint:disable nesting type_body_length type_name vertical_whitespace_opening_braces
internal enum L10nOrderHistory {
  /// Пока нет истории заказов
  internal static let orderHistoryEmpty = L10nOrderHistory.tr("OrderHistory", "order_history_empty", fallback: "Пока нет истории заказов")
  /// Здесь будет отображаться история открытых заказов в приложении
  internal static let orderHistoryEmptySubtitle = L10nOrderHistory.tr("OrderHistory", "order_history_empty_subtitle", fallback: "Здесь будет отображаться история открытых заказов в приложении")
  /// Продукты
  internal static let orderHistoryImgDesc = L10nOrderHistory.tr("OrderHistory", "order_history_img_desc", fallback: "Продукты")
  /// OrderHistory.strings
  ///   YouShop
  /// 
  ///   Created by Виталий Зарубин on 21.12.2022.
  ///   Copyright © 2022 orgName. All rights reserved.
  internal static let orderHistoryTitle = L10nOrderHistory.tr("OrderHistory", "order_history_title", fallback: "История")
}
// swiftlint:enable explicit_type_interface function_parameter_count identifier_name line_length
// swiftlint:enable nesting type_body_length type_name vertical_whitespace_opening_braces

// MARK: - Implementation Details

extension L10nOrderHistory {
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
