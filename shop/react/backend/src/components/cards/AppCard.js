import * as React from "react";
import PropTypes from "prop-types";
import {Avatar, Box, CardContent, CardHeader, IconButton} from "@mui/material";
import {CachedOutlined, GridViewOutlined} from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import {AppCardStyled} from "./styled/AppCardStyled";

export function AppCard(props) {

    const {
        color = 'secondary.dark',
        variant = 'lines',
        shadow = false,
        icon = null,
        title = null,
        subheader = null,
        onRefresh = null,
        disabled = null,
    } = props

    const CardIcon = icon

    return (
        <AppCardStyled
            className={variant}
            variant={shadow ? 'elevation' : 'outlined'}
            elevation={shadow ? 3 : 0}
            sx={{
                '&:before': {
                    backgroundColor: color,
                    borderColor: color,
                },
                '&:after': {
                    backgroundColor: color,
                    borderColor: color,
                },
            }}
        >
            <CardHeader
                sx={{
                    alignItems: 'flex-start',
                    paddingBottom: '5px'
                }}
                avatar={
                    <Avatar aria-label="recipe" variant="rounded" sx={{
                        backgroundColor: color
                    }}>
                        {icon ? <CardIcon/> : <GridViewOutlined/>}
                    </Avatar>
                }
                action={onRefresh || disabled === true ? (
                    <Box sx={{
                        backgroundColor: '#ffffff6b',
                        borderRadius: '50%'
                    }}>
                        <IconButton
                            disabled={disabled}
                            aria-label="refresh"
                            onClick={onRefresh}
                        >
                            <CachedOutlined className={disabled ? 'spin' : ''}/>
                        </IconButton>
                    </Box>
                ) : null}
                title={title ? (
                    <Typography variant="h6">
                        {title}
                    </Typography>
                ) : null}
                subheader={subheader ? (
                    <Typography variant="caption" sx={{
                        background: "#ffffffb5",
                        display: 'inline-block',
                        borderRadius: '5px',
                        paddingRight: 1
                    }}>
                        {subheader}
                    </Typography>
                ) : null}
            />
            <CardContent sx={{
                paddingTop: '5px',
                paddingBottom: '10px !important'
            }}>
                {props.children}
            </CardContent>
        </AppCardStyled>
    );
}

AppCard.propTypes = {
    color: PropTypes.string,
    shadow: PropTypes.bool,
    disabled: PropTypes.bool,
    variant: PropTypes.oneOf(['circles', 'lines', 'combine']),
    icon: PropTypes.object,
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    subheader: PropTypes.string,
    onRefresh: PropTypes.func,
    children: PropTypes.element.isRequired
};