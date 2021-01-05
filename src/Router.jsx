import React from 'react'
import {Route, Switch} from 'react-router'
import {SignIn, Home, SignUp,ProductEdit,ProductDetail, Reset } from './templates/index'
import Auth from './Auth'


const Router = () =>{
    return(
        <>
        <Switch>
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/reset" component={Reset} />

            <Auth>
                <Route exact path="(/)?" component={Home} />
                <Route exact path="/product/:id?" component={ProductDetail} />
                <Route path="/product/edit(/:id)?" component={ProductEdit} />
            </Auth>
        </Switch>
        </>
    )
}

export default Router