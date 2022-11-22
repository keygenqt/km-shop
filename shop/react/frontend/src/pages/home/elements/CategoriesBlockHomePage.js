import * as React from 'react';
import {Avatar, Button, Card, CardActions, CardContent, CardHeader, Grid, Stack, Tab} from "@mui/material";
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

export function CategoriesBlockHomePage() {

    const [value, setValue] = React.useState(0);

    return (
        <Stack
            sx={{
                backgroundColor: '#F6F7F9',
                p: 10,
                position: 'relative',
                borderRadius: 4,
            }}
        >
            <Stack
                alignItems={'center'}
                spacing={8}
                sx={{
                    paddingBottom: 6
                }}
            >
                <Typography variant={'h3'}>
                    Start exploring
                </Typography>

                <TabsBlackStyled
                    value={value}
                    onChange={(event, value) => {
                        setValue(value)
                    }}
                    sx={{}}
                >
                    <Tab label={(
                        <Stack
                            direction={'row'}
                            spacing={1}
                            alignItems={'center'}
                        >
                            <BusinessOutlined sx={{width: 20, height: 20}}/>
                            <Typography variant={'body1'}>School</Typography>
                        </Stack>
                    )}/>

                    <Tab label={(
                        <Stack
                            direction={'row'}
                            spacing={1}
                            alignItems={'center'}
                        >
                            <Brightness5Outlined sx={{width: 20, height: 20}}/>
                            <Typography variant={'body1'}>Walk</Typography>
                        </Stack>
                    )}/>

                    <Tab label={(
                        <Stack
                            direction={'row'}
                            spacing={1}
                            alignItems={'center'}
                        >
                            <Diversity3Outlined sx={{width: 20, height: 20}}/>
                            <Typography variant={'body1'}>Birthday</Typography>
                        </Stack>
                    )}/>

                    <Tab label={(
                        <Stack
                            direction={'row'}
                            spacing={1}
                            alignItems={'center'}
                        >
                            <CelebrationOutlined sx={{width: 20, height: 20}}/>
                            <Typography variant={'body1'}>Holiday</Typography>
                        </Stack>
                    )}/>

                    <Tab label={(
                        <Stack
                            direction={'row'}
                            spacing={1}
                            alignItems={'center'}
                        >
                            <ForestOutlined sx={{width: 20, height: 20}}/>
                            <Typography variant={'body1'}>New Year</Typography>
                        </Stack>
                    )}/>

                </TabsBlackStyled>
            </Stack>

            <Grid container spacing={4}>
                <Grid item xl={4} lg={4} md={6} sm={12} xs={12} min={12} null={12}>
                    <Card variant="outlined" sx={{
                        borderRadius: 4,
                        p: 2,
                        border: 'none',
                        position: 'relative',
                        overflow: 'hidden',
                        '&:after': {
                            content: '""',
                            position: 'absolute',
                            backgroundImage: `url(${ConstantImages.home.cat_bg_1})`,
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
                                    src={ConstantImages.home.cat_1}
                                    sx={{
                                        bgcolor: '#EFF6FF',
                                        width: 80,
                                        height: 80,
                                    }}
                                    aria-label=""
                                >
                                    B
                                </Avatar>
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
                                    143 products
                                </Typography>
                            }
                        />
                        <CardContent>
                            <Stack
                                spacing={1}
                                sx={{
                                    paddingTop: 4,
                                    paddingBottom: 6
                                }}
                            >
                                <Typography
                                    variant={'h6'}
                                    sx={{
                                        color: '#707F95',
                                        fontWeight: 100
                                    }}
                                >
                                    Bows
                                </Typography>

                                <Typography
                                    variant="h4"
                                >
                                    For loved ones
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
                <Grid item xl={4} lg={4} md={6} sm={12} xs={12} min={12} null={12}>
                    <Card variant="outlined" sx={{
                        borderRadius: 4,
                        p: 2,
                        border: 'none',
                        position: 'relative',
                        overflow: 'hidden',
                        '&:after': {
                            content: '""',
                            position: 'absolute',
                            backgroundImage: `url(${ConstantImages.home.cat_bg_2})`,
                            width: 290,
                            height: 290,
                            bottom: 0,
                            right: 0,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        }
                    }}>
                        <CardHeader
                            avatar={
                                <Avatar
                                    src={ConstantImages.home.cat_2}
                                    sx={{
                                        bgcolor: '#EFF6FF',
                                        width: 80,
                                        height: 80,
                                    }}
                                    aria-label=""
                                >
                                    B
                                </Avatar>
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
                                    312 products
                                </Typography>
                            }
                        />
                        <CardContent>
                            <Stack
                                spacing={1}
                                sx={{
                                    paddingTop: 4,
                                    paddingBottom: 6
                                }}
                            >
                                <Typography
                                    variant={'h6'}
                                    sx={{
                                        color: '#707F95',
                                        fontWeight: 100
                                    }}
                                >
                                    Headbands
                                </Typography>

                                <Typography
                                    variant="h4"
                                >
                                    Stylish beauty
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
                <Grid item xl={4} lg={4} md={6} sm={12} xs={12} min={12} null={12}>
                    <Card variant="outlined" sx={{
                        borderRadius: 4,
                        p: 2,
                        border: 'none',
                        position: 'relative',
                        overflow: 'hidden',
                        '&:after': {
                            content: '""',
                            position: 'absolute',
                            backgroundImage: `url(${ConstantImages.home.cat_bg_3})`,
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
                                    src={ConstantImages.home.cat_3}
                                    sx={{
                                        bgcolor: '#EFF6FF',
                                        width: 80,
                                        height: 80,
                                    }}
                                    aria-label=""
                                >
                                    B
                                </Avatar>
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
                                    34 products
                                </Typography>
                            }
                        />
                        <CardContent>
                            <Stack
                                spacing={1}
                                sx={{
                                    paddingTop: 4,
                                    paddingBottom: 6
                                }}
                            >
                                <Typography
                                    variant={'h6'}
                                    sx={{
                                        color: '#707F95',
                                        fontWeight: 100
                                    }}
                                >
                                    Sets
                                </Typography>

                                <Typography
                                    variant="h4"
                                >
                                    Sets for every day
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
            </Grid>
        </Stack>
    );
}

CategoriesBlockHomePage.propTypes = {};