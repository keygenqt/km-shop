import {AppConf} from "../../conf/AppConf";

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

    /**
     * Check is image
     */
    isImage: (fileMime) => {
        return fileMime !== null
            && (fileMime.includes('png') || fileMime.includes('jpg') | fileMime.includes('jpeg'))
    },

    /**
     * Create file link
     */
    getFileUrl: (fileName) => {
        return `${AppConf.apiPath}/api/uploads/${fileName}`
    },

    /**
     * Create file link
     */
    priceFormat: (price) => {
        return new Intl
            .NumberFormat('en-US', {style: 'currency', currency: 'RUB'})
            .format(price)
            .replace("RUB", "")
    },
};