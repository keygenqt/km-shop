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
        fontWeight: '400',
        textTransform: "none",
        fontFamily: fontFamily,
    },
    h4: {
        fontSize: 24,
        fontWeight: '400',
        textTransform: "none",
        fontFamily: fontFamily,
    },
    h5: {
        fontSize: 18,
        fontWeight: '400',
        textTransform: "none",
        fontFamily: fontFamily,
    },
    h6: {
        fontSize: 14,
        fontWeight: '600',
        textTransform: "none",
        fontFamily: fontFamily,
    },
    body1: {
        fontFamily: fontFamily,
    },
    body2: {
        fontWeight: '100',
        fontFamily: fontFamily,
    },
    button: {
        whiteSpace: "nowrap",
        fontFamily: fontFamily,
    },
    caption: {
        fontSize: 12,
        color: '#676767',
        fontFamily: fontFamily,
    },
    overline: {}
}