/**
 * Route validate
 */
export const ValueType = {

    string: 'string',
    number: 'number',
    integer: 'integer',
    float: 'float',
    bool: 'boolean',

    validate: (type, value) => {
        switch (type) {
            case ValueType.string:
                return ValueType.validateString(value)
            case ValueType.number:
                return ValueType.validateNumber(value)
            case ValueType.integer:
                return ValueType.validateInteger(value)
            case ValueType.float:
                return ValueType.validateFloat(value)
            case ValueType.bool:
                return ValueType.validateBool(value)
            default:
                return true
        }
    },

    validateString: (value) => {
        return true
    },

    validateNumber: (value) => {
        return ValueType.validateInteger(value) || ValueType.validateFloat(value)
    },

    validateInteger: (value) => {
        const regexPath = /\d+/ig;
        return value.replace(regexPath, '').length === 0
    },

    validateFloat: (value) => {
        const regexPath = /\d+.\d+/ig;
        return value.replace(regexPath, '').length === 0
    },

    validateBool: (value) => {
        return value === 'true' || value === 'false'
    }
}