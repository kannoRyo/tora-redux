import React from 'react'
import {Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles({
    button:{
        backgroundColor:'#4dd0e1',
        color:'#000',
        fontSize:'16px',
        height:48,
        marginBottom:'16px',
        width:'256px'
    }
})

const PrimaryButton = (props)=>{
    const classes = useStyles()
    return (
        <Button variant="contained" onClick={()=> props.onClick()} className={classes.button}>
            {props.label}
        </Button>
    )
}

export default PrimaryButton