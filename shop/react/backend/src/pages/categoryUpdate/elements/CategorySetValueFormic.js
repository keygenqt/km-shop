import {useFormikContext} from "formik";
import {useEffect} from "react";
import PropTypes from "prop-types";
import * as React from "react";
import {AppHelper} from "../../../base";

/**
 * Set value to Formic from response
 */
export function CategorySetValueFormic(props) {

    const {
        data
    } = props

    const {values, setValues} = useFormikContext();
    const [dataFormic, setDataFormic] = React.useState(null);

    useEffect(() => {
        if (dataFormic) {
            setValues({
                ...values,
                name: dataFormic.name,
                image: dataFormic.image,
                isPublished: dataFormic.isPublished,
                uploads: dataFormic.uploads.map((it) => AppHelper.getFileUrl(it.fileName))
            });
            setDataFormic(null)
        }
    }, [dataFormic, setValues, values])

    useEffect(() => {
        if (data) {
            setDataFormic(data)
        }
    }, [data])
}

CategorySetValueFormic.propTypes = {
    data: PropTypes.object,
};