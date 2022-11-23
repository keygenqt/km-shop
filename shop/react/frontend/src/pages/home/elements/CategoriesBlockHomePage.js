import * as React from 'react';
import {
    Avatar,
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
import {
    ArrowForwardOutlined,
    Brightness5Outlined,
    BusinessOutlined,
    CelebrationOutlined,
    Diversity3Outlined,
    ForestOutlined
} from "@mui/icons-material";
import {ConstantImages} from "../../../base";
import {TabsBlackStyled} from "../../../components/tabs/styled/TabsBlackStyled";

const filtersData = [
    {
        icon: BusinessOutlined,
        name: 'School',
    },
    {
        icon: Brightness5Outlined,
        name: 'Walk',
    },
    {
        icon: Diversity3Outlined,
        name: 'Birthday',
    },
    {
        icon: CelebrationOutlined,
        name: 'Holiday',
    },
    {
        icon: ForestOutlined,
        name: 'New Year',
    },
]

const categoriesData = [
    {
        icon: ConstantImages.home.cat_1,
        bg: ConstantImages.home.cat_bg_1,
        products: 143,
        title: 'Bows',
        subtitle: 'For loved ones',
    },
    {
        icon: ConstantImages.home.cat_2,
        bg: ConstantImages.home.cat_bg_2,
        products: 987,
        title: 'Headbands',
        subtitle: 'Stylish beauty',
    },
    {
        icon: ConstantImages.home.cat_3,
        bg: ConstantImages.home.cat_bg_3,
        products: 56,
        title: 'Sets',
        subtitle: 'Sets for every day',
    }
]

export function CategoriesBlockHomePage() {

    const theme = useTheme()
    const isMD = useMediaQuery(theme.breakpoints.down('md'));

    const [value, setValue] = React.useState(0);

    const filters = []
    const categories = []

    filtersData.forEach((it, index) => {
        const Icon = it.icon
        filters.push((
            <Tab
                key={`filter-item-${index}`}
                label={(
                    <Stack
                        direction={'row'}
                        spacing={1}
                        alignItems={'center'}
                    >
                        <Icon sx={{width: 20, height: 20}}/>
                        <Typography variant={'body1'}>{it.name}</Typography>
                    </Stack>
                )}
            />
        ));
    })

    categoriesData.forEach((it, index) => {
        categories.push((
            <Grid
                key={`category-item-${index}`}
                item
                xl={4} lg={4} md={6} sm={12} xs={12} min={12} null={12}>
                <Card variant="outlined" sx={{
                    borderRadius: 4,
                    p: 2,
                    border: 'none',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:after': {
                        content: '""',
                        position: 'absolute',
                        backgroundImage: `url(${it.bg})`,
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
                                src={it.icon}
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
                                {it.products} products
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
                                {it.title}
                            </Typography>

                            <Typography
                                variant={isMD ? 'h5' : 'h4'}
                            >
                                {it.subtitle}
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
                        >
                            See Collection
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
                p: isMD ? 3 : 10,
                position: 'relative',
                borderRadius: 4,
            }}
        >
            <Stack
                alignItems={'center'}
                spacing={isMD ? 3 : 8}
                sx={{
                    paddingBottom: isMD ? 4 : 6
                }}
            >
                <Typography variant={isMD ? 'h4' : 'h3'}>
                    Start exploring
                </Typography>

                <TabsBlackStyled
                    value={value}
                    onChange={(event, value) => {
                        setValue(value)
                    }}
                    sx={{}}
                >
                    {filters}
                </TabsBlackStyled>
            </Stack>

            <Grid container spacing={4}>
                {categories}
            </Grid>
        </Stack>
    );
}

CategoriesBlockHomePage.propTypes = {};