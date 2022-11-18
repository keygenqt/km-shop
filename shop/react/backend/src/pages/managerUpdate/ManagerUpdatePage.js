import * as React from 'react';
import {useContext, useEffect} from 'react';
import {Box, Button, FormGroup, Stack, TextField} from "@mui/material";
import {useParams} from "react-router";
import {AlertError, AlertSuccess, AppCard, SnackbarError} from "../../components";
import {PeopleOutlined} from "@mui/icons-material";
import {Formik} from "formik";
import * as Yup from 'yup';
import {HttpClient, NavigateContext, useEffectTimout} from "../../base";
import {AdminSetValueFormic} from "./elements/AdminSetValueFormic";

export function ManagerUpdatePage() {

    let {id} = useParams();

    // navigate app
    const {route, routes} = useContext(NavigateContext)

    const [modelId, setModelId] = React.useState(id);
    const [data, setData] = React.useState(null);
    const [refresh, setRefresh] = React.useState(true);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(id !== undefined);

    // load
    useEffectTimout(() => {
        if (id) {
            HttpClient.get.admin(id).then(async (response) => {
                setData(response)
                setLoading(false)
            }).catch(async (response) => {
                setError(response.message)
                setLoading(false)
            });
        }
    }, [id, refresh], () => {
        setError(null)
        setLoading(true)
    })

    return (
        <Stack>

            <SnackbarError
                error={error}
                onClose={() => {
                    setError(null)
                }}
            />

            <AppCard
                disabled={loading}
                onRefresh={() => {
                    setRefresh(!refresh)
                }}
                icon={PeopleOutlined}
                color={'secondary.dark'}
                variant={'combine'}
                title={`${modelId ? 'Edit' : 'Create'} Account`}
                subheader={modelId ? 'Here you can edit the account' : 'Here you can create a new account'}
            >
                <Box sx={{
                    paddingTop: 1,
                    paddingBottom: 3
                }}>
                    <Formik
                        initialValues={{
                            email: '',
                            submit: null
                        }}
                        validationSchema={Yup.object().shape({
                            email: Yup.string().required('Email is required'),
                        })}
                        onSubmit={async (values, {setErrors, setStatus}) => {

                            setLoading(true)
                            setStatus({success: null});
                            setErrors({submit: null});

                            await new Promise(r => setTimeout(r, 1000));

                            // @todo add query
                            if (false) {
                                setStatus({success: true});
                                setLoading(false);
                            } else {
                                setErrors({
                                    email: "ERROR!",
                                    submit: "ERROR!",
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
                                            disabled={loading}
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
                                                {modelId ? 'Update' : 'Add'}
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
    );
}

ManagerUpdatePage.propTypes = {};