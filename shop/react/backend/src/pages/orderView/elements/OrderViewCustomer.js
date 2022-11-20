import * as React from 'react';
import {AlertError, AlertSuccess, AppCard} from "../../../components";
import {Box, Button, FormGroup, Stack, TextField} from "@mui/material";
import {PersonOutline} from "@mui/icons-material";
import {Formik} from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
import {AppHelper, HttpClient, NavigateContext, Requests} from "../../../base";
import {useContext} from "react";

export function OrderViewCustomer(props) {

    const {
        data,
        onChange
    } = props

    const {route} = useContext(NavigateContext)
    const [loading, setLoading] = React.useState(false);

    return (
        <AppCard
            disabled={loading}
            icon={PersonOutline}
            color={'primary.dark'}
            variant={'lines'}
            title={'Customer Details'}
            subheader={'Data of the user who left the order'}
        >
            <Box sx={{
                paddingTop: 1,
                paddingBottom: 3
            }}>
                <Formik
                    initialValues={{
                        email: data.email,
                        phone: data.phone,
                        address: data.address,
                        submit: null
                    }}
                    validationSchema={Yup.object().shape({
                        email: Yup.string().email('Email must be a valid email'),
                        phone: Yup.string(),
                        address: Yup.string(),
                    })}
                    onSubmit={async (values, {setErrors, setStatus}) => {
                        setLoading(true)
                        setStatus({success: null});
                        setErrors({submit: null});

                        await new Promise(r => setTimeout(r, 1000));

                        try {

                            const response = await HttpClient.put.orderCustomer(data.id, new Requests.OrderCustomerRequest(
                                values.email,
                                values.phone,
                                values.address,
                            ))

                            onChange(response)
                            setStatus({success: true});
                            setLoading(false);

                        } catch (error) {

                            route.logout(error)

                            const errors = {
                                email: AppHelper.findError('email', error.validate),
                                phone: AppHelper.findError('phone', error.validate),
                                address: AppHelper.findError('address', error.validate),
                            }

                            setErrors(AppHelper.isNotEmpty(errors) ? errors : {
                                submit: error.message
                            });

                            setStatus({success: false});
                            setLoading(false);
                        }
                    }}
                >
                    {({
                          status,
                          errors,
                          handleBlur,
                          handleChange,
                          handleSubmit,
                          touched,
                          values
                      }) => (
                        <form noValidate onSubmit={handleSubmit}>

                            {errors.submit && (
                                <AlertError>
                                    {errors.submit}
                                </AlertError>
                            )}

                            {status && status.success && (
                                <AlertSuccess>
                                    Success submit form!
                                </AlertSuccess>
                            )}

                            <FormGroup>
                                <Stack spacing={2}>

                                    <TextField
                                        disabled={loading}
                                        type={'text'}
                                        name={'email'}
                                        value={values.email}
                                        helperText={touched.email ? errors.email : ''}
                                        error={Boolean(touched.email && errors.email)}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        fullWidth
                                        label="Email"
                                        variant="filled"
                                    />

                                    <TextField
                                        disabled={loading}
                                        type={'text'}
                                        name={'phone'}
                                        value={values.phone}
                                        helperText={touched.phone ? errors.phone : ''}
                                        error={Boolean(touched.phone && errors.phone)}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        fullWidth
                                        label="Phone"
                                        variant="filled"
                                    />

                                    <TextField
                                        disabled={loading}
                                        type={'text'}
                                        name={'address'}
                                        value={values.address}
                                        helperText={touched.address ? errors.address : ''}
                                        error={Boolean(touched.address && errors.address)}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        fullWidth
                                        multiline
                                        minRows={1}
                                        maxRows={10}
                                        label="Address"
                                        variant="filled"
                                    />

                                    <Box>
                                        <Button
                                            disableElevation
                                            sx={{paddingTop: '6px'}}
                                            variant={'outlined'}
                                            color={'primary'}
                                            disabled={loading}
                                            type={'submit'}
                                            size={'small'}
                                        >
                                            Update
                                        </Button>
                                    </Box>

                                </Stack>
                            </FormGroup>
                        </form>
                    )}
                </Formik>
            </Box>
        </AppCard>
    );
}

OrderViewCustomer.propTypes = {
    data: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
};