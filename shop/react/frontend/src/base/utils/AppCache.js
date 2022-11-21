import {MD5} from "crypto-js";
import LZString from "lz-string"

/**
 * App for work with cache
 */
export const AppCache = {

    ////////////////////////////
    // Array

    arrayGet: function (key, defaultValue = []) {
        const string = AppCache._getItem(key)
        if (string) return JSON.parse(string)
        return defaultValue
    },

    arraySet: function (key, value) {
        AppCache._setItem(key, JSON.stringify(value))
    },

    ////////////////////////////
    // Object

    objectGet: function (key, defaultValue = null) {
        const string = AppCache._getItem(key)
        if (string) return JSON.parse(string)
        return defaultValue
    },

    objectSet: function (key, value) {
        AppCache._setItem(key, JSON.stringify(value))
    },

    ////////////////////////////
    // Int

    intGet: function (key, defaultValue = 0) {
        const string = AppCache._getItem(key)
        if (string) return parseInt(string)
        return defaultValue
    },

    intSet: function (key, value) {
        AppCache._setItem(key, value)
    },

    ////////////////////////////
    // String

    stringGet: function (key, defaultValue = '') {
        const string = AppCache._getItem(key)
        if (string) return string
        return defaultValue
    },

    stringSet: function (key, value) {
        AppCache._setItem(key, value)
    },

    ////////////////////////////
    // Boolean

    booleanGet: function (key, defaultValue = false) {
        const string = AppCache._getItem(key)
        if (string) return string === 'true'
        return defaultValue
    },

    booleanSet: function (key, value) {
        AppCache._setItem(key, value)
    },

    ////////////////////////////
    // Common

    clearByKey: function (key) {
        AppCache._setItem(key, null)
        localStorage.removeItem(key)
    },

    clearAll: function () {
        localStorage.clear()
        // update root
        document.querySelector('#root').dataset.cache = ""
    },

    ////////////////////////////
    // Private
    _getItem: function (key) {
        const val = localStorage.getItem(MD5(key))
        return val ? LZString.decompress(val) : null
    },

    _setItem: function (key, value) {

        // get values
        const valueKey = MD5(key)
        const valueLz = LZString.compress(value)

        // save value
        localStorage.setItem(valueKey, valueLz)

        // update root
        const el = document.querySelector('#root');
        const cont = AppCache._allStorage().toString()
        const hash = cont.slice(-10) + cont.slice(0, 10) + MD5(cont.length + Object.keys(localStorage))
        if (el.dataset.cache !== hash) {
            el.dataset.cache = hash
        }
    },

    _allStorage: function () {
        let values = [],
            keys = Object.keys(localStorage),
            i = keys.length;

        while (i--) {
            values.push(localStorage.getItem(keys[i]));
        }

        return values;
    }
};