import * as React from 'react';
import {Box, Stack} from "@mui/material";
import {useParams} from "react-router";
import {AppCard} from "../../components";
import {CategoryOutlined} from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export function CategoryUpdatePage() {

    let {id} = useParams();

    const [modelId, setModelId] = React.useState(id);

    return (
        <Stack>
            <AppCard
                icon={CategoryOutlined}
                color={'primary.dark'}
                variant={'combine'}
                title={'Category'}
                subheader={modelId ? 'Here you can edit the category' : 'Here you can create a new category'}
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

CategoryUpdatePage.propTypes = {};