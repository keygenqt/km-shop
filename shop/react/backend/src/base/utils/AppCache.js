import {MD5} from "crypto-js";

/**
 * App for work with cache
 */
export const AppCache = {

    ////////////////////////////
    // Array

    arrayGet: function (key, defaultValue = []) {
        const string = localStorage.getItem(key)
        if (string) return JSON.parse(string)
        return defaultValue
    },

    arraySet: function (key, value) {
        AppCache._setItem(key, JSON.stringify(value))
    },

    ////////////////////////////
    // Object

    objectGet: function (key, defaultValue = null) {
        const string = localStorage.getItem(key)
        if (string) return JSON.parse(string)
        return defaultValue
    },

    objectSet: function (key, value) {
        AppCache._setItem(key, JSON.stringify(value))
    },

    ////////////////////////////
    // Int

    intGet: function (key, defaultValue = 0) {
        return parseInt(localStorage.getItem(key)) ?? defaultValue
    },

    intSet: function (key, value) {
        AppCache._setItem(key, value)
    },

    ////////////////////////////
    // String

    stringGet: function (key, defaultValue = '') {
        return localStorage.getItem(key) ?? defaultValue
    },

    stringSet: function (key, value) {
        AppCache._setItem(key, value)
    },

    ////////////////////////////
    // Boolean

    booleanGet: function (key, defaultValue = false) {
        return localStorage.getItem(key) === null ? defaultValue : localStorage.getItem(key) === 'true'
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
    },

    ////////////////////////////
    // Private
    _setItem: function (key, value) {
        localStorage.setItem(key, `${value}`)
        const el = document.querySelector('#root');
        const hash = MD5(AppCache._allStorage().toString())
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