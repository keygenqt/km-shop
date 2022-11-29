import * as React from "react";
import {
    Box,
    Button,
    CircularProgress,
    FormGroup,
    Stack,
    TextField,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material";
import {DoneOutlined} from "@mui/icons-material";
import {Formik} from "formik";
import * as Yup from "yup";
import {AppHelper} from "../../../base";
import {AlertError} from "../../../components";
import PropTypes from "prop-types";
import {CartSetValueFormic} from "./CartSetValueFormic";

export function CartForm(props) {

    const {
        loading,
        onSubmit
    } = props

    const theme = useTheme()
    const isSM = useMediaQuery(theme.breakpoints.down('sm'));
    const isMD = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Formik
            initialValues={{
                email: '',
                phone: '',
                information: '',
                submit: null
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string().required('Email is required').email('Email must be a valid email'),
            })}
            onSubmit={async (values, {setErrors, setStatus, setValues}) => {

                onSubmit(true)
                setStatus({success: null});
                setErrors({submit: null});

                await new Promise(r => setTimeout(r, 1000));

                try {

                    // const response = await HttpClient.put.category(new Requests.CategoryRequest(
                    //     values.image,
                    //     values.name,
                    //     values.isPublished,
                    //     values.uploads,
                    // ))

                    if (Math.random() < 0.7) {
                        throw new Error('The form is in demo mode.');
                    } else {
                        setStatus({success: true});
                    }

                } catch (error) {

                    const errors = {
                        email: AppHelper.findError('email', error.validate),
                        phone: AppHelper.findError('phone', error.validate),
                        information: AppHelper.findError('information', error.validate),
                    }

                    setErrors(AppHelper.isNotEmpty(errors) ? errors : {
                        submit: error.message
                    });

                    setStatus({success: false});
                }

                onSubmit(false)
            }}
        >
            {({
                  errors,
                  setErrors,
                  handleBlur,
                  handleChange,
                  handleSubmit,
                  isSubmitting,
                  touched,
                  values
              }) => (
                <form noValidate onSubmit={handleSubmit}>

                    <CartSetValueFormic
                        clear={loading}
                    />

                    <FormGroup>
                        <Box>
                            <Stack
                                spacing={isMD ? 2 : 3}
                                sx={{
                                    backgroundColor: '#F6F7F9',
                                    borderRadius: 2,
                                    p: isMD ? isSM ? 2 : 3 : 4,
                                    position: 'relative',
                                    top: -25
                                }}
                            >
                                <Stack spacing={1}>
                                    <Typography variant={'h5'}>
                                        Checkout
                                    </Typography>

                                    <Typography variant={'caption'}>
                                        Enter your contact details so that you can be contacted and clarified all the
                                        necessary data on the order.
                                    </Typography>
                                </Stack>

                                {errors.submit && (
                                    <AlertError onClose={() => setErrors({submit: null})}>
                                        {errors.submit}
                                    </AlertError>
                                )}

                                <TextField
                                    disabled={isSubmitting || loading}
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
                                    sx={{
                                        '& .MuiInputBase-root': {
                                            backgroundColor: 'white'
                                        }
                                    }}
                                />

                                <TextField
                                    disabled={isSubmitting || loading}
                                    type={'phone'}
                                    name={'phone'}
                                    value={values.phone}
                                    helperText={touched.phone ? errors.phone : ''}
                                    error={Boolean(touched.phone && errors.phone)}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    fullWidth
                                    label="Phone (optional)"
                                    variant="filled"
                                    sx={{
                                        '& .MuiInputBase-root': {
                                            backgroundColor: 'white'
                                        }
                                    }}
                                />

                                <TextField
                                    disabled={isSubmitting || loading}
                                    type={'text'}
                                    name={'information'}
                                    value={values.information}
                                    helperText={touched.information ? errors.information : ''}
                                    error={Boolean(touched.information && errors.information)}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    fullWidth
                                    multiline
                                    minRows={5}
                                    maxRows={10}
                                    label="Additional Information"
                                    variant="filled"
                                    sx={{
                                        '& .MuiInputBase-root': {
                                            backgroundColor: 'white'
                                        }
                                    }}
                                />

                                <Box>
                                    <Button
                                        type={'submit'}
                                        disableElevation
                                        variant={'contained'}
                                        size={'large'}
                                        color={'secondary'}
                                        disabled={isSubmitting || loading}
                                        startIcon={isSubmitting ? (
                                            <CircularProgress sx={{
                                                mr: 0.5,
                                                height: '18px !important',
                                                width: '18px !important'
                                            }}/>
                                        ) : (
                                            <DoneOutlined sx={{
                                                height: 18
                                            }}/>
                                        )}
                                    >
                                        Send Order
                                    </Button>
                                </Box>
                            </Stack>
                        </Box>
                    </FormGroup>
                </form>
            )}
        </Formik>
    )
}

CartForm.propTypes = {
    loading: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired,
};