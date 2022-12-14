import * as React from 'react';
import {useContext} from 'react';
import {Box, Button, Divider, FormGroup, MenuItem, Stack, TextField} from "@mui/material";
import {useParams} from "react-router";
import {AlertError, AlertSuccess, AppCard, SnackbarError} from "../../components";
import {PeopleOutlined} from "@mui/icons-material";
import {Formik} from "formik";
import * as Yup from 'yup';
import {AdminRole, AppHelper, HttpClient, NavigateContext, Requests, useEffectTimout} from "../../base";
import {AdminSetValueFormic} from "./elements/AdminSetValueFormic";
import Typography from "@mui/material/Typography";
import {NotFoundPage} from "../error/NotFoundPage";


export function ManagerUpdatePage() {

    let {id} = useParams();

    // navigate app
    const {route, routes} = useContext(NavigateContext)

    const [modelId, setModelId] = React.useState(id ? parseInt(id) : null);
    const [data, setData] = React.useState(null);
    const [refresh, setRefresh] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [errorCode, setErrorCode] = React.useState(200);
    const [loading, setLoading] = React.useState(id !== undefined);

    // load
    useEffectTimout('ManagerUpdatePage',() => {
        if (Boolean(modelId)) {
            HttpClient.get.admin(modelId).then(async (response) => {
                setData(response)
                setLoading(false)
            }).catch(async (error) => {
                route.logout(error)
                setErrorCode(error.code)
                setError(error.message)
                setLoading(false)
            });
        }
    }, [modelId, refresh], () => {
        if (Boolean(modelId)) {
            setError(null)
            setLoading(true)
        }
    })

    return (
        <>
            <SnackbarError
                error={error}
                onClose={() => {
                    setError(null)
                }}
            />

            {errorCode !== 200 ? (
                <NotFoundPage/>
            ) : (
                <Stack>
                    <AppCard
                        disabled={loading}
                        onRefresh={Boolean(modelId) || loading ? () => {
                            setRefresh(!refresh)
                        } : null}
                        icon={PeopleOutlined}
                        color={'secondary.dark'}
                        variant={'combine'}
                        title={`${Boolean(modelId) ? 'Edit' : 'Create'} Account`}
                        subheader={Boolean(modelId) ? 'Here you can edit the account' : 'Here you can create a new account'}
                    >
                        <Box sx={{
                            paddingTop: 1,
                            paddingBottom: 3
                        }}>
                            <Formik
                                initialValues={{
                                    email: '',
                                    role: '',
                                    password: '',
                                    submit: null
                                }}
                                validationSchema={Yup.object().shape({
                                    email: Yup.string().required('Email is required'),
                                    role: Yup.string().required('Role is required'),
                                    password: Boolean(modelId) ? Yup.string() : Yup.string()
                                        .required('Password is required')
                                        .min(8, 'Size must be between 8 and 12')
                                        .max(12, 'Size must be between 8 and 12')
                                    ,
                                })}
                                onSubmit={async (values, {setErrors, setStatus, setFieldValue}) => {

                                    setLoading(true)
                                    setStatus({success: null});
                                    setErrors({submit: null});

                                    await new Promise(r => setTimeout(r, 1000));

                                    try {

                                        const response = Boolean(modelId) ? (
                                            await HttpClient.put.admin(modelId, new Requests.AdminUpdateRequest(
                                                values.role,
                                                (values.password === "" ? null : values.password)
                                            ))
                                        ) : (
                                            await HttpClient.post.admin(new Requests.AdminCreateRequest(
                                                values.email,
                                                values.role,
                                                values.password
                                            ))
                                        )

                                        if (!Boolean(modelId)) {
                                            setModelId(response.id)
                                            route.toLocationPush(routes.managerEdit, response.id)
                                        } else {
                                            setFieldValue('password', '')
                                        }

                                        setStatus({success: true});
                                        setLoading(false);

                                    } catch (error) {

                                        route.logout(error)

                                        const errors = {
                                            role: AppHelper.findError('role', error.validate),
                                            email: AppHelper.findError('email', error.validate),
                                            password: AppHelper.findError('password', error.validate),
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

                                        <AdminSetValueFormic
                                            data={data}
                                            refresh={refresh}
                                        />

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
                                                    disabled={loading || Boolean(modelId)}
                                                    type={'email'}
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
                                                    name={'role'}
                                                    value={values.role}
                                                    helperText={touched.role ? errors.role : ''}
                                                    error={Boolean(touched.role && errors.role)}
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    select
                                                    fullWidth
                                                    label='Role'
                                                    variant="filled"
                                                >
                                                    <MenuItem value={AdminRole.MANAGER.name}>
                                                        Manager
                                                    </MenuItem>
                                                    <MenuItem value={AdminRole.ADMIN.name}>
                                                        Admin
                                                    </MenuItem>
                                                </TextField>

                                                {Boolean(modelId) ? (
                                                    <Stack sx={{paddingTop: 1}}>
                                                        <Typography variant="caption">
                                                            Change password
                                                        </Typography>
                                                        <Divider/>
                                                    </Stack>
                                                ) : null}

                                                <TextField
                                                    disabled={loading}
                                                    type={'password'}
                                                    name={'password'}
                                                    value={values.password}
                                                    helperText={touched.password ? errors.password : ''}
                                                    error={Boolean(touched.password && errors.password)}
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    fullWidth
                                                    label="Password"
                                                    variant="filled"
                                                />

                                                <Stack
                                                    alignItems="flex-end"
                                                >
                                                    <Button
                                                        disableElevation
                                                        sx={{color: 'white', paddingTop: '10px'}}
                                                        variant={'contained'}
                                                        color={'secondary'}
                                                        disabled={loading}
                                                        type={'submit'}
                                                        size={'large'}
                                                        onClick={() => {
                                                            route.scrollToTop()
                                                        }}
                                                    >
                                                        {Boolean(modelId) ? 'Update' : 'Add'}
                                                    </Button>
                                                </Stack>

                                            </Stack>
                                        </FormGroup>
                                    </form>
                                )}
                            </Formik>
                        </Box>
                    </AppCard>
                </Stack>
            )}
        </>
    );
}

ManagerUpdatePage.propTypes = {};