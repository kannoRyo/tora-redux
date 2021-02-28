export const SIGN_IN = "SIGN_IN"
export const SIGN_OUT = "SIGN_OUT"
export const FETCH_PRODUCTS_IN_CART = "FETCH_PRODUCTS_IN_CART"
export const FETCH_ORDERS_HISTORY = "FETCH_ORDERS_HISTORY"
export const UPDATE_USER_ACTION = "UPDATE_USER_ACTION"

export const fetchProductsInCartAction  = (products)=>{
  return{
    type:"FETCH_PRODUCTS_IN_CART",
    payload: products
}
}

export const fetchOrdersHistoryAction  = (history)=>{
  return{
    type:"FETCH_ORDERS_HISTORY",
    payload: history
}
}

export const signInAction = (userState)=>{
    return{
        type:"SIGN_IN",
        payload:{
            isSignedIn: true,
            email: userState.email,
            role: userState.role,
            uid: userState.uid,
            username: userState.username,
            customer_Id: userState.customer_Id,
            payment_method_Id: userState.payment_method_Id
        }
    }
}

export const signOutAction = ()=>{
  return{
    type: "SIGN_OUT",
    payload:{
      isSignedIn:false,
      role:'',
      uid:'',
      username:''
    }
  }
}

export const updateUserStateAction = (userState) => {
  return {
    type: "UPDATE_USER_ACTION",
    payload: userState
  }
}