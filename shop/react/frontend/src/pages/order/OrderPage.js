import * as React from 'react';
import {useParams} from "react-router";
import {OrderViewPage} from "./elements/OrderViewPage";
import {OrderSearchPage} from "./elements/OrderSearchPage";
import {BaseLayout} from "../../components";

export function OrderPage() {

    let {number} = useParams();

    return (
        number ? (
            <OrderViewPage number={number}/>
        ) : (
            <BaseLayout>
                <OrderSearchPage/>
            </BaseLayout>
        )
    );
}

OrderPage.propTypes = {};