import * as React from 'react';
import {
    Avatar, Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Grid,
    Stack,
    Tab,
    useMediaQuery,
    useTheme
} from "@mui/material";
import Typography from "@mui/material/Typography";
import {ArrowForwardOutlined, SearchOutlined} from "@mui/icons-material";
import {ConstantImages, ConstantStorage, HttpClient, NavigateContext, useLocalStorage} from "../../../base";
import {TabsBlackStyled} from "../../../components/tabs/styled/TabsBlackStyled";
import {ValueType} from "../../../base/route/ValueType";
import {GenericIcon} from "../../../components";
import {useContext, useEffect} from "react";

const bgs = [
    ConstantImages.home.cat_bg_1,
    ConstantImages.home.cat_bg_2,
    ConstantImages.home.cat_bg_3,
    ConstantImages.home.cat_bg_5,
    ConstantImages.home.cat_bg_6,
]

export function CategoriesBlockHomePage() {

    const theme = useTheme()
    const isMD = useMediaQuery(theme.breakpoints.down('md'));
    const isXS = useMediaQuery(theme.breakpoints.down('xs'));
    const {route, routes} = useContext(NavigateContext)

    const categoriesCache = useLocalStorage(ConstantStorage.categories, ValueType.array, []);
    const collectionsCache = useLocalStorage(ConstantStorage.collections, ValueType.array, []);

    const [value, setValue] = React.useState(collectionsCache.length ? collectionsCache[0].id : 0);
    const [counts, setCounts] = React.useState([]);

    const filters = []
    const categories = []

    useEffect(() => {

        const fetchData = async () => {
            const responses = []
            for (let i = 0; i < categoriesCache.length; i++) {
                const response = await HttpClient.get.productsCountPublished(
                    [categoriesCache[i].id],
                    [value]
                )
                responses.push({
                    id: categoriesCache[i].id,
                    count: response.count
                })
            }
            setCounts(responses)
        };

        fetchData().catch(console.error);

    }, [categoriesCache, value])

    collectionsCache.slice(0, 6).forEach((collection) => {
        filters.push((
            <Tab
                key={`filter-item-${collection.id}`}
                value={collection.id}
                label={(
                    <Stack
                        direction={'row'}
                        spacing={1}
                        alignItems={'center'}
                    >
                        <GenericIcon iconName={collection.icon} sx={{width: 20, height: 20}}/>
                        <Typography variant={'body1'}>{collection.name}</Typography>
                    </Stack>
                )}
            />
        ));
    })

    categoriesCache.forEach((category) => {
        categories.push((
            <Grid
                key={`category-item-${category.id}`}
                item
                xl={4} lg={4} md={6} sm={12} xs={12} min={12} null={12}>
                <Card variant="outlined" sx={{
                    borderRadius: 2,
                    p: isXS ? 1 : 2,
                    border: 'none',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:after': {
                        content: '""',
                        position: 'absolute',
                        backgroundImage: `url(${bgs[category.id % 6]})`,
                        width: 250,
                        height: 250,
                        bottom: 0,
                        right: 0,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }
                }}>
                    <CardHeader
                        avatar={
                            <Avatar
                                src={category.image}
                                sx={{
                                    bgcolor: '#EFF6FF',
                                    width: isMD ? 60 : 80,
                                    height: isMD ? 60 : 80,
                                }}
                                aria-label=""
                            />
                        }
                        action={
                            <Typography
                                component={'div'}
                                variant="caption"
                                sx={{
                                    paddingY: 4,
                                    paddingRight: 1
                                }}
                            >
                                Найдено - {counts.find((it) => it.id === category.id)?.count ?? '∞'}
                            </Typography>
                        }
                    />
                    <CardContent>
                        <Stack
                            spacing={1}
                            sx={{
                                paddingTop: isMD ? 1 : 4,
                                paddingBottom: isMD ? 3 : 6
                            }}
                        >
                            <Typography
                                variant={isMD ? 'body2' : 'h6'}
                                sx={{
                                    color: '#707F95',
                                    fontWeight: 100
                                }}
                            >
                                {category.name}
                            </Typography>

                            <Typography
                                variant={isMD ? 'h5' : 'h4'}
                                sx={{
                                    backgroundColor: '#ffffffa8',
                                    position: 'relative',
                                    zIndex: 1,
                                    width: 'fit-content',
                                    p: 1,
                                    left: -8,
                                    borderRadius: 1
                                }}
                            >
                                {category.desc}
                            </Typography>
                        </Stack>

                    </CardContent>
                    <CardActions>
                        <Button
                            size={'small'}
                            color={'black'}
                            endIcon={<ArrowForwardOutlined/>}
                            sx={{
                                zIndex: 1,
                                position: 'relative',
                                textTransform: 'none',
                                paddingX: '10px',
                                marginLeft: '-1px'
                            }}
                            onClick={() => {
                                route.toLocation(routes.exploringCollection, `${category.key}:${collectionsCache.find((it) => it.id === value).key}`)
                            }}
                        >
                            Посмотреть
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        ));
    })

    return (
        <Stack
            sx={{
                backgroundColor: '#F6F7F9',
                p: isMD ? isXS ? 2 : 3 : 10,
                position: 'relative',
                borderRadius: 2,
            }}
        >
            <Stack
                alignItems={'center'}
                spacing={isMD ? isXS ? 2 : 3 : 8}
                sx={{
                    paddingBottom: isMD ? 4 : 6
                }}
            >
                <Typography variant={isMD ? isXS ? 'h5' : 'h4' : 'h3'} sx={{
                    pt: isXS ? 2 : 0,
                    pb: isXS ? 1 : 0
                }}>
                    Начать поиск
                </Typography>

                {filters.length > 0 ? (
                    <TabsBlackStyled
                        value={value}
                        onChange={(event, value) => {
                            setValue(value)
                        }}
                        sx={{}}
                    >
                        {filters}
                    </TabsBlackStyled>
                ) : null}
            </Stack>

            {categories.length ? (
                <Grid container spacing={isMD ? isXS ? 2 : 3 : 4}>
                    {categories}
                </Grid>
            ) : (
                <Box sx={{textAlign: 'center'}}>
                    <Button
                        variant={'outlined'}
                        color={'secondary'}
                        size={'large'}
                        endIcon={<SearchOutlined/>}
                        onClick={() => {
                            route.toLocation(routes.exploring)
                        }}
                    >
                        Исследовать
                    </Button>
                </Box>
            )}


        </Stack>
    );
}

CategoriesBlockHomePage.propTypes = {};