import * as React from 'react';
import {Box, Stack} from "@mui/material";
import {useParams} from "react-router";
import {AppCard} from "../../components";
import {PeopleOutlined} from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export function ManagerUpdatePage() {

    let {id} = useParams();

    const [modelId, setModelId] = React.useState(id);

    return (
        <Stack>
            <AppCard
                icon={PeopleOutlined}
                color={'secondary.dark'}
                variant={'combine'}
                title={'Managers'}
                subheader={modelId ? 'Here you can edit the account' : 'Here you can create a new account'}
            >
                <Box sx={{
                    paddingTop: 1,
                    paddingBottom: 3
                }}>
                    <Typography variant="h3">
                        Form
                    </Typography>
                </Box>
            </AppCard>
        </Stack>
    );
}

ManagerUpdatePage.propTypes = {};