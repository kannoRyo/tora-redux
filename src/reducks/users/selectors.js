import {createSelector} from 'reselect'

const usersSelector = (state) => state.users

export const getIsSignedIn = createSelector(
    [usersSelector],
    state => state.isSignedIn
)

export const getUserId = createSelector(
    [usersSelector],
    state => state.uid
)

export const getUserUsername = createSelector(
    [usersSelector],
    state => state.username
)

export const getProductsInCart= createSelector(
    [usersSelector],
    state => state.cart
)

export const getOrdersHistory= createSelector(
    [usersSelector],
    state => state.orders
)

export const getCustomerId= createSelector(
    [usersSelector],
    state => state.customer_Id
)

export const getPaymentMethodId= createSelector(
    [usersSelector],
    state => state.payment_method_Id
)
