import React,{useState} from 'react'

import { TableContainer, Table, TableBody, TableCell,TableRow, makeStyles} from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'

const useStyles = makeStyles({
    iconCell:{
        padding:'8px 0 8px',
        height: 48,
        width: 48,
    }
})

const SizeTable = (props) =>{
    const classes = useStyles()
    const sizes = props.sizes

    return(
        <TableContainer>
            <Table>
                <TableBody>
                    {sizes.length > 0 ?(
                        sizes.map(item =>(
                            <TableRow key={item.size}>
                                <TableCell component="th" scope="row">
                                    {item.size}
                                </TableCell>
                                <TableCell>
                                    残り{item.quantity}点
                                </TableCell>
                                <TableCell className={classes.iconCell}>
                                    <IconButton onClick={()=>props.addProduct(item.size)}>
                                        <ShoppingCartIcon/>
                                    </IconButton>
                                </TableCell>
                                <TableCell className={classes.iconCell}>
                                        <FavoriteBorderIcon/>
                                </TableCell>
                            </TableRow>
                        ))):(
                            <div>売切</div>
                        )
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default SizeTable 