/**
 * Custom font family for H
 * @type {string}
 */
const fontFamily = [
    'Ubuntu',
    'Roboto',
    'sans-serif',
].join(',')

export const typography = {
    fontSize: 14,
    h1: {
        fontWeight: '400',
        textTransform: "none",
        fontFamily: fontFamily,
    },
    h2: {
        fontSize: 70,
        fontWeight: '500',
        textTransform: "none",
        fontFamily: fontFamily,
    },
    h3: {
        fontSize: 46,
        fontWeight: '500',
        textTransform: "none",
        fontFamily: fontFamily,
    },
    h4: {
        fontSize: 30,
        fontWeight: '500',
        textTransform: "none",
        fontFamily: fontFamily,
    },
    h5: {
        fontSize: 18,
        fontWeight: '500',
        textTransform: "none",
        fontFamily: fontFamily,
    },
    h6: {
        fontSize: 13,
        fontWeight: '600',
        textTransform: "none",
        fontFamily: fontFamily,
    },
    body1: {
        fontSize: 16,
        fontFamily: fontFamily,
    },
    body2: {
        fontSize: 14,
        fontWeight: '100',
        fontFamily: fontFamily,
    },
    button: {
        whiteSpace: "nowrap",
        fontFamily: fontFamily,
    },
    caption: {
        fontSize: 12,
        color: '#838383',
        fontFamily: fontFamily,
    },
    overline: {}
}