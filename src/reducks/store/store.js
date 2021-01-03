import{
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware
} from 'redux'
import {connectRouter, routerMiddleware} from 'connected-react-router'
import thunk from 'redux-thunk'

import {ProductsReducers} from '../products/reducers'
import {UserReducers} from '../users/reducers'

const createStore = (history)=>{
    return reduxCreateStore( 
        combineReducers({　　　　　　　　　　　　　　
            router: connectRouter(history),
            users: UserReducers,
            products: ProductsReducers,
        }),
        applyMiddleware(
            routerMiddleware(history),
            thunk
        )
    )
}

export default createStore