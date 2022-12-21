// swiftlint:disable all
// Generated using SwiftGen — https://github.com/SwiftGen/SwiftGen

import Foundation

// swiftlint:disable superfluous_disable_command file_length implicit_return prefer_self_in_static_references

// MARK: - Strings

// swiftlint:disable explicit_type_interface function_parameter_count identifier_name line_length
// swiftlint:disable nesting type_body_length type_name vertical_whitespace_opening_braces
internal enum L10nProduct {
  /// Продукт добвлен в корзину
  internal static let productAddToCart = L10nProduct.tr("Product", "product_add_to_cart", fallback: "Продукт добвлен в корзину")
  /// При заказе свыше ₽ 5000.00
  internal static let productBlock1Text = L10nProduct.tr("Product", "product_block_1_text", fallback: "При заказе свыше ₽ 5000.00")
  /// Бесплатная доставка
  internal static let productBlock1Title = L10nProduct.tr("Product", "product_block_1_title", fallback: "Бесплатная доставка")
  /// Просто свяжитесь с нами
  internal static let productBlock2Text = L10nProduct.tr("Product", "product_block_2_text", fallback: "Просто свяжитесь с нами")
  /// Очень легко вернуть
  internal static let productBlock2Title = L10nProduct.tr("Product", "product_block_2_title", fallback: "Очень легко вернуть")
  /// Быстрая доставка по всей стране
  internal static let productBlock3Text = L10nProduct.tr("Product", "product_block_3_text", fallback: "Быстрая доставка по всей стране")
  /// Доставка
  internal static let productBlock3Title = L10nProduct.tr("Product", "product_block_3_title", fallback: "Доставка")
  /// 60 дней возврата по любой причине
  internal static let productBlock4Text = L10nProduct.tr("Product", "product_block_4_text", fallback: "60 дней возврата по любой причине")
  /// Политика возврата
  internal static let productBlock4Title = L10nProduct.tr("Product", "product_block_4_title", fallback: "Политика возврата")
  /// Добавить в корзину
  internal static let productBtnAdd = L10nProduct.tr("Product", "product_btn_add", fallback: "Добавить в корзину")
  /// Удалить с корзины
  internal static let productBtnRemove = L10nProduct.tr("Product", "product_btn_remove", fallback: "Удалить с корзины")
  /// Продукт удален из корзины
  internal static let productDeleteFromCart = L10nProduct.tr("Product", "product_delete_from_cart", fallback: "Продукт удален из корзины")
  /// Описание
  internal static let productDescription = L10nProduct.tr("Product", "product_description", fallback: "Описание")
  /// Что-то пошло не так. Попробуйте перезайти позже
  internal static let productEmptySubtitle = L10nProduct.tr("Product", "product_empty_subtitle", fallback: "Что-то пошло не так. Попробуйте перезайти позже")
  /// Продукт не найден
  internal static let productEmptyTitle = L10nProduct.tr("Product", "product_empty_title", fallback: "Продукт не найден")
  /// Product.strings
  ///   YouShop
  /// 
  ///   Created by Виталий Зарубин on 21.12.2022.
  ///   Copyright © 2022 orgName. All rights reserved.
  internal static let productTitle = L10nProduct.tr("Product", "product_title", fallback: "Загрузка…")
}
// swiftlint:enable explicit_type_interface function_parameter_count identifier_name line_length
// swiftlint:enable nesting type_body_length type_name vertical_whitespace_opening_braces

// MARK: - Implementation Details

extension L10nProduct {
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
