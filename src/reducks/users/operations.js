import {signInAction} from './actions'
import {push} from 'connected-react-router'
import { auth, FirebaseTimestamp,db } from '../../firebase/index'
 
export const signIn = (email,password) =>{
    return async　(dispatch) =>{
        //Validation
        if(email === "" || password === "" ){
            alert('必須項目が未入力です')
            return false
        }

        await auth.signInWithEmailAndPassword(email, password)
            .then((result)=>{
                const user = result.user

                if(user){
                    const uid = user.uid
                     db.collection('users').doc(uid).get()
                        .then((snapshot)=>{
                            const data = snapshot.data()
                            dispatch(signInAction({
                                role: data.role,
                                uid: uid,
                                username: data.username
                            }))

                            dispatch(push('/'))
                        })
                }
            })
    }
}

export const signUp = (username,email,password,confirmPassword)=>{
    return async (dispatch)=>{
        //Validation     
        if(username === "" || email === "" || password === "" || confirmPassword === "" ){
            alert('必須項目が未入力です')
            return false
        }
        if(password !== confirmPassword){
            alert('パスワードが一致しません。もう一度お試しください。')
            return false
        }

        return auth.createUserWithEmailAndPassword(email,password)
            .then(result =>{
                const user = result.user
                if(user){
                    const uid = user.uid
                    const timestamp = FirebaseTimestamp.now()
                    
                    const userInitialData = {
                        create_at: timestamp,
                        email: email,
                        role: "customer",
                        uid: uid,
                        updated_at: timestamp,
                        username: username,
                    }

                    db.collection('users').doc(uid).set(userInitialData)
                        .then(()=>{
                            dispatch(push('/'))
                        })
                }
            })
    }
}