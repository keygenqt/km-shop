// swiftlint:disable all
// Generated using SwiftGen — https://github.com/SwiftGen/SwiftGen

import Foundation

// swiftlint:disable superfluous_disable_command file_length implicit_return prefer_self_in_static_references

// MARK: - Strings

// swiftlint:disable explicit_type_interface function_parameter_count identifier_name line_length
// swiftlint:disable nesting type_body_length type_name vertical_whitespace_opening_braces
internal enum L10nHome {
  /// Смотреть
  internal static let categoryBlockBtn = L10nHome.tr("Home", "category_block_btn", fallback: "Смотреть")
  /// Топ категорий
  internal static let categoryBlockTitle = L10nHome.tr("Home", "category_block_title", fallback: "Топ категорий")
  /// Все
  internal static let categoryBlockTitleBtn = L10nHome.tr("Home", "category_block_title_btn", fallback: "Все")
  /// Оформить
  internal static let homeBtnOrder = L10nHome.tr("Home", "home_btn_order", fallback: "Оформить")
  /// Начните поиск
  internal static let infoBlockBtn = L10nHome.tr("Home", "info_block_btn", fallback: "Начните поиск")
  /// Коллекции для
  /// вашего стиля
  internal static let infoBlockSubtitle = L10nHome.tr("Home", "info_block_subtitle", fallback: "Коллекции для\nвашего стиля")
  /// Home.strings
  ///   YouShop
  /// 
  ///   Created by Виталий Зарубин on 21.12.2022.
  ///   Copyright © 2022 orgName. All rights reserved.
  internal static let infoBlockTitle = L10nHome.tr("Home", "info_block_title", fallback: "В этом сезоне найди лучшее 🔥")
}
// swiftlint:enable explicit_type_interface function_parameter_count identifier_name line_length
// swiftlint:enable nesting type_body_length type_name vertical_whitespace_opening_braces

// MARK: - Implementation Details

extension L10nHome {
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
