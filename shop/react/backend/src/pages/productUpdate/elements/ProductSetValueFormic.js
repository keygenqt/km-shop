import {useFormikContext} from "formik";
import * as React from "react";
import {useEffect} from "react";
import PropTypes from "prop-types";
import {AppHelper} from "../../../base";

/**
 * Set value to Formic from response
 */
export function ProductSetValueFormic(props) {

    const {
        data,
        refresh,
        removeRelation
    } = props

    const {values, setValues, setStatus, setErrors, setFieldValue} = useFormikContext();
    const [dataFormic, setDataFormic] = React.useState(null);

    // block effect change setValues, values
    useEffect(() => {
        if (data) {
            setDataFormic(data)
        }
    }, [data])

    // update all form
    useEffect(() => {
        if (dataFormic) {
            setValues({
                ...values,
                categoryID: dataFormic.category.id,
                image1: dataFormic.image1,
                image2: dataFormic.image2 ?? "",
                image3: dataFormic.image3 ?? "",
                name: dataFormic.name,
                description: dataFormic.description,
                price: dataFormic.price.toFixed(2),
                isPublished: dataFormic.isPublished,
                collections: dataFormic.collections.map((it) => it.id),
                uploads: dataFormic.uploads.reverse().map((it) => AppHelper.getFileUrl(it.fileName))
            });
            setDataFormic(null)
        }
    }, [dataFormic, setValues, values])

    // remove relation file
    useEffect(() => {
        if (removeRelation) {
            setFieldValue('uploads', values.uploads.filter((it) => it !== removeRelation))
        }
    }, [removeRelation, setFieldValue, setValues, values])

    // clear states
    useEffect(() => {
        setStatus({success: null});
        setErrors({submit: null});
    }, [refresh, setErrors, setStatus])
}

ProductSetValueFormic.propTypes = {
    data: PropTypes.object,
    refresh: PropTypes.bool,
    removeRelation: PropTypes.string,
};
