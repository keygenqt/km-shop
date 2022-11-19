import * as React from 'react';
import {useContext} from 'react';
import {Avatar, Box, Button, FormControlLabel, FormGroup, Stack, Switch, TextField} from "@mui/material";
import {useParams} from "react-router";
import {AlertError, AlertSuccess, AppCard, MultipleFiles, SnackbarError} from "../../components";
import {BrokenImage, CategoryOutlined} from "@mui/icons-material";
import {AppHelper, HttpClient, NavigateContext, Requests, useEffectTimout} from "../../base";
import {NotFoundPage} from "../error/NotFoundPage";
import {Formik} from "formik";
import * as Yup from "yup";
import {CategorySetValueFormic} from "./elements/CategorySetValueFormic";
import {FileDialog} from "../../components/dialogs/FileDialog";
import {ImageTextField} from "../../components/fields/ImageTextField";

export function CategoryUpdatePage() {

    let {id} = useParams();

    // navigate app
    const {route, routes} = useContext(NavigateContext)

    const [modelId, setModelId] = React.useState(id ? parseInt(id) : null);
    const [data, setData] = React.useState(null);
    const [refresh, setRefresh] = React.useState(false);
    const [error, setError] = React.useState(null);
    const [errorFile, setErrorFile] = React.useState(null);
    const [errorCode, setErrorCode] = React.useState(200);
    const [loading, setLoading] = React.useState(id !== undefined);
    const [showFile, setShowFile] = React.useState(null);

    // load
    useEffectTimout(() => {
        if (Boolean(modelId)) {
            HttpClient.get.category(modelId).then(async (response) => {
                setData(response)
                setLoading(false)
            }).catch(async (response) => {
                setErrorCode(response.code)
                setError(response.message)
                setLoading(false)
            });
        }
    }, [modelId, refresh], () => {
        if (Boolean(modelId)) {
            setError(null)
            setErrorFile(null)
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

            <FileDialog
                url={showFile}
                onClose={() => {
                    setShowFile(null)
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
                        icon={CategoryOutlined}
                        color={'secondary.dark'}
                        variant={'combine'}
                        title={`${Boolean(modelId) ? 'Edit' : 'Create'} Category`}
                        subheader={Boolean(modelId) ? 'Here you can edit the category' : 'Here you can create a new category'}
                    >
                        <Box sx={{
                            paddingTop: 1,
                            paddingBottom: 3
                        }}>
                            <Formik
                                initialValues={{
                                    name: '',
                                    image: '',
                                    isPublished: false,
                                    uploads: [],
                                    submit: null
                                }}
                                validationSchema={Yup.object().shape({
                                    name: Yup.string()
                                        .required('Password is required')
                                        .min(3, 'Size must be between 3 and 255')
                                        .max(12, 'Size must be between 3 and 255'),
                                    image: Yup.string().required('Image is required'),
                                })}
                                onSubmit={async (values, {setErrors, setStatus}) => {

                                    setLoading(true)
                                    setErrorFile(null)
                                    setStatus({success: null});
                                    setErrors({submit: null});

                                    await new Promise(r => setTimeout(r, 1000));

                                    try {

                                        const response = Boolean(modelId) ? (
                                            await HttpClient.put.category(modelId, new Requests.CategoryRequest(
                                                values.image,
                                                values.name,
                                                values.isPublished,
                                                values.uploads,
                                            ))
                                        ) : (
                                            await HttpClient.post.category(new Requests.CategoryRequest(
                                                values.image,
                                                values.name,
                                                values.isPublished,
                                                values.uploads,
                                            ))
                                        )

                                        if (!Boolean(modelId)) {
                                            setModelId(response.id)
                                            route.toLocationPush(routes.categoryEdit, response.id)
                                        }

                                        setStatus({success: true});
                                        setLoading(false);

                                    } catch (error) {

                                        const errors = {
                                            role: AppHelper.findError('name', error.validate),
                                            email: AppHelper.findError('image', error.validate),
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

                                        <CategorySetValueFormic
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

                                                <MultipleFiles
                                                    error={errorFile}
                                                    disabled={loading}
                                                    values={values.uploads}
                                                    onUpload={async (uploads) => {
                                                        // clear state file upload
                                                        setErrorFile(null)
                                                        setLoading(true)
                                                        // create requests
                                                        const requests = await AppHelper.convertUploads(uploads)
                                                        // request
                                                        try {
                                                            const response = await HttpClient
                                                                .post
                                                                .uploads(requests)

                                                            setFieldValue('uploads', response
                                                                .toArray()
                                                                .reverse()
                                                                .map((it) => AppHelper.getFileUrl(it.fileName))
                                                                .concat(values.uploads)
                                                            )

                                                            setLoading(false)
                                                        } catch (error) {
                                                            setLoading(false)
                                                            setErrorFile(error.message)
                                                        }
                                                    }}
                                                    onClickChip={(url) => {
                                                        setShowFile(url)
                                                    }}
                                                    onDeleteChip={(url) => {
                                                        setFieldValue('uploads', values.uploads.filter((it) => it !== url))
                                                    }}
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

                                                <ImageTextField
                                                    disabled={loading}
                                                    type={'url'}
                                                    name={'image'}
                                                    value={values.image}
                                                    helperText={touched.image ? errors.image : ''}
                                                    error={Boolean(touched.image && errors.image)}
                                                    onBlur={handleBlur}
                                                    onChange={handleChange}
                                                    fullWidth
                                                    label="Image Url"
                                                    variant="filled"
                                                    onClickImage={() => {
                                                        setShowFile(values.image)
                                                    }}
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
                                                    label={"Category published" + (errors.isPublished ? ` (${errors.isPublished})` : '')}
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

CategoryUpdatePage.propTypes = {};