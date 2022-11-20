import * as React from 'react';
import {Box, Button, Divider, IconButton, List, ListItem, ListItemText, Stack} from "@mui/material";
import {FeedOutlined} from "@mui/icons-material";
import PropTypes from "prop-types";
import {useContext} from "react";
import {NavigateContext} from "../../../base";

export function BestSellerDashboard(props) {

    const {
        rows
    } = props

    // navigate app
    const {route, routes} = useContext(NavigateContext)

    const data = []

    rows.forEach((item, index) => {
        data.push((
            <Box key={`seller-key-${index}`}>
                <ListItem
                    secondaryAction={
                        <IconButton
                            edge="end"
                            onClick={() => {
                                route.toLocation(routes.orderCompletedView, item.id)
                            }}
                        >
                            <FeedOutlined/>
                        </IconButton>
                    }
                    sx={{paddingLeft: 0}}
                >
                    <ListItemText
                        primary={item.primary}
                        secondary={item.secondary}
                        sx={{
                            '& .MuiTypography-body1': {
                                fontSize: 16,
                            },
                            '& .MuiTypography-body2': {
                                fontSize: 11,
                            }
                        }}
                    />
                </ListItem>

                {index < rows.length - 1 ? (
                    <Divider/>
                ) : null}

            </Box>
        ))
    })

    return (
        <Stack sx={{
            marginTop: -1,
            marginBottom: 1
        }}>
            <List>
                {data}
            </List>
            <Box sx={{
                marginTop: '5px'
            }}>
                <Button
                    variant="outlined"
                    color={'secondary'}
                    onClick={() => {
                        route.toLocation(routes.ordersCompleted)
                    }}
                >
                    View All
                </Button>
            </Box>
        </Stack>
    );
}

BestSellerDashboard.propTypes = {
    rows: PropTypes.array.isRequired,
};