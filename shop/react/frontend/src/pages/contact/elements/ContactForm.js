import * as React from "react";
import {Box, Button, CircularProgress, FormGroup, Stack, TextField, useMediaQuery, useTheme} from "@mui/material";
import {DoneOutlined} from "@mui/icons-material";
import {Formik} from "formik";
import * as Yup from "yup";
import {AppHelper, HttpClient, Requests} from "../../../base";
import {AlertError, AlertSuccess, TextMaskPhone} from "../../../components";
import {ContactSetValueFormic} from "./ContactSetValueFormic";

export function ContactForm() {

    const theme = useTheme()
    const isSM = useMediaQuery(theme.breakpoints.down('sm'));
    const isMD = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Formik
            initialValues={{
                fname: '',
                lname: '',
                email: '',
                phone: '',
                message: '',
                submit: null
            }}
            validationSchema={Yup.object().shape({
                fname: Yup.string().required('Требуется имя'),
                lname: Yup.string().required('Требуется отчество'),
                email: Yup.string().required('Электронная почта обязательна').email('Электронная почта должна быть действительной'),
                message: Yup.string().required('Требуется сообщение'),
            })}
            onSubmit={async (values, {setErrors, setStatus}) => {

                setStatus({success: null});
                setErrors({submit: null});

                await new Promise(r => setTimeout(r, 1000));

                try {
                    await HttpClient.post.message(new Requests.MessageRequest(
                        values.fname,
                        values.lname,
                        values.email,
                        values.phone,
                        values.message,
                    ))
                    setStatus({success: true});
                } catch (error) {

                    const errors = {
                        fname: AppHelper.findError('fname', error.validate),
                        lname: AppHelper.findError('lname', error.validate),
                        email: AppHelper.findError('email', error.validate),
                        phone: AppHelper.findError('phone', error.validate),
                        message: AppHelper.findError('message', error.validate),
                    }

                    setErrors(AppHelper.isNotEmpty(errors) ? errors : {
                        submit: error.message
                    });

                    setStatus({success: false});
                }
            }}
        >
            {({
                  status,
                  setStatus,
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

                    <ContactSetValueFormic
                        clear={Boolean(status && status.success)}
                    />

                    <FormGroup>
                        <Box>
                            <Stack
                                spacing={isMD ? 2 : 3}
                                sx={{
                                    backgroundColor: '#F6F7F9',
                                    borderRadius: 2,
                                    p: isMD ? isSM ? 2 : 3 : 4,
                                    position: 'relative'
                                }}
                            >
                                {errors.submit && (
                                    <AlertError onClose={() => setErrors({submit: null})}>
                                        {errors.submit}
                                    </AlertError>
                                )}

                                {status && status.success && (
                                    <AlertSuccess onClose={() => setStatus({success: false})}>
                                        Success submit message
                                    </AlertSuccess>
                                )}

                                <Stack spacing={isMD ? 2 : 3} direction={isSM ? 'column' : 'row'}>

                                    <TextField
                                        disabled={isSubmitting}
                                        type={'text'}
                                        name={'fname'}
                                        value={values.fname}
                                        helperText={touched.fname ? errors.fname : ''}
                                        error={Boolean(touched.fname && errors.fname)}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        fullWidth
                                        label="Имя"
                                        variant="filled"
                                        sx={{
                                            '& .MuiInputBase-root': {
                                                backgroundColor: 'white'
                                            }
                                        }}
                                    />

                                    <TextField
                                        disabled={isSubmitting}
                                        type={'text'}
                                        name={'lname'}
                                        value={values.lname}
                                        helperText={touched.lname ? errors.lname : ''}
                                        error={Boolean(touched.lname && errors.lname)}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        fullWidth
                                        label="Отчество"
                                        variant="filled"
                                        sx={{
                                            '& .MuiInputBase-root': {
                                                backgroundColor: 'white'
                                            }
                                        }}
                                    />
                                </Stack>

                                <TextField
                                    disabled={isSubmitting}
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
                                    InputProps={{inputComponent: TextMaskPhone}}
                                    disabled={isSubmitting}
                                    type={'phone'}
                                    name={'phone'}
                                    value={values.phone}
                                    helperText={touched.phone ? errors.phone : ''}
                                    error={Boolean(touched.phone && errors.phone)}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    fullWidth
                                    label="Телефон (по желанию)"
                                    variant="filled"
                                    sx={{
                                        '& .MuiInputBase-root': {
                                            backgroundColor: 'white'
                                        }
                                    }}
                                />

                                <TextField
                                    disabled={isSubmitting}
                                    type={'text'}
                                    name={'message'}
                                    value={values.message}
                                    helperText={touched.message ? errors.message : ''}
                                    error={Boolean(touched.message && errors.message)}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    fullWidth
                                    multiline
                                    minRows={5}
                                    maxRows={10}
                                    label="Сообщение"
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
                                        disabled={isSubmitting}
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
                                        Отправить
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

ContactForm.propTypes = {};