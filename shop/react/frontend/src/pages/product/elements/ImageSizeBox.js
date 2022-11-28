import * as React from 'react';
import {useCallback, useEffect, useRef, useState} from 'react';
import PropTypes from "prop-types";
import {Box} from "@mui/material";

export function ImageSizeBox(props) {

    const {
        url
    } = props

    const refBox = useRef()
    const refZoom = useRef()
    const [boxPos, setBoxPos] = useState({pageX: 0, pageY: 0});
    const [enableZoom, setEnableZoom] = React.useState(false);

    // zoom move
    const eventListenerMousemove = useCallback((event) => {
        const {left, top, width, height} = refZoom.current.getBoundingClientRect()
        const x = ((event.pageX ?? boxPos.pageX) - left) / width * 100
        const y = ((event.pageY ?? boxPos.pageY) - top) / height * 100
        refZoom.current.style.backgroundSize = 'auto 140%';
        refZoom.current.style.backgroundPosition = `${x}% ${y}%`;
    }, [boxPos])

    // save pos in box
    const eventListenerMoveBox = useCallback((event) => {
        setBoxPos({pageX: event.pageX, pageY: event.pageY})
    }, [])

    // disable zoom
    const eventMouseout = useCallback(() => {
        setEnableZoom(false)
    }, [])

    // trigger enable / disable
    useEffect(() => {
        if (enableZoom) {
            refBox.current.removeEventListener('mousemove', eventListenerMoveBox);
            refZoom.current.addEventListener('mousemove', eventListenerMousemove);
            refZoom.current.dispatchEvent(new Event('mousemove'));
        } else {
            refBox.current.addEventListener('mousemove', eventListenerMoveBox);
            refZoom.current.style.backgroundSize = 'cover';
            refZoom.current.style.backgroundPosition = 'center';
            refZoom.current.removeEventListener('mousemove', eventListenerMousemove);
        }
    }, [enableZoom, eventListenerMousemove, eventListenerMoveBox])

    // start enable event
    useEffect(() => {
        if (refZoom.current) {
            refZoom.current.removeEventListener('mousemove', eventMouseout);
            refZoom.current.addEventListener('mouseout', eventMouseout);
        }
    }, [eventMouseout, refZoom])

    return (
        <Box ref={refBox}>
            <Box ref={refZoom} onClick={() => setEnableZoom(true)} sx={{
                borderRadius: 2,
                overflow: 'hidden',
                backgroundImage: `url(${url})`,
                width: '100%',
                height: 500,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                '&:hover': {
                    cursor: 'zoom-in'
                }
            }}/>
        </Box>
    );
}

ImageSizeBox.propTypes = {
    url: PropTypes.string.isRequired,
};