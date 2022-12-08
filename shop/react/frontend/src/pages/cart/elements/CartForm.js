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
import {AppHelper, HttpClient, Requests} from "../../../base";
import {AlertError, TextMaskPhone} from "../../../components";
import PropTypes from "prop-types";
import {CartSetValueFormic} from "./CartSetValueFormic";


export function CartForm(props) {

    const {
        loading,
        onSubmit,
        onSuccess,
        products,
    } = props

    const theme = useTheme()
    const isSM = useMediaQuery(theme.breakpoints.down('sm'));
    const isMD = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Formik
            initialValues={{
                phone: '',
                email: '',
                address: '',
                submit: null
            }}
            validationSchema={Yup.object().shape({
                phone: Yup.string().required('Требуется телефон'),
                email: Yup.string().email('Электронная почта должна быть действительной'),
            })}
            onSubmit={async (values, {setErrors, setStatus, setValues}) => {

                onSubmit(true)
                setStatus({success: null});
                setErrors({submit: null});

                await new Promise(r => setTimeout(r, 1000));

                try {

                    const productsRequest = []

                    products.slice().reverse().forEach((it) => {
                        productsRequest.push(new Requests.OrderProductRequest(
                            it.id,
                            it.count,
                            it.price
                        ))
                    })

                    const response = await HttpClient.post.orderCreate(new Requests.OrderCreateRequest(
                        values.email,
                        values.phone,
                        values.address,
                        productsRequest,
                    ))

                    onSuccess(response.number)
                    setStatus({success: true});

                } catch (error) {

                    const errors = {
                        email: AppHelper.findError('email', error.validate),
                        phone: AppHelper.findError('phone', error.validate),
                        address: AppHelper.findError('address', error.validate),
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
                                        Контактная информация
                                    </Typography>

                                    <Typography variant={'caption'}>
                                        Введите свои контактные данные, чтобы с вами можно было связаться и уточнить все
                                        необходимые данные по заказу.
                                    </Typography>
                                </Stack>

                                {errors.submit && (
                                    <AlertError onClose={() => setErrors({submit: null})}>
                                        {errors.submit}
                                    </AlertError>
                                )}

                                <TextField
                                    InputProps={{inputComponent: TextMaskPhone}}
                                    disabled={isSubmitting || loading}
                                    type={'phone'}
                                    name={'phone'}
                                    value={values.phone}
                                    helperText={touched.phone ? errors.phone : ''}
                                    error={Boolean(touched.phone && errors.phone)}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    fullWidth
                                    label="Телефон"
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
                                    name={'email'}
                                    value={values.email}
                                    helperText={touched.email ? errors.email : ''}
                                    error={Boolean(touched.email && errors.email)}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    fullWidth
                                    label="Email (по желанию)"
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
                                    name={'address'}
                                    value={values.address}
                                    helperText={touched.address ? errors.address : ''}
                                    error={Boolean(touched.address && errors.address)}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    fullWidth
                                    multiline
                                    minRows={5}
                                    maxRows={10}
                                    label="Адрес (по желанию)"
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
                                        Сделать заказ
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
    products: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onSuccess: PropTypes.func.isRequired,
};