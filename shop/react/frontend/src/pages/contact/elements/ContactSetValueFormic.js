import {useFormikContext} from "formik";
import {useEffect} from "react";
import PropTypes from "prop-types";

/**
 * Set value to Formic
 */
export function ContactSetValueFormic(props) {

    const {
        clear
    } = props

    const {setValues, setStatus, setErrors, setTouched} = useFormikContext();

    // clear states
    useEffect(() => {
        if (clear) {
            setTouched({
                fname: false,
                lname: false,
                email: false,
                phone: false,
                message: false,
            }, false);
            setValues({
                fname: '',
                lname: '',
                email: '',
                phone: '',
                message: '',
            }, false);
        }
    }, [clear, setErrors, setStatus, setTouched, setValues])
}

ContactSetValueFormic.propTypes = {
    clear: PropTypes.bool.isRequired,
};