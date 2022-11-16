import * as React from 'react';
import {Box, Stack} from "@mui/material";
import {AppCard} from "../../components";
import {useParams} from "react-router";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

export function OrderViewPage(props) {

    const {
        icon,
        filter,
    } = props

    let {id} = useParams();

    const [modelId, setModelId] = React.useState(id);

    return (
        <Stack>
            <AppCard
                icon={icon}
                color={'secondary.dark'}
                variant={'combine'}
                title={'Orders'}
                subheader={'Here is the complete information about the order'}
            >
                <Box sx={{
                    paddingTop: 1,
                    paddingBottom: 3
                }}>
                    <Typography variant="h3">
                        View {filter.name}
                    </Typography>
                </Box>
            </AppCard>
        </Stack>
    );
}

OrderViewPage.propTypes = {
    icon: PropTypes.object.isRequired,
    filter: PropTypes.any.isRequired
};