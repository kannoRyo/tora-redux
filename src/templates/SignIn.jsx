import React, {useState, useCallback} from 'react'
import { useDispatch } from 'react-redux'
import {
    TextInput,
    PrimaryButton
} from '../components/UIkit/index'
import {signIn} from '../reducks/users/operations'

const SignIn = ()=>{
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const inputEmail = useCallback((e)=>{
        setEmail(e.target.value)
    },[setEmail])
    const inputPassword = useCallback((e)=>{
        setPassword(e.target.value)
    },[setPassword])

    return(
        <div className="c-section-container">
            <h2 className="u-text__headline u-text-center">サインイン</h2>
            <div className="module-spacer--medium" />
            <TextInput
                fullWidth={true} label="メールアドレス" mutiline={false} rows={1}
                required={1} value={email} type="email" onChange={inputEmail}
            />
            <TextInput
                fullWidth={true} label="パスワード" mutiline={false} rows={1}
                required={1} value={password} type="password" onChange={inputPassword}
            />
            <div className="module-spacer--medium" />
            <div className="center">
                <PrimaryButton  
                    label="Sign In" 
                    onClick={()=> dispatch(signIn(email,password))}    
                />
            </div>
        </div>
    )
}

export default SignIn