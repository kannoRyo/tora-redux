import * as Actions from './actions'
import {initialState} from '../store/initialState'


export const ProductsReducers = (state = initialState.products, action)=>{
    switch(action.type){
        default:
            return state
    }
}