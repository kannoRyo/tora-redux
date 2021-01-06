export const SIGN_IN = "SIGN_IN"
export const SIGN_OUT = "SIGN_OUT"
export const FETCH_PRODUCTS_IN_CART = "FETCH_PRODUCTS_IN_CART"

export const fetchProductsInCartAction  = (products)=>{
  return{
    type:"FETCH_PRODUCTS_IN_CART",
    payload: products
}
}

export const signInAction = (uesrState)=>{
    return{
        type:"SIGN_IN",
        payload:{
            isSignedIn: true,
            role: uesrState.role,
            uid: uesrState.uid,
            username: uesrState.username
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

