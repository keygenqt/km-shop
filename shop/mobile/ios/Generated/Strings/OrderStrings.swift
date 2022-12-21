// swiftlint:disable all
// Generated using SwiftGen — https://github.com/SwiftGen/SwiftGen

import Foundation

// swiftlint:disable superfluous_disable_command file_length implicit_return prefer_self_in_static_references

// MARK: - Strings

// swiftlint:disable explicit_type_interface function_parameter_count identifier_name line_length
// swiftlint:disable nesting type_body_length type_name vertical_whitespace_opening_braces
internal enum L10nOrder {
  /// К сожалению, запрошенная вами страница не найдена
  internal static let orderErrorText = L10nOrder.tr("Order", "order_error_text", fallback: "К сожалению, запрошенная вами страница не найдена")
  /// Заказ не найден
  internal static let orderErrorTitle = L10nOrder.tr("Order", "order_error_title", fallback: "Заказ не найден")
  /// Order.strings
  ///   YouShop
  /// 
  ///   Created by Виталий Зарубин on 21.12.2022.
  ///   Copyright © 2022 orgName. All rights reserved.
  internal static let orderTitle = L10nOrder.tr("Order", "order_title", fallback: "Заказ")
}
// swiftlint:enable explicit_type_interface function_parameter_count identifier_name line_length
// swiftlint:enable nesting type_body_length type_name vertical_whitespace_opening_braces

// MARK: - Implementation Details

extension L10nOrder {
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
