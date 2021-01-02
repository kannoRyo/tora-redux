import React, {useState, useCallback} from 'react'
import { useDispatch } from 'react-redux'
import {
    TextInput,
    PrimaryButton
} from '../components/UIkit/index'
import {signUp} from '../reducks/users/operations'

const SignUp = ()=>{
    const dispatch = useDispatch()

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const inputUsername = useCallback((e)=>{
        setUsername(e.target.value)
    },[setUsername])
    const inputEmail = useCallback((e)=>{
        setEmail(e.target.value)
    },[setEmail])
    const inputPassword = useCallback((e)=>{
        setPassword(e.target.value)
    },[setPassword])
    const inputConfirmPassword = useCallback((e)=>{
        setConfirmPassword(e.target.value)
    },[setConfirmPassword])

    return(
        <div className="c-section-container">
            <h2 className="u-text__headline u-text-center">アカウント登録</h2>
            <div className="module-spacer--medium" />
            <TextInput
                fullWidth={true} label="ユーザー名" mutiline={false} rows={1}
                required={1} value={username} type="text" onChange={inputUsername}
            />
            <TextInput
                fullWidth={true} label="メールアドレス" mutiline={false} rows={1}
                required={1} value={email} type="email" onChange={inputEmail}
            />
            <TextInput
                fullWidth={true} label="パスワード" mutiline={false} rows={1}
                required={1} value={password} type="password" onChange={inputPassword}
            />
            <TextInput
                fullWidth={true} label="パスワード再確認" mutiline={false} rows={1}
                required={1} value={confirmPassword} type="password" onChange={inputConfirmPassword}
            />
            <div className="module-spacer--medium" />
            <div className="center">
                <PrimaryButton  
                    label="アカウントを登録する" 
                    onClick={()=> dispatch(signUp(username,email,password,confirmPassword))}    
                />
            </div>
        </div>
    )
}

export default SignUp