import {useFormikContext} from "formik";
import * as React from "react";
import {useEffect} from "react";
import PropTypes from "prop-types";
import {AppHelper} from "../../../base";

/**
 * Set value to Formic from response
 */
export function CategorySetValueFormic(props) {

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
                key: dataFormic.key,
                name: dataFormic.name,
                desc: dataFormic.desc,
                image: dataFormic.image,
                isPublished: dataFormic.isPublished,
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

CategorySetValueFormic.propTypes = {
    data: PropTypes.object,
    refresh: PropTypes.bool,
    removeRelation: PropTypes.string,
};
