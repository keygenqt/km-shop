/**
 * Map class KMM to object
 */
import shared from "shared";

/**
 * Export class from module
 */
export const ResponseException = shared.com.keygenqt.shop.exception.ResponseException
export const ValidateViolation = shared.com.keygenqt.shop.exception.ValidateViolation

/**
 * Map [ResponseException] to object
 */
ResponseException.prototype.mapToException = function () {
    return {
        code: this.code,
        message: this.message,
        validate: this.validate === null ? [] : this.validate.mapToValidateViolations(),
    }
};

/**
 * Map [ValidateViolation] to object
 */
ValidateViolation.prototype.mapToValidateViolation = function () {
    return {
        filed: this.filed,
        errors: this.errors
    }
};

/**
 * Ma [ValidateViolation] array to objects array
 */
// eslint-disable-next-line no-extend-native
Array.prototype.mapToValidateViolations = function () {
    return this.map((it) => it.mapToValidateViolation())
};