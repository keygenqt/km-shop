import * as React from 'react';
import {useContext, useEffect} from 'react';
import {Box, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import {useParams} from "react-router";
import {
    AppCache,
    ConstantLottie,
    ConstantStorage,
    HttpClient,
    NavigateContext,
    Requests,
    useEffectTimout,
    useLocalStorage
} from "../../base";
import {SnackbarAddToCart} from "../../components/alerts/SnackbarAddToCart";
import {ValueType} from "../../base/route/ValueType";
import {FiltersBlock} from "./elements/FiltersBlock";
import {ProductsBlock} from "./elements/ProductsBlock";
import {BaseLayout} from "../../components";
import Lottie from "lottie-react";

export function ExploringPage() {

    let {filter} = useParams();

    const categoriesCache = useLocalStorage(ConstantStorage.categories, ValueType.array, []);
    const collectionsCache = useLocalStorage(ConstantStorage.collections, ValueType.array, []);

    const filterCat = filter && filter.includes(':') ? filter.split(':')[0] : null
    const filterCollect = filter && filter.includes(':') ? filter.split(':')[1] : null

    let category = filterCat ? categoriesCache.find((it) => it.key === filterCat) : null
    let collection = filterCollect ? collectionsCache.find((it) => it.key === filterCollect) : null

    if (!category) {
        category = filter ? categoriesCache.find((it) => it.key === filter) : null
    }

    if (!collection) {
        collection = filter ? collectionsCache.find((it) => it.key === filter) : null
    }

    const theme = useTheme()
    const isSM = useMediaQuery(theme.breakpoints.down('sm'));
    const {route} = useContext(NavigateContext)

    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [products, setProducts] = React.useState(null);

    const [filterPage, setFilterPage] = React.useState(1);
    const [filterSort, setFilterSort] = React.useState(Requests.OrderProduct.NEWEST);
    const [filterRange, setFilterRange] = React.useState([0, 999999999]);
    const [filterCategories, setFilterCategories] = React.useState(
        category ? [category.id] : categoriesCache.map((it) => it.id)
    );
    const [filterCollections, setFilterCollections] = React.useState(
        collection ? [collection.id] : []
    );

    const [pages, setPages] = React.useState(0);
    const [rangeCommitted, setRangeCommitted] = React.useState(false);

    const handleChange = (fun) => {
        setFilterPage(1)
        fun()
        route.scrollToTop()
    }

    useEffect(() => {
        setFilterPage(1)
        setFilterCategories(category ? [category.id] :
            AppCache.arrayGet(ConstantStorage.categories, []).map((it) => it.id))
        setFilterCollections(collection ? [collection.id] : [])
    }, [category, collection, filter])

    useEffectTimout('ExploringPage', async () => {
        if (!rangeCommitted) {
            try {
                const response = await HttpClient.get.productsPublished(
                    filterPage,
                    filterSort.name,
                    filterRange,
                    filterCategories,
                    filterCollections
                )
                setPages(response.pages)
                setProducts(response.products.mapToProducts())
                setLoading(false)
            } catch (e) {
                console.error(e)
                setError(e.message)
                setLoading(false)
            }
        }
    }, [filterPage, filterSort, rangeCommitted, filterCategories, filterCollections], () => {
        if (!rangeCommitted) {
            setError(null)
            setLoading(true)
        }
    })

    return (
        (error ? (
            <BaseLayout middle>
                <Box sx={{
                    width: 192,
                    height: 192,
                    margin: 'auto'
                }}>
                    <Lottie animationData={ConstantLottie.error500} style={{
                        width: '278px',
                        position: 'relative',
                        top: -57,
                        left: -33
                    }}/>
                </Box>
            </BaseLayout>
        ) : (
            <BaseLayout>
                <>
                    <SnackbarAddToCart/>
                    <Stack spacing={isSM ? 4 : 6}>

                        <Stack spacing={2}>
                            <Typography variant={isSM ? 'h4' : 'h3'}>
                                {filter ? (
                                    category ? `Категория '${category.name}' ` : `Коллекция '${collection.name}'`
                                ) : (
                                    'Исследовать'
                                )}
                            </Typography>

                            <Typography variant={isSM ? 'h6' : 'h5'} sx={{
                                fontWeight: 100
                            }}>
                                Здесь вы можете выбрать свой стиль на каждый день.
                            </Typography>
                        </Stack>

                        <Stack
                            direction={isSM ? 'column' : 'row'}
                            spacing={isSM ? (products && products.length ? 2 : 6) : 3}
                        >
                            <FiltersBlock
                                sort={filterSort}
                                range={filterRange}
                                categories={filterCategories}
                                collections={filterCollections}
                                onChangeSort={(sort) => handleChange(() => {
                                    setFilterSort(sort)
                                })}
                                onChangeRangeCommitted={() => handleChange(() => {
                                    setRangeCommitted(false)
                                })}
                                onChangeRange={(range) => {
                                    setRangeCommitted(true)
                                    setFilterRange(range)
                                }}
                                onChangeCategories={(ids) => handleChange(() => {
                                    setFilterCategories(ids)
                                })}
                                onChangeCollections={(ids) => handleChange(() => {
                                    setFilterCollections(ids)
                                })}
                            />

                            <ProductsBlock
                                page={filterPage}
                                pages={pages}
                                rows={products}
                                loading={loading}
                                onChangePage={(page) => setFilterPage(page)}
                            />
                        </Stack>
                    </Stack>
                </>
            </BaseLayout>
        ))
    );
}

ExploringPage.propTypes = {};