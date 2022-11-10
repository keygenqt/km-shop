export const typography = {
    fontSize: 14,
    h1: {
        fontSize: 60,
        fontWeight: '700',
        textTransform: "none",
        fontFamily: [
            '"Albert Sans"',
            'Roboto',
            'sans-serif',
        ].join(','),
        '@media (max-width: 700px)': {
            fontSize: 105,
        },
        '@media (max-width: 400px)': {
            fontSize: 80,
        },
    },
    h2: {
        fontSize: 36,
        fontWeight: '400',
        textTransform: "none",
        fontFamily: [
            '"Albert Sans"',
            'Roboto',
            'sans-serif',
        ].join(','),
        '@media (max-width: 700px)': {
            fontSize: 19,
        },
    },
    h3: {
        fontSize: 24,
        textTransform: "none",
        fontFamily: [
            '"Albert Sans"',
            'Roboto',
            'sans-serif',
        ].join(','),
    },
    h4: {
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: "uppercase",
        fontFamily: [
            '"Albert Sans"',
            'Roboto',
            'sans-serif',
        ].join(','),
    },
    h5: {
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: [
            '"Albert Sans"',
            'Roboto',
            'sans-serif',
        ].join(','),
    },
    h6: {
        fontWeight: '400',
    },
    subtitle1: {
        fontSize: 14,
        '@media (max-width: 700px)': {
            fontSize: 14,
        },
    },
    subtitle2: {},
    text1: {
        fontSize: 20,
    },
    text2: {
        fontSize: 18,
    },
    text3: {
        fontSize: 16,
    },
    textCard: {
        lineHeight: '22px',
        fontSize: 16,
        fontFamily: [
            '"Albert Sans"',
            'Roboto',
            'sans-serif',
        ].join(','),
    },
    textBlog: {
        whiteSpace: 'pre-line',
        lineHeight: '25px',
        fontSize: 18,
        fontFamily: [
            '"Albert Sans"',
            'Roboto',
            'sans-serif',
        ].join(','),
    },
    button: {
        whiteSpace: "nowrap"
    },
    caption: {},
    overline: {}
}