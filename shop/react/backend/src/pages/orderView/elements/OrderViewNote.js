import * as React from 'react';
import {AlertError, AlertSuccess, AppCard} from "../../../components";
import {Box, Button, FormGroup, Stack, TextField} from "@mui/material";
import {NoteOutlined} from "@mui/icons-material";
import {Formik} from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
import {AppHelper, HttpClient, NavigateContext, Requests} from "../../../base";
import {useContext, useEffect} from "react";

export function OrderViewNote(props) {

    const {
        data,
        onChange
    } = props

    const {route} = useContext(NavigateContext)
    const [loading, setLoading] = React.useState(false);

    useEffect(() => {
        setLoading(props.loading)
    }, [props.loading])

    return (
        <AppCard
            disabled={loading}
            icon={NoteOutlined}
            color={'info.dark'}
            variant={'lines'}
            title={'Note'}
            subheader={'Here you can leave a note on the order'}
        >
            <Box sx={{
                paddingTop: 1,
                paddingBottom: 3
            }}>
                <Formik
                    initialValues={{
                        note: data.note,
                        submit: null
                    }}
                    validationSchema={Yup.object().shape({
                        email: Yup.string().email(),
                        phone: Yup.string(),
                    })}
                    onSubmit={async (values, {setErrors, setStatus}) => {
                        setLoading(true)
                        setStatus({success: null});
                        setErrors({submit: null});

                        await new Promise(r => setTimeout(r, 1000));

                        try {

                            const response = await HttpClient.put.orderNote(data.id, new Requests.OrderNoteRequest(
                                values.note
                            ))

                            onChange(response)
                            setStatus({success: true});
                            setLoading(false);

                        } catch (error) {

                            route.logout(error)

                            const errors = {
                                note: AppHelper.findError('note', error.validate),
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
                                        name={'note'}
                                        value={values.note}
                                        helperText={touched.note ? errors.note : ''}
                                        error={Boolean(touched.note && errors.note)}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        fullWidth
                                        multiline
                                        minRows={5}
                                        maxRows={10}
                                        label="Note"
                                        variant="filled"
                                    />

                                    <Box>
                                        <Button
                                            disableElevation
                                            sx={{paddingTop: '6px'}}
                                            variant={'outlined'}
                                            color={'info'}
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

OrderViewNote.propTypes = {
    loading: PropTypes.bool.isRequired,
    data: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
};