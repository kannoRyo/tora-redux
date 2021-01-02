import React from 'react'
import {TextField} from '@material-ui/core'

const TextInput = (props)=>{
    return (
        <TextField
            fullWidth={props.fullWidth}
            label={props.label}
            marign="dense"
            multiline={props.multiline}
            rows={props.rows}
            required={props.required}
            value={props.value}
            type={props.type}
            onChange={props.onChange}
        />
    )
}

export default TextInput