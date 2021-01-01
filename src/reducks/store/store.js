import{
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware
} from 'redux'

import {connectRouter, routerMiddleware} from 'connected-react-router'

// import {ProductReducers} from '../products/reducers'
import {UserReducers} from '../users/reducers.js'

const createStore = (history)=>{
    return reduxCreateStore( 
        combineReducers({　　　　　　　　　　　　　　
            router: connectRouter(history),
            users: UserReducers
        }),
        applyMiddleware(
            routerMiddleware(history)
        )
    )
}

export default createStore