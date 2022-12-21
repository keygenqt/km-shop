// swiftlint:disable all
// Generated using SwiftGen — https://github.com/SwiftGen/SwiftGen

import Foundation

// swiftlint:disable superfluous_disable_command file_length implicit_return prefer_self_in_static_references

// MARK: - Strings

// swiftlint:disable explicit_type_interface function_parameter_count identifier_name line_length
// swiftlint:disable nesting type_body_length type_name vertical_whitespace_opening_braces
internal enum L10nOrderCreate {
  /// Отправить
  internal static let orderCreateBtnSubmit = L10nOrderCreate.tr("OrderCreate", "order_create_btn_submit", fallback: "Отправить")
  /// Введите свои контактные данные, чтобы с вами можно было связаться и уточнить все необходимые данные по заказу
  internal static let orderCreateInfo = L10nOrderCreate.tr("OrderCreate", "order_create_info", fallback: "Введите свои контактные данные, чтобы с вами можно было связаться и уточнить все необходимые данные по заказу")
  /// Информация по заказу
  internal static let orderCreateSuccessBtn = L10nOrderCreate.tr("OrderCreate", "order_create_success_btn", fallback: "Информация по заказу")
  /// Спасибо за ваш заказ. С вами свяжутся для уточнения деталей заказа. До скорого!
  internal static let orderCreateSuccessText = L10nOrderCreate.tr("OrderCreate", "order_create_success_text", fallback: "Спасибо за ваш заказ. С вами свяжутся для уточнения деталей заказа. До скорого!")
  /// Заказ оформлен!
  internal static let orderCreateSuccessTitle = L10nOrderCreate.tr("OrderCreate", "order_create_success_title", fallback: "Заказ оформлен!")
  /// Вы можете отслеживать статус вашего заказа, он был добавлен в историю.
  internal static let orderCreateSuccessToast = L10nOrderCreate.tr("OrderCreate", "order_create_success_toast", fallback: "Вы можете отслеживать статус вашего заказа, он был добавлен в историю.")
  /// OrderCreate.strings
  ///   YouShop
  /// 
  ///   Created by Виталий Зарубин on 21.12.2022.
  ///   Copyright © 2022 orgName. All rights reserved.
  internal static let orderCreateTitle = L10nOrderCreate.tr("OrderCreate", "order_create_title", fallback: "Оформление заказа")
  /// Контактная информация
  internal static let orderCreateTitle2 = L10nOrderCreate.tr("OrderCreate", "order_create_title2", fallback: "Контактная информация")
}
// swiftlint:enable explicit_type_interface function_parameter_count identifier_name line_length
// swiftlint:enable nesting type_body_length type_name vertical_whitespace_opening_braces

// MARK: - Implementation Details

extension L10nOrderCreate {
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
