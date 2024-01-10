import {AppCard, AppMenu, AppToolbar, BaseLayout} from "../index";
import {MenuConf} from "../../conf/menu/MenuConf";
import * as React from "react";
import PropTypes from "prop-types";
import {Button, Stack} from "@mui/material";
import {DescriptionOutlined} from "@mui/icons-material";
import {useContext} from "react";
import {NavigateContext} from "../../base";

/**
 * Application layout unifying element
 */
export function AppLayout(props) {

    // navigate app
    const {route} = useContext(NavigateContext)

    return (
        <BaseLayout
            menu={(
                <Stack>
                    <AppMenu configuration={MenuConf}/>

                    <AppCard
                        icon={DescriptionOutlined}
                        color={'warning.main'}
                        variant={'lines'}
                        title={'Need help?'}
                        subheader={'Please check our docs'}
                    >
                        <Button
                            disableElevation
                            fullWidth
                            variant='outlined'
                            color={'inherit'}
                            sx={{borderRadius: 2, borderColor: 'gray.light'}}
                            onClick={() => {
                                route.openUrlNewTab("https://myshop-docs.keygenqt.com/web/admin-panel/about/")
                            }}
                        >
                            Documentation
                        </Button>
                    </AppCard>
                </Stack>
            )}
            toolbar={AppToolbar}
        >
            {props.children}
        </BaseLayout>
    );
}

AppLayout.propTypes = {
    children: PropTypes.element.isRequired
};
