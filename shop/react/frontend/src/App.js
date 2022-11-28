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
    useEffectTimout(async () => {
        try {
            const categories = await HttpClient.get.categoriesPublished()
            const collections = await HttpClient.get.collectionsPublished()

            // save categories
            AppCache.arraySet(ConstantStorage.categories, categories.toArray().map((it) => ({
                id: it.id,
                key: it.key,
                image: it.image,
                name: it.name,
                desc: it.desc
            })))

            // save collections
            AppCache.arraySet(ConstantStorage.collections, collections.toArray().map((it) => ({
                id: it.id,
                key: it.key,
                icon: it.icon,
                name: it.name,
                desc: it.desc
            })))

            setLoading(false)
        } catch (e) {
            setError(e.message)
        }
    }, [location])

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
