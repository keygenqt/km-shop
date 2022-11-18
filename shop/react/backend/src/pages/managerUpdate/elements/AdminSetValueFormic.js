import {useFormikContext} from "formik";
import {useEffect} from "react";
import PropTypes from "prop-types";
import * as React from "react";

/**
 * Set value to Formic from response
 */
export function AdminSetValueFormic(props) {

    const {
        data
    } = props

    const {values, setValues} = useFormikContext();
    const [dataFormic, setDataFormic] = React.useState(null);

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

    useEffect(() => {
        if (data) {
            setDataFormic(data)
        }
    }, [data])
}

AdminSetValueFormic.propTypes = {
    data: PropTypes.object,
};