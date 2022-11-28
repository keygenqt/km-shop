import {useFormikContext} from "formik";
import * as React from "react";
import {useEffect} from "react";
import PropTypes from "prop-types";

/**
 * Set value to Formic from response
 */
export function CollectionSetValueFormic(props) {

    const {
        data,
        refresh
    } = props

    const {values, setValues, setStatus, setErrors} = useFormikContext();
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
                icon: dataFormic.icon,
                isPublished: dataFormic.isPublished,
            });
            setDataFormic(null)
        }
    }, [dataFormic, setValues, values])

    // clear states
    useEffect(() => {
        setStatus({success: null});
        setErrors({submit: null});
    }, [refresh, setErrors, setStatus])
}

CollectionSetValueFormic.propTypes = {
    data: PropTypes.object,
    refresh: PropTypes.bool,
    removeRelation: PropTypes.string,
};