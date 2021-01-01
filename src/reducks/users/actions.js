export const SIGN_IN = "SIGN_IN"
export const SIGN_OUT = "SIGN_OUT"

export const signInAction = (uesrState)=>{
    return{
        type:"SIGN_IN",
        payload:{
            isSignIn: true,
            uid: uesrState.uid,
            username: uesrState.username
        }
    }
}

export const signOutAction = ()=>{
  return{
    type: "SIGN_OUT",
    payload:{
      isSignIn:false,
      uid:'',
      username:''
    }
  }
}

