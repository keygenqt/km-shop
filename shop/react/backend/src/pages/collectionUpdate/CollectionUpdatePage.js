import * as React from 'react';
import {useContext} from 'react';
import {Alert, Box, Button, FormControlLabel, FormGroup, Stack, Switch, TextField} from "@mui/material";
import {useParams} from "react-router";
import {AlertError, AlertSuccess, AppCard, SnackbarError} from "../../components";
import {StyleOutlined} from "@mui/icons-material";
import {AppHelper, HttpClient, NavigateContext, Requests, useEffectTimout} from "../../base";
import {NotFoundPage} from "../error/NotFoundPage";
import {Formik} from "formik";
import * as Yup from "yup";
import {CollectionSetValueFormic} from "./elements/CollectionSetValueFormic";
import {IconTextField} from "../../components/fields/IconTextField";

export function CollectionUpdatePage() {

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
    useEffectTimout(() => {
        if (Boolean(modelId)) {
            HttpClient.get.collection(modelId).then(async (response) => {
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
                        icon={StyleOutlined}
                        color={'secondary.dark'}
                        variant={'combine'}
                        title={`${Boolean(modelId) ? 'Edit' : 'Create'} Collection`}
                        subheader={Boolean(modelId) ? 'Here you can edit the collection' : 'Here you can create a new collection'}
                    >
                        <Box sx={{
                            paddingTop: 1,
                            paddingBottom: 3
                        }}>
                            <Formik
                                initialValues={{
                                    key: '',
                                    name: '',
                                    desc: '',
                                    icon: '',
                                    isPublished: false,
                                    uploads: [],
                                    submit: null
                                }}
                                validationSchema={Yup.object().shape({
                                    key: Yup.string().required('Key is required'),
                                    name: Yup.string()
                                        .required('Password is required')
                                        .min(3, 'Size must be between 3 and 255')
                                        .max(12, 'Size must be between 3 and 255'),
                                    desc: Yup.string().required('Description is required'),
                                    icon: Yup.string().required('Image is required'),
                                })}
                                onSubmit={async (values, {setErrors, setStatus}) => {

                                    setLoading(true)
                                    setStatus({success: null});
                                    setErrors({submit: null});

                                    await new Promise(r => setTimeout(r, 1000));

                                    try {

                                        const response = Boolean(modelId) ? (
                                            await HttpClient.put.collection(modelId, new Requests.CollectionRequest(
                                                values.key,
                                                values.icon,
                                                values.name,
                                                values.desc,
                                                values.isPublished,
                                                values.uploads,
                                            ))
                                        ) : (
                                            await HttpClient.post.collection(new Requests.CollectionRequest(
                                                values.key,
                                                values.icon,
                                                values.name,
                                                values.desc,
                                                values.isPublished,
                                                values.uploads,
                                            ))
                                        )

                                        if (!Boolean(modelId)) {
                                            setModelId(response.id)
                                            route.toLocationPush(routes.collectionEdit, response.id)
                                        }

                                        setStatus({success: true});
                                        setLoading(false);

                                    } catch (error) {

                                        route.logout(error)

                                        const errors = {
                                            key: AppHelper.findError('key', error.validate),
                                            icon: AppHelper.findError('icon', error.validate),
                                            name: AppHelper.findError('name', error.validate),
                                            desc: AppHelper.findError('desc', error.validate),
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
                                      values,
                                      setFieldValue
                                  }) => (
                                    <form noValidate onSubmit={handleSubmit}>

                                        <CollectionSetValueFormic
                                            data={data}
                                            refresh={refresh}
                                        />

                                        <Alert severity={'info'} sx={{
                                            marginBottom: 2
                                        }}>
                                            The list of Material Icons is available at the <a
                                                rel="noreferrer"
                                                href={'https://mui.com/material-ui/material-icons/'}
                                                target={'_blank'}
                                            >link</a>.

                                        </Alert>

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

                                                <IconTextField
                                                    disabled={loading}
                                                    type={'url'}
                                                    name={'icon'}
                                                    value={values.icon}
                                                    helperText={touched.icon ? errors.icon : ''}
                                                    error={Boolean(touched.icon && errors.icon)}
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    fullWidth
                                                    label="Material Icons"
                                                    variant="filled"
                                                />

                                                <TextField
                                                    disabled={loading}
                                                    type={'text'}
                                                    name={'key'}
                                                    value={values.key}
                                                    helperText={touched.key ? errors.key : ''}
                                                    error={Boolean(touched.key && errors.key)}
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    fullWidth
                                                    label="Url path key"
                                                    variant="filled"
                                                />

                                                <TextField
                                                    disabled={loading}
                                                    type={'text'}
                                                    name={'name'}
                                                    value={values.name}
                                                    helperText={touched.name ? errors.name : ''}
                                                    error={Boolean(touched.name && errors.name)}
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    fullWidth
                                                    label="Name"
                                                    variant="filled"
                                                />

                                                <TextField
                                                    disabled={loading}
                                                    type={'text'}
                                                    name={'desc'}
                                                    value={values.desc}
                                                    helperText={touched.desc ? errors.desc : ''}
                                                    error={Boolean(touched.desc && errors.desc)}
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    fullWidth
                                                    multiline
                                                    minRows={4}
                                                    maxRows={10}
                                                    label="Description"
                                                    variant="filled"
                                                />

                                                <FormControlLabel
                                                    sx={{
                                                        color: errors.isPublished ? '#d32f2f' : 'auto'
                                                    }}
                                                    control={<Switch
                                                        disabled={loading}
                                                        checked={values.isPublished}
                                                        onChange={(event, checked) => setFieldValue('isPublished', checked)}
                                                    />}
                                                    label={"Collection published" + (errors.isPublished ? ` (${errors.isPublished})` : '')}
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

CollectionUpdatePage.propTypes = {};