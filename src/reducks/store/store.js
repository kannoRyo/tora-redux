import{
    createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware
} from 'redux'
import {connectRouter, routerMiddleware} from 'connected-react-router'
import thunk from 'redux-thunk'

// import {ProductReducers} from '../products/reducers'
import {UserReducers} from '../users/reducers.js'

const createStore = (history)=>{
    return reduxCreateStore( 
        combineReducers({　　　　　　　　　　　　　　
            router: connectRouter(history),
            users: UserReducers
        }),
        applyMiddleware(
            routerMiddleware(history),
            thunk
        )
    )
}

export default createStore