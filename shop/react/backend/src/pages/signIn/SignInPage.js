import * as React from 'react';
import {useContext, useState} from 'react';
import {
    Button,
    CircularProgress,
    Container,
    FilledInput,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    Paper,
    Stack,
    Switch,
    useTheme
} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {ConstantStorage, NavigateContext} from "../../base";
import {Formik} from "formik";
import * as Yup from "yup";
import Typography from "@mui/material/Typography";
import {AlertError, AlertSuccess} from "../../components";
import {AppCache} from "../../base/utils/AppCache";

export function SignInPage() {

    const {route, routes} = useContext(NavigateContext)

    const theme = useTheme()

    const [isLoading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Stack
            className={"splash"}
            justifyContent="center"
            alignItems="center"
            sx={{
                width: '100%',
                height: '100%',
            }}
        >
            <Container className={'content'} sx={{
                maxWidth: '500px !important',
                padding: '30px !important'
            }}>
                <Paper elevation={10} sx={{
                    padding: 4
                }}>
                    <Stack spacing={2} alignItems={'center'}>

                        <Typography
                            variant="h5"
                            noWrap
                            component="div"
                            color={theme.palette.secondary.dark}
                        >
                            Hi, Welcome Back
                        </Typography>

                        <Typography
                            variant="caption"
                            noWrap
                            component="div"
                            sx={{
                                fontWeight: 'bold'
                            }}
                        >
                            Sign in with Email address
                        </Typography>

                        <Formik
                            initialValues={{
                                email: '',
                                password: '',
                                submit: null
                            }}
                            validationSchema={Yup.object().shape({
                                email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                                password: Yup.string().max(255).required('Password is required')
                            })}
                            onSubmit={async (values, {setErrors, setStatus, setSubmitting}) => {

                                setLoading(true)
                                setStatus({success: null});
                                setErrors({submit: null});

                                await new Promise(r => setTimeout(r, 3000));

                                // set result
                                setStatus({success: true});
                                setSubmitting(false);

                                await new Promise(r => setTimeout(r, 1000));

                                // @todo
                                AppCache.booleanSet(ConstantStorage.isAuth, true)

                                // reload page
                                route.toRefreshState(routes.dashboard)
                            }}
                        >
                            {({
                                  status,
                                  errors,
                                  handleBlur,
                                  handleChange,
                                  handleSubmit,
                                  isSubmitting,
                                  touched,
                                  values
                              }) => (
                                <form noValidate onSubmit={handleSubmit}>

                                    {errors.submit && (
                                        <AlertError style={{
                                            maxWidth: 345
                                        }}>
                                            {errors.submit}
                                        </AlertError>
                                    )}

                                    {status && status.success && (
                                        <AlertSuccess style={{
                                            maxWidth: 345
                                        }}>
                                            Success submit form!
                                        </AlertSuccess>
                                    )}

                                    <FormGroup sx={{
                                        "& .MuiGrid-item": {
                                            width: '100%'
                                        }
                                    }}>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <FormControl error={Boolean(touched.email && errors.email)}
                                                             fullWidth
                                                             variant="filled">
                                                    <InputLabel htmlFor="filled-email-login">Email Address /
                                                        Username</InputLabel>
                                                    <FilledInput
                                                        id="filled-email-login"
                                                        type={'text'}
                                                        name={'email'}
                                                        value={values.email}
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        disabled={isSubmitting || isLoading}
                                                        fullWidth
                                                        variant="filled"
                                                    />
                                                    {touched.email && errors.email && (
                                                        <FormHelperText error>
                                                            {errors.email}
                                                        </FormHelperText>
                                                    )}
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <FormControl error={Boolean(touched.password && errors.password)}
                                                             fullWidth
                                                             variant="filled">
                                                    <InputLabel
                                                        htmlFor="filled-password-login">Password</InputLabel>
                                                    <FilledInput
                                                        id="filled-password-login"
                                                        type={showPassword ? 'text' : 'password'}
                                                        name={'password'}
                                                        value={values.password}
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        disabled={isSubmitting || isLoading}
                                                        fullWidth
                                                        variant="filled"
                                                        endAdornment={
                                                            <InputAdornment position="end">
                                                                <IconButton
                                                                    aria-label="toggle password visibility"
                                                                    onClick={handleClickShowPassword}
                                                                    onMouseDown={handleMouseDownPassword}
                                                                    edge="end"
                                                                >
                                                                    {showPassword ? <VisibilityOff/> :
                                                                        <Visibility/>}
                                                                </IconButton>
                                                            </InputAdornment>
                                                        }
                                                    />
                                                    {touched.password && errors.password && (
                                                        <FormHelperText error>
                                                            {errors.password}
                                                        </FormHelperText>
                                                    )}
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <FormControlLabel
                                                    control={<Switch defaultChecked
                                                                     disabled={isSubmitting || isLoading}/>}
                                                    label="Remember me"
                                                />
                                            </Grid>
                                            <Grid item xs={12} sx={{
                                                textAlign: 'end'
                                            }}>
                                                <Button
                                                    variant={'contained'}
                                                    color={'primary'}
                                                    disabled={isSubmitting || isLoading}
                                                    fullWidth
                                                    type={'submit'}
                                                    size={'large'}
                                                >
                                                    {isSubmitting || isLoading ?
                                                        <CircularProgress color="inherit" size={21} sx={{
                                                            padding: '3px'
                                                        }}/> : 'Sign In'}
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </FormGroup>
                                </form>
                            )}
                        </Formik>
                    </Stack>
                </Paper>
            </Container>
        </Stack>
    );
}

SignInPage.propTypes = {};