import * as React from 'react';
import {Box, Stack} from "@mui/material";
import {useParams} from "react-router";
import {AppCard} from "../../components";
import {FolderOutlined} from "@mui/icons-material";
import Typography from "@mui/material/Typography";

export function ProductUpdatePage() {

    let {id} = useParams();

    const [modelId, setModelId] = React.useState(id);

    return (
        <Stack>
            <AppCard
                icon={FolderOutlined}
                color={'primary.dark'}
                variant={'combine'}
                title={'Products'}
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

ProductUpdatePage.propTypes = {};