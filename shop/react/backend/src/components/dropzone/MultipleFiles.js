import * as React from "react";
import {FormHelperText, Stack} from "@mui/material";
import PropTypes from "prop-types";
import {MultipleFileChips} from "./elements/MultipleFileChips";
import {MultipleFilesZone} from "./styled/MultipleFilesZone";
import {useDropzone} from "react-dropzone";
import Typography from "@mui/material/Typography";

export function MultipleFiles(props) {

    const {
        accept = {}, // 'image/*': []
        error,
        disabled,
        values,
        onUpload,
        onClickChip,
        onDeleteChip,
    } = props

    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        accept: accept,
        disabled: disabled,
        onDrop: onUpload,
        noClick: true
    })

    const classes = [
        error ? 'FilesZone-Error' : null,
        disabled ? 'FilesZone-Disable' : null,
        isDragActive ? 'FilesZone-Active' : null,
    ]

    return (
        <Stack spacing={2}>
            <Stack>

                {/*dropzone*/}
                <MultipleFilesZone
                    {...getRootProps()}
                    className={classes.filter((it) => it != null).join(' ')}
                >
                    <input id={'input-MultipleFiles'} {...getInputProps()} />

                    <Typography variant="body2">
                        {isDragActive ? "Drop the files here ..." : "Drag 'n' drop some files here"}
                    </Typography>

                </MultipleFilesZone>

                {/*error helper*/}
                {error ? (
                    <FormHelperText error={true} sx={{paddingLeft: 1}}>
                        {error}
                    </FormHelperText>
                ) : null}
            </Stack>

            {/*chips*/}
            <MultipleFileChips
                disabled={disabled}
                values={values}
                onClickChip={onClickChip}
                onDeleteChip={onDeleteChip}
            />

        </Stack>
    )
}

MultipleFiles.propTypes = {
    error: PropTypes.string,
    accept: PropTypes.object,
    disabled: PropTypes.bool.isRequired,
    values: PropTypes.array.isRequired,
    onUpload: PropTypes.func.isRequired,
    onClickChip: PropTypes.func.isRequired,
    onDeleteChip: PropTypes.func.isRequired,
};