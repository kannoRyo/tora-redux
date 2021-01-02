import React from 'react'
import { useSelector } from 'react-redux'
import {
    getUserId,
    getUserUsername
} from '../reducks/users/selectors'

const Home = ()=>{
    const selectors = useSelector(state => state)
    const uid = getUserId(selectors)
    const username = getUserUsername(selectors)

    return(
        <div>
            <h2>ホーム</h2>
            <p>ユーザーID:{uid}</p>
            <p>ユーザーネーム:{username}</p>
        </div>

    )
}

export default Home