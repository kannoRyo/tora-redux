import{
    createStore as reduxCreateStore,
    combineReducers,
} from 'redux'

// import {ProductReducers} from '../products/reducers'
import {UserReducers} from '../users/reducers.js'

console.log(UserReducers)
const createStore = ()=>{
    return reduxCreateStore( 
        combineReducers({　　　　　　　　　　　　　　
            users: UserReducers
        })
    )
}

export default createStore