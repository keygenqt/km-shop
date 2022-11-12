/**
 * App helper functions
 */
export const AppHelper = {

    /**
     * Find error array validate
     */
    findError: function (field, validate) {
        if (!validate) {
            return null
        }
        return validate.find(el => el['filed'] === field)?.errors.join(', ') ?? null
    },

    /**
     * Check if all object value is null
     */
    isEmpty: function (obj) {
        let result = true
        Object.keys(obj).forEach(key => {
            if (obj[key] !== null && obj[key] !== undefined) {
                result = false
            }
        });
        return result
    },

    /**
     * Check if all object value is not null
     */
    isNotEmpty: function (obj) {
        return !AppHelper.isEmpty(obj)
    },

};