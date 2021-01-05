import React from 'react'
import {Route, Switch} from 'react-router'
<<<<<<< HEAD
=======
import {SignIn, Home, SignUp,ProductEdit,ProductDetail, ProductList,Reset } from './templates/index'
>>>>>>> @{-1}
import Auth from './Auth'


const Router = () =>{
    return(
        <>
        <Switch>
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/reset" component={Reset} />

            <Auth>
<<<<<<< HEAD
                <Route exact path="(/)?" component={ProductList} />
=======
                <Route exact path="/product/:id?" component={ProductDetail} />
>>>>>>> @{-1}
                <Route path="/product/edit(/:id)?" component={ProductEdit} />
            </Auth>
        </Switch>
        </>
    )
}

export default Router