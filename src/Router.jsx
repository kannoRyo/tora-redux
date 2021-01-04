import React from 'react'
import {Route, Switch} from 'react-router'
import {SignIn, Home, SignUp,ProductEdit, Reset } from './templates/index'
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
                <Route path="/product/edit(/:id)?" component={ProductEdit} />
            </Auth>
        </Switch>
        </>
    )
}

export default Router