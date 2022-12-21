// swiftlint:disable all
// Generated using SwiftGen — https://github.com/SwiftGen/SwiftGen

import Foundation

// swiftlint:disable superfluous_disable_command file_length implicit_return prefer_self_in_static_references

// MARK: - Strings

// swiftlint:disable explicit_type_interface function_parameter_count identifier_name line_length
// swiftlint:disable nesting type_body_length type_name vertical_whitespace_opening_braces
internal enum L10nContactForm {
  /// Отправить
  internal static let contactFormBtnSubmit = L10nContactForm.tr("ContactForm", "contact_form_btn_submit", fallback: "Отправить")
  /// Email
  internal static let contactFormFieldEmail = L10nContactForm.tr("ContactForm", "contact_form_field_email", fallback: "Email")
  /// Имя
  internal static let contactFormFieldFname = L10nContactForm.tr("ContactForm", "contact_form_field_fname", fallback: "Имя")
  /// Фамилия (по желанию)
  internal static let contactFormFieldLname = L10nContactForm.tr("ContactForm", "contact_form_field_lname", fallback: "Фамилия (по желанию)")
  /// Сообщение
  internal static let contactFormFieldMessage = L10nContactForm.tr("ContactForm", "contact_form_field_message", fallback: "Сообщение")
  /// Телефон (по желанию)
  internal static let contactFormFieldPhone = L10nContactForm.tr("ContactForm", "contact_form_field_phone", fallback: "Телефон (по желанию)")
  /// Мы обязательно прочтем и ответим, если будет необходимость
  internal static let contactFormInfo = L10nContactForm.tr("ContactForm", "contact_form_info", fallback: "Мы обязательно прочтем и ответим, если будет необходимость")
  /// Ваше сообщение отправлено. Спасибо!
  internal static let contactFormSuccess = L10nContactForm.tr("ContactForm", "contact_form_success", fallback: "Ваше сообщение отправлено. Спасибо!")
  /// ContactForm.strings
  ///   YouShop
  /// 
  ///   Created by Виталий Зарубин on 21.12.2022.
  ///   Copyright © 2022 orgName. All rights reserved.
  internal static let contactFormTitle = L10nContactForm.tr("ContactForm", "contact_form_title", fallback: "Сообщение")
  /// Напишите нам сообщение
  internal static let contactFormTitle2 = L10nContactForm.tr("ContactForm", "contact_form_title2", fallback: "Напишите нам сообщение")
}
// swiftlint:enable explicit_type_interface function_parameter_count identifier_name line_length
// swiftlint:enable nesting type_body_length type_name vertical_whitespace_opening_braces

// MARK: - Implementation Details

extension L10nContactForm {
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
