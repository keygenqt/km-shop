import * as React from 'react';
import {Box, Button, Divider, IconButton, List, ListItem, ListItemText, Stack} from "@mui/material";
import {FeedOutlined} from "@mui/icons-material";

const items = [
    {
        primary: 'client@gmail.com',
        secondary: 'Products: 16, Price: $ 1100.80',
    },
    {
        primary: '+1 (869) 304 23 80',
        secondary: 'Products: 13, Price: $ 980.00'
    },
    {
        primary: '+1 (845) 618 11 88',
        secondary: 'Products: 11, Price: $ 760.00'
    },
    {
        primary: 'client2@gmail.com',
        secondary: 'Products: 8, Price: $ 720.30'
    },
    {
        primary: 'client3@gmail.com',
        secondary: 'Products: 4, Price: $ 320.30'
    }
]

export function BestSellerDashboard() {

    const data = []

    items.forEach((item, index) => {
        data.push((
            <>
                <ListItem
                    secondaryAction={
                        <IconButton edge="end" aria-label="delete">
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

                {index < items.length - 1 ? (
                    <Divider/>
                ) : null}

            </>
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
                >
                    View All
                </Button>
            </Box>
        </Stack>
    );
}

BestSellerDashboard.propTypes = {};