import {useFormikContext} from "formik";
import {useEffect} from "react";
import PropTypes from "prop-types";
import * as React from "react";

/**
 * Set value to Formic from response
 */
export function AdminSetValueFormic(props) {

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
                email: dataFormic.email,
                role: dataFormic.role.name,
                password: "",
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

AdminSetValueFormic.propTypes = {
    data: PropTypes.object,
    refresh: PropTypes.bool,
};