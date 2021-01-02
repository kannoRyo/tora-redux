import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {
    getUserId,
    getUserUsername
} from '../reducks/users/selectors'

import {signOut} from '../reducks/users/operations'
import {Button} from '@material-ui/core'

const Home = ()=>{
    const dispatch = useDispatch()
    const selectors = useSelector(state => state)
    const uid = getUserId(selectors)
    const username = getUserUsername(selectors)

    return(
        <div>
            <h2>ホーム</h2>
            <p>ユーザーID:{uid}</p>
            <p>ユーザーネーム:{username}</p>
            <Button variant="contained" color="primary" onClick={()=> dispatch(signOut())}>ログアウトする</Button>
        </div>

    )
}

export default Home