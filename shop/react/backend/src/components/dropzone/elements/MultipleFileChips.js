import * as React from "react";
import {useEffect, useRef} from "react";
import {Box, Stack} from "@mui/material";
import PropTypes from "prop-types";
import {MultipleFileChip} from "./MultipleFileChip";
import {useWindowResize} from "../../../base";

export function MultipleFileChips(props) {

    const {
        disabled,
        values,
        onClickChip,
        onDeleteChip,
    } = props

    const boxScroll = useRef()
    const sizeWindow = useWindowResize()
    const chips = []
    const [isScroll, setIsScroll] = React.useState(false);

    useEffect(() => {
        if (boxScroll.current) {
            setIsScroll(boxScroll.current.scrollWidth > boxScroll.current.offsetWidth)
        }
    }, [sizeWindow])

    useEffect(() => {
        if (boxScroll.current) {
            setIsScroll(boxScroll.current.scrollWidth > boxScroll.current.offsetWidth)
        }
    }, [boxScroll])

    values.forEach((item, index) => {
        chips.push(
            <MultipleFileChip
                key={`chip-file-${index}`}
                url={item}
                disabled={disabled}
                onClick={onClickChip}
                onDelete={onDeleteChip}
            />
        )
    })

    return chips.length > 0 ? (
        <Box sx={{display: 'inline-grid'}}>
            <Stack
                ref={boxScroll}
                className={'custom-scroll'}
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={1}
                sx={{paddingBottom: isScroll ? '14px' : 0}}
            >
                {chips}
            </Stack>
        </Box>
    ) : null
}

MultipleFileChips.propTypes = {
    disabled: PropTypes.bool.isRequired,
    values: PropTypes.array.isRequired,
    onClickChip: PropTypes.func.isRequired,
    onDeleteChip: PropTypes.func.isRequired,
};