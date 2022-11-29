import * as React from 'react';
import {useContext, useState} from 'react';
import {ThemeProvider} from "@mui/material";
import {AppTheme} from "./theme/AppTheme";
import {AppCache, ConstantStorage, HttpClient, NavigateContext, useEffectTimout} from "./base";
import {SplashPage} from "./pages/splash/SplashPage";
import {useLocation} from "react-router-dom";

function App() {
    const {route} = useContext(NavigateContext)
    const location = useLocation()

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // request data
    useEffectTimout('App', async () => {
        try {
            const categories = await HttpClient.get.categoriesPublished()
            const collections = await HttpClient.get.collectionsPublished()

            AppCache.arraySet(ConstantStorage.categories, categories.toArray().mapToCategories())
            AppCache.arraySet(ConstantStorage.collections, collections.toArray().mapToCollections())

            setLoading(false)
        } catch (e) {
            console.log(e)

            setError(e.message)
        }
    }, [location], () => {
    }, 500, "App")

    return (
        <ThemeProvider theme={AppTheme}>
            {loading || error ? (
                <SplashPage error={error}/>
            ) : (
                route.render()
            )}
        </ThemeProvider>
    );
}

export default App;
