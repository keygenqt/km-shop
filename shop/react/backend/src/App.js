import * as React from 'react';
import {useContext} from 'react';
import {ThemeProvider} from "@mui/material";
import {AppTheme} from "./theme/AppTheme";
import {NavigateContext} from "./base";

function App() {
    const {route} = useContext(NavigateContext)

    console.log('yes')

    return (
        <ThemeProvider theme={AppTheme}>
            {route.render()}
        </ThemeProvider>
    );
}

export default App;
