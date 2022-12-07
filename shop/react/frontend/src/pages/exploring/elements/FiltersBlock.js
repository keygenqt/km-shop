import * as React from "react";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Alert,
    Box,
    Checkbox,
    Chip,
    CircularProgress,
    FormControlLabel,
    FormGroup,
    Radio,
    RadioGroup,
    Slider,
    Stack,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material";
import {
    CategoryOutlined,
    ExpandMoreOutlined,
    PriceChangeOutlined,
    SortOutlined,
    StyleOutlined
} from "@mui/icons-material";
import {AppHelper, ConstantStorage, HttpClient, Requests, useEffectTimout, useLocalStorage} from "../../../base";
import {ValueType} from "../../../base/route/ValueType";
import PropTypes from "prop-types";
import {useEffect, useLayoutEffect, useRef} from "react";

export function FiltersBlock(props) {

    const {
        sort,
        onChangeSort,
        range,
        onChangeRangeCommitted,
        onChangeRange,
        categories,
        onChangeCategories,
        collections,
        onChangeCollections,
    } = props

    const categoriesCache = useLocalStorage(ConstantStorage.categories, ValueType.array, []);
    const collectionsCache = useLocalStorage(ConstantStorage.collections, ValueType.array, []);

    const sliderRef = useRef()
    const theme = useTheme()
    const isSM = useMediaQuery(theme.breakpoints.down('sm'));

    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [data, setData] = React.useState([0, 0]);

    useEffectTimout('FiltersBlock', async () => {
        try {
            const prices = await HttpClient.get.prices()
            setData([prices.min, prices.max])
            setLoading(false)
        } catch (e) {
            setError(e.message)
            setLoading(false)
        }
    }, [], () => {
        setError(null)
        setLoading(true)
    })

    return (
        <Box sx={{
            height: 'fit-content',
            position: isSM ? 'relative' : 'sticky',
            top: isSM ? 0 : 32,
        }}>
            <Box
                sx={{
                    height: 16,
                    width: 16,
                    bottom: -8,
                    left: 24,
                    borderRadius: '50%',
                    backgroundColor: 'success.main',
                    position: 'absolute',
                }}
            />

            <Box
                sx={{
                    height: 30,
                    width: 30,
                    top: -10,
                    right: 20,
                    borderRadius: '50%',
                    backgroundColor: '#FFD93A',
                    position: 'absolute',
                }}
            />

            <Stack spacing={3} sx={{
                p: isSM ? 2 : 3,
                borderRadius: 2,
                backgroundColor: '#F7F0EA',
                minWidth: 230,
            }}>
                <Stack direction={'row'} spacing={1.4} alignItems={'center'}>
                    <CategoryOutlined sx={{width: 24, height: 24, color: '#d26900'}}/>
                    <Typography variant={'h5'}>
                        Filters
                    </Typography>
                </Stack>
                <Box sx={{
                    '& .MuiPaper-root': {
                        margin: '0px !important',
                        boxShadow: 'none'
                    },
                    '& .MuiButtonBase-root': {
                        minHeight: '48px !important',
                    },
                    '& .MuiAccordionSummary-content': {
                        mt: '12px !important',
                        mb: '12px !important'
                    }
                }}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreOutlined/>}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Stack direction={'row'} spacing={1.4} alignItems={'center'}>
                                <CategoryOutlined sx={{width: 18, height: 18}}/>
                                <Typography>Categories</Typography>
                            </Stack>
                        </AccordionSummary>
                        <AccordionDetails>
                            <FormGroup>
                                {categoriesCache.map((it) => (
                                    <FormControlLabel
                                        checked={categories.includes(it.id)}
                                        key={`category-${it.id}`}
                                        name={`category-${it.id}`}
                                        control={<Checkbox/>}
                                        label={it.name}
                                        onChange={(event) => {
                                            const id = parseInt(event.target.name.split('-')[1])
                                            if (event.target.checked) {
                                                onChangeCategories(categories.concat([id]))
                                            } else {
                                                onChangeCategories(categories.filter((it) => it !== id))
                                            }
                                        }}
                                    />
                                ))}
                            </FormGroup>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreOutlined/>}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Stack direction={'row'} spacing={1.4} alignItems={'center'}>
                                <StyleOutlined sx={{width: 18, height: 18}}/>
                                <Typography>Collections</Typography>
                            </Stack>
                        </AccordionSummary>
                        <AccordionDetails>
                            <FormGroup>
                                {collectionsCache.map((it) => (
                                    <FormControlLabel
                                        key={`collection-${it.id}`}
                                        name={`collection-${it.id}`}
                                        checked={collections.includes(it.id)}
                                        control={<Checkbox/>}
                                        label={it.name}
                                        onChange={(event) => {
                                            const id = parseInt(event.target.name.split('-')[1])
                                            if (event.target.checked) {
                                                onChangeCollections(collections.concat([id]))
                                            } else {
                                                onChangeCollections(collections.filter((it) => it !== id))
                                            }
                                        }}
                                    />
                                ))}
                            </FormGroup>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreOutlined/>}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Stack direction={'row'} spacing={1.4} alignItems={'center'}>
                                <SortOutlined sx={{width: 18, height: 18}}/>
                                <Typography>Sort order</Typography>
                            </Stack>
                        </AccordionSummary>
                        <AccordionDetails>
                            <RadioGroup value={sort} onChange={(event) => {
                                switch (event.target.value) {
                                    case Requests.OrderProduct.NEWEST.name:
                                        onChangeSort(Requests.OrderProduct.NEWEST)
                                        break;
                                    case Requests.OrderProduct.LOW.name:
                                        onChangeSort(Requests.OrderProduct.LOW)
                                        break;
                                    default:
                                        onChangeSort(Requests.OrderProduct.HEIGHT)
                                        break;
                                }
                            }}>
                                <FormControlLabel value={Requests.OrderProduct.NEWEST} control={<Radio/>} label="Newest"/>
                                <FormControlLabel value={Requests.OrderProduct.LOW} control={<Radio/>} label="Price Low"/>
                                <FormControlLabel value={Requests.OrderProduct.HEIGHT} control={<Radio/>} label="Price Height"/>
                            </RadioGroup>
                        </AccordionDetails>
                    </Accordion>
                </Box>

                <Stack spacing={2}>
                    <Stack direction={'row'} spacing={1.4} alignItems={'center'} sx={{pt: 1}}>
                        <PriceChangeOutlined sx={{width: 24, height: 24, color: '#d26900'}}/>
                        <Typography variant={'h5'}>
                            Price range
                        </Typography>
                    </Stack>

                    {loading || error ? (
                        loading ? (
                            <Stack
                                justifyContent={'center'}
                                alignItems={'center'}
                                sx={{
                                    bgcolor: 'white',
                                    p: 1.5,
                                    borderRadius: 1,
                                    minWidth: 222,
                                    minHeight: 167
                                }}
                            >
                                <CircularProgress size={36}/>
                            </Stack>
                        ) : (
                            <Alert severity="error" sx={{minWidth: 222, '& .MuiAlert-icon': {color: '#664e5a'}}}>
                                {error}
                            </Alert>
                        )
                    ) : (
                        <Box sx={{bgcolor: 'white', borderRadius: 1, paddingY: 3, paddingX: 3}}>
                            <Typography variant={'caption'}>
                                The sliders allow you to select from a range of prices.
                            </Typography>

                            <Box sx={{
                                paddingX: 0.5,
                                paddingTop: 1.2,
                                paddingBottom: 1
                            }}>
                                <Slider
                                    ref={sliderRef}
                                    min={data[0]}
                                    max={data[1]}
                                    color={'secondary'}
                                    value={range}
                                    onChange={(event, newValue) => onChangeRange(newValue)}
                                    onChangeCommitted={(event, newValue) => onChangeRangeCommitted()}
                                    valueLabelDisplay="auto"
                                />
                            </Box>

                            <Stack direction={'row'} justifyContent={'space-between'}>

                                <Stack spacing={1} alignItems={'center'}>
                                    <Typography variant={'caption'} sx={{fontWeight: 600}}>
                                        Min price
                                    </Typography>

                                    <Chip
                                        size={'small'}
                                        label={AppHelper.priceFormat(data[0])}
                                        variant={'outlined'}
                                        color={'primary'}
                                        sx={{minWidth: 80, borderWidth: 2}}
                                    />
                                </Stack>

                                <Stack spacing={1} alignItems={'center'}>
                                    <Typography variant={'caption'} sx={{fontWeight: 600}}>
                                        Max price
                                    </Typography>

                                    <Chip
                                        size={'small'}
                                        label={AppHelper.priceFormat(data[1])}
                                        variant={'outlined'}
                                        color={'primary'}
                                        sx={{minWidth: 80, borderWidth: 2}}
                                    />
                                </Stack>
                            </Stack>
                        </Box>
                    )}
                </Stack>

            </Stack>
        </Box>
    );
}

FiltersBlock.propTypes = {
    sort: PropTypes.object.isRequired,
    onChangeSort: PropTypes.func.isRequired,
    range: PropTypes.array.isRequired,
    onChangeRangeCommitted: PropTypes.func.isRequired,
    onChangeRange: PropTypes.func.isRequired,
    categories: PropTypes.array.isRequired,
    onChangeCategories: PropTypes.func.isRequired,
    collections: PropTypes.array.isRequired,
    onChangeCollections: PropTypes.func.isRequired,
};