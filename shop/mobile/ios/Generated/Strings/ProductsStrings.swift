// swiftlint:disable all
// Generated using SwiftGen — https://github.com/SwiftGen/SwiftGen

import Foundation

// swiftlint:disable superfluous_disable_command file_length implicit_return prefer_self_in_static_references

// MARK: - Strings

// swiftlint:disable explicit_type_interface function_parameter_count identifier_name line_length
// swiftlint:disable nesting type_body_length type_name vertical_whitespace_opening_braces
internal enum L10nProducts {
  /// Продукт добвлен в корзину
  internal static let productsAddToCart = L10nProducts.tr("Products", "products_add_to_cart", fallback: "Продукт добвлен в корзину")
  /// Продукт удален из корзины
  internal static let productsDeleteFromCart = L10nProducts.tr("Products", "products_delete_from_cart", fallback: "Продукт удален из корзины")
  /// В этой категории товаров пока нет. Попробуйте зайти позже
  internal static let productsEmptySubtitleCategories = L10nProducts.tr("Products", "products_empty_subtitle_categories", fallback: "В этой категории товаров пока нет. Попробуйте зайти позже")
  /// В этой коллекции товаров пока нет. Попробуйте зайти позже
  internal static let productsEmptySubtitleCollections = L10nProducts.tr("Products", "products_empty_subtitle_collections", fallback: "В этой коллекции товаров пока нет. Попробуйте зайти позже")
  /// Products.strings
  ///   YouShop
  /// 
  ///   Created by Виталий Зарубин on 21.12.2022.
  ///   Copyright © 2022 orgName. All rights reserved.
  internal static let productsEmptyTitle = L10nProducts.tr("Products", "products_empty_title", fallback: "Товары не найдены")
}
// swiftlint:enable explicit_type_interface function_parameter_count identifier_name line_length
// swiftlint:enable nesting type_body_length type_name vertical_whitespace_opening_braces

// MARK: - Implementation Details

extension L10nProducts {
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
