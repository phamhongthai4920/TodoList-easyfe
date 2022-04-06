import React from 'react';
import InputField from '../../../../components/form-controls/InputField';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Button } from '@material-ui/core'
function TodoForm({ onSubmit }) {
    const schema = yup.object().shape({
        title: yup.
            string().required('please enter title').min(5),
    })

    const form = useForm({
        defaultValues: {
            title: '',

        },
        resolver: yupResolver(schema)
    })


    const handleSubmit = values => {
        if (onSubmit) {
            onSubmit(values)
            form.reset()
        }
    }

    return (
        <form onSubmit={form.handleSubmit(handleSubmit)} >
            <InputField name="title" label="todo" form={form} />

        </form>
    );
}

export default TodoForm;