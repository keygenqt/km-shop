// swiftlint:disable all
// Generated using SwiftGen — https://github.com/SwiftGen/SwiftGen

import Foundation

// swiftlint:disable superfluous_disable_command file_length implicit_return prefer_self_in_static_references

// MARK: - Strings

// swiftlint:disable explicit_type_interface function_parameter_count identifier_name line_length
// swiftlint:disable nesting type_body_length type_name vertical_whitespace_opening_braces
internal enum L10nContact {
  /// Доставка осуществляется по всей России, а мы находимся в городе Волгодонск
  internal static let contactAddressTitle = L10nContact.tr("Contact", "contact_address_title", fallback: "Доставка осуществляется по всей России, а мы находимся в городе Волгодонск")
  /// Моя личная почта
  internal static let contactEmailTitle = L10nContact.tr("Contact", "contact_email_title", fallback: "Моя личная почта")
  /// Написать сообщение
  internal static let contactMessageBtn = L10nContact.tr("Contact", "contact_message_btn", fallback: "Написать сообщение")
  /// Contact.strings
  ///   YouShop
  /// 
  ///   Created by Виталий Зарубин on 21.12.2022.
  ///   Copyright © 2022 orgName. All rights reserved.
  internal static let contactMessageTitle = L10nContact.tr("Contact", "contact_message_title", fallback: "Напишите нам!")
  /// Добавляйтесь в Telegram
  internal static let contactPhoneTitle = L10nContact.tr("Contact", "contact_phone_title", fallback: "Добавляйтесь в Telegram")
}
// swiftlint:enable explicit_type_interface function_parameter_count identifier_name line_length
// swiftlint:enable nesting type_body_length type_name vertical_whitespace_opening_braces

// MARK: - Implementation Details

extension L10nContact {
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
