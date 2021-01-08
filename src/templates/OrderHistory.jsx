import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import List from '@material-ui/core/List'
import {makeStyles} from '@material-ui/core'
import {getOrdersHistory} from '../reducks/users/selectors'
import { fetchOrdersHistory } from '../reducks/users/operations'
import {OrderHistoryItem,} from '../components/Products/index'


const useStyles = makeStyles((theme)=>({
    orderList:{
        backgroundColor: theme.palette.grey['100'],
        margin: '0 auto',
        padding: 32,
        [theme.breakpoints.down('sm')]:{
            width: '100%'
        },
        [theme.breakpoints.up('md')]:{
            width: 768
        }
    }
}))

const OrderHistory = ()=>{
    const dispatch = useDispatch()
    const selector = useSelector(state => state)
    const classes = useStyles()
    const orders = getOrdersHistory(selector)

    useEffect(()=>{
        dispatch(fetchOrdersHistory())
    },[])


    return(
        <section className="c-section-wrapin">
            <List className={classes.orderList}>
                {orders.length > 0 && (
                    orders.map(order => <OrderHistoryItem  key={order.id} order={order}/>)
                )}
            </List>
        </section>
    )
}

export default OrderHistory