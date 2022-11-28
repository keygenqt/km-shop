import * as React from 'react';
import {useEffect, useRef} from 'react';
import PropTypes from "prop-types";
import {Box} from "@mui/material";

export function ImageSizeBox(props) {

    const ref = useRef()

    const {
        url
    } = props

    useEffect(() => {
        if (ref.current) {
            ref.current.addEventListener('mousemove', (event) => {
                const {left, top, width, height} = event.target.getBoundingClientRect()
                const x = (event.pageX - left) / width * 100
                const y = (event.pageY - top) / height * 100
                ref.current.style.backgroundPosition = `${x}% ${y}%`;
            });
            ref.current.addEventListener('mouseout', () => {
                ref.current.style.backgroundPosition = 'center';
            });
        }
    }, [ref])

    return (
        <Box ref={ref} sx={{
            borderRadius: 2,
            overflow: 'hidden',
            backgroundImage: `url(${url})`,
            width: '100%',
            height: 500,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            '&:hover': {
                backgroundSize: 'auto 140%',
            }
        }}/>
    );
}

ImageSizeBox.propTypes = {
    url: PropTypes.string.isRequired,
};