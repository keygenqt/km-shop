import {createTheme} from '@mui/material/styles';
import {palette} from "./impl/palette.js";
import {typography} from "./impl/typography.js";

export const AppTheme = createTheme({
    breakpoints: {
        values: {
            null: 0,
            min: 320,
            xs: 420,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
        },
    },
    palette: palette(),
    typography: typography,
});