export const SIGN_OUT = "SIGNOUT"

export const signOutAction = ()=>{
  return{
    type: SIGN_OUT,
    payload:{
      isSignIn:false,
      uid:'',
      username:''
    }
  }
}

