import {createTheme} from '@mui/material/styles';
import {palette} from "./impl/palette.js";
import {typography} from "./impl/typography.js";

export const AppTheme = createTheme({
    breakpoints: {
        values: {
            min: 350,
            xs: 420,
            xs500: 500,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
    palette: palette(),
    typography: typography,
});