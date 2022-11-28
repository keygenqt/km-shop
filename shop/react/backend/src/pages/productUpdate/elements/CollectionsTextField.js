import * as React from 'react';
import {useEffect} from 'react';
import {Box, Chip, FilledInput, FormControl, InputLabel, MenuItem, Select, Stack, useTheme} from "@mui/material";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import {GenericIcon} from "../../../components/other/GenericIcon";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        },
    },
};

function getStyles(name, personName, theme) {
    return {
        fontWeight:
            personName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

/**
 * Select collections {value, icon, name}
 */
export function CollectionsTextField(props) {

    const {
        rows,
        selects,
        disabled,
        onChange
    } = props

    const theme = useTheme();
    const [items, setItems] = React.useState([]);

    const handleChange = (event) => {
        const {target: {value}} = event;
        const result = typeof value === 'string' ? value.split(',') : value
        onChange(result.map((it) => parseInt(it.split(':')[0])))
    };

    useEffect(() => {
        setItems(rows.filter((it) => selects.includes(it.value)).map((it) => `${it.value}:${it.icon}:${it.name}`))
    }, [rows, selects])

    return (
        <Box>
            <FormControl fullWidth variant="filled" disabled={disabled}>
                <InputLabel>Collections</InputLabel>
                <Select
                    multiple
                    value={items}
                    onChange={handleChange}
                    input={<FilledInput disabled={disabled} label="Chip"/>}
                    renderValue={(selected) => (
                        <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 0.5}}>
                            {selected.map((it) => it.split(':')).map((it) => (
                                <Chip icon={(
                                    <Box sx={{
                                        pt: 0.7,
                                        pl: 0.5
                                    }}>
                                        <GenericIcon iconName={it[1]} sx={{
                                            width: 16,
                                            height: 16,
                                            opacity: disabled ? 0.7 : 1
                                        }}/>
                                    </Box>
                                )} key={it[0]} label={it[2]}/>
                            ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                >
                    {rows.map((it) => (
                        <MenuItem
                            key={it.value}
                            value={`${it.value}:${it.icon}:${it.name}`}
                            style={getStyles(it.name, items, theme)}
                        >
                            <Stack direction={'row'} spacing={2} sx={{pb: 0.5, pt: 0.5}}>

                                <Box sx={{
                                    p: 0.5,
                                    backgroundColor: 'secondary.light',
                                    borderRadius: '50%',
                                    fontSize: 0
                                }}>
                                    <GenericIcon iconName={it.icon} sx={{width: 14, height: 14}}/>
                                </Box>

                                <Typography variant={'body1'}>
                                    {it.name}
                                </Typography>
                            </Stack>
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}

CollectionsTextField.propTypes = {
    rows: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    selects: PropTypes.array.isRequired,
    disabled: PropTypes.bool.isRequired,
};