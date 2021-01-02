import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {SignIn} from '../reducks/users/operations'

const Login = ()=>{
    const dispatch = useDispatch()

    return(
        <div>
            <h2>ログイン</h2>
            <button　onClick={()=> dispatch(SignIn()) }>
                ログインする
            </button>
        </div>
    )
}

export default Login