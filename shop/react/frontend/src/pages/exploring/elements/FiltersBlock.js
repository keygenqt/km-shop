import * as React from "react";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box, Checkbox, Chip,
    FormControlLabel,
    FormGroup, Radio, RadioGroup, Slider,
    Stack,
    Typography, useMediaQuery, useTheme
} from "@mui/material";
import {
    CategoryOutlined,
    ExpandMoreOutlined,
    PriceChangeOutlined,
    SortOutlined,
    StyleOutlined
} from "@mui/icons-material";

function valuetext(value) {
    return `${value}°C`;
}

export function FiltersBlock() {

    const theme = useTheme()
    const isSM = useMediaQuery(theme.breakpoints.down('sm'));

    const [value, setValue] = React.useState([12, 87]);

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
                                <FormControlLabel control={<Checkbox defaultChecked/>} label="Bows"/>
                                <FormControlLabel control={<Checkbox defaultChecked/>} label="Headbands"/>
                                <FormControlLabel control={<Checkbox defaultChecked/>} label="Sets"/>
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
                                <FormControlLabel control={<Checkbox defaultChecked/>} label="School"/>
                                <FormControlLabel control={<Checkbox defaultChecked/>} label="Walk"/>
                                <FormControlLabel control={<Checkbox defaultChecked/>} label="Birthday"/>
                                <FormControlLabel control={<Checkbox defaultChecked/>} label="Holiday"/>
                                <FormControlLabel control={<Checkbox defaultChecked/>} label="New Year"/>
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
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="female" control={<Radio/>} label="Most Popular"/>
                                <FormControlLabel value="male" control={<Radio/>} label="Best Rating"/>
                                <FormControlLabel value="other" control={<Radio/>} label="Newest"/>
                                <FormControlLabel value="other1" control={<Radio/>} label="Price Low"/>
                                <FormControlLabel value="other2" control={<Radio/>} label="Price Hight"/>
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

                    <Box sx={{
                        backgroundColor: 'white',
                        borderRadius: 1,
                        paddingY: 3,
                        paddingX: 3
                    }}>
                        <Typography variant={'caption'}>
                            The sliders allow you to select from a range of prices.
                        </Typography>

                        <Box sx={{
                            paddingX: 0.5,
                            paddingTop: 1.2,
                            paddingBottom: 1
                        }}>
                            <Slider
                                color={'secondary'}
                                getAriaLabel={() => 'Temperature range'}
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                                valueLabelDisplay="auto"
                                getAriaValueText={valuetext}
                            />
                        </Box>

                        <Stack direction={'row'} justifyContent={'space-between'}>

                            <Stack spacing={1} alignItems={'center'}>
                                <Typography variant={'caption'} sx={{fontWeight: 600}}>
                                    Min price
                                </Typography>

                                <Chip
                                    size={'small'}
                                    label={value[0]}
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
                                    label={value[1]}
                                    variant={'outlined'}
                                    color={'primary'}
                                    sx={{minWidth: 80, borderWidth: 2}}
                                />
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Stack>
        </Box>
    );
}

FiltersBlock.propTypes = {};