import React from 'react'
import { useSelector } from 'react-redux'
import {getUserId} from '../reducks/users/selectors'

const Home = ()=>{
    const selectors = useSelector(state => state)
    const uid = getUserId(selectors)
    console.log(selectors.users)

    return(
        <div>
            <h2>ホーム</h2>
            <p>{uid}</p>
        </div>

    )
}

export default Home