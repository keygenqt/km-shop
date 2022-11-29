import {useFormikContext} from "formik";
import {useEffect} from "react";
import PropTypes from "prop-types";

/**
 * Set value to Formic
 */
export function CartSetValueFormic(props) {

    const {
        clear
    } = props

    const {setStatus, setErrors} = useFormikContext();

    // clear states
    useEffect(() => {
        setStatus({success: null});
        setErrors({submit: null});
    }, [clear, setErrors, setStatus])
}

CartSetValueFormic.propTypes = {
    clear: PropTypes.bool.isRequired,
};