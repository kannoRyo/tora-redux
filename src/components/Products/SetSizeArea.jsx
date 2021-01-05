import React,{useCallback, useState, useEffect} from 'react'

import { TableContainer, Table, TableBody, TableCell, TableRow, makeStyles} from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'

import { TextInput } from '../UIkit/index'

const useStyles = makeStyles({
    iconCell:{
        height: 48 ,
        width: 48
    },
    checkIcon:{
        float: 'right'       
    }
})

const SetSizeArea = (props)=>{
    const classes = useStyles()

    const [index, setIndex] = useState(0)
    const [size, setSize] = useState('')
    const [quantity, setQuantity] = useState(0)

    const inputSize = useCallback((e)=>{
        setSize(e.target.value)
    })

    const inputQuantity = useCallback((e)=>{
        setQuantity(e.target.value)
    })

    const addSize = (index, size, quantity)=>{
        if(size=== "" || quantity === "" ){
            // Required input is blank
            return false
        }else{ 
            if(index === props.sizes.length){
                props.setSizes(prevState =>[
                    ...prevState,
                    {size: size, quantity: quantity}
                ])
                setIndex(index + 1)
                setSize('')
                setQuantity('')
            }else{
                const newSizes = props.sizes
                newSizes[index] = {size: size ,quantity: quantity}
                props.setSizes(newSizes)
                setIndex(newSizes.length)
                setSize('')
                setQuantity('')
            }
        }
    }

    const editSize = (index, size, quantity) =>{
        setIndex(index)
        setSize(size)
        setQuantity(quantity)
    }

    const deleteSize = (deleteIndex)=>{
        const newSizes = props.sizes.filter((item,i)    =>{
            return deleteIndex !== i
        })
        props.setSizes(newSizes)
    }

    useEffect(()=>{
        setIndex(props.sizes.length)
    },[props.sizes.length])

    return(
        <div>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>サイズ</TableCell>
                            <TableCell>数量</TableCell>
                            <TableCell className={classes.iconCell} />
                            <TableCell className={classes.iconCell} />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.sizes.length > 0 && (
                            props.sizes.map((item,i)=>(
                                <TableRow key={i}>
                                    <TableCell>{item.size}</TableCell>
                                    <TableCell>{item.quantity}</TableCell>
                                    <TableCell>
                                        <IconButton className={classes.iconCell}  onClick={()=> editSize(i, item.size, item.quantity)}>
                                            <EditIcon />
                                        </IconButton>
                                    </TableCell>
                                    <TableCell onClick={()=> deleteSize(i)}>
                                        <IconButton className={classes.iconCell}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
                <div>
                    <TextInput 
                        fullWidhth={false} label="サイズ" mutiline={false} rows={1}
                        required={true} type={"text"} value={size} onChange={inputSize}
                    />
                    <TextInput 
                        fullWidhth={false} label="数量" mutiline={false} rows={1}
                        required={true} type={"number"} value={quantity} onChange={inputQuantity}
                    />
                </div>
                <IconButton className={classes.checkIcon} onClick={()=>addSize(index, size, quantity)}>
                    <CheckCircleIcon />
                </IconButton>
            </TableContainer>
        </div>
    )
}

export default SetSizeArea