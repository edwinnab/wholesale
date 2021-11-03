/* jshint esversion: 6 */
import React from 'react'
import { TextField, Grid } from '@material-ui/core';
import {useFormContext, Controller } from 'react-hook-form';



const  FormInput = ({ name, label }) => {
const { control } = useFormContext();
    const isError = false;

    return (
        <Grid item xs={32} sm={6}>
            <Controller
            control={control}
            name={name}
            render = {({ field })=> (
                <TextField 
                    fullWidth
                    label={label}
                    required 
                />
            )}
            />
        </Grid>
    );
}

export default FormInput 