import React from 'react';
import { TextField } from '@material-ui/core'
import { Controller } from 'react-hook-form';

function InputField({ name, label, form }) {
    const { control, formState: { errors } } = form
    const hasError = !!errors[name]
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <TextField
                    {...field}
                    label={label}
                    error={hasError}
                    helperText={errors[name]?.message}
                />)}


        />

    );
}

export default InputField;