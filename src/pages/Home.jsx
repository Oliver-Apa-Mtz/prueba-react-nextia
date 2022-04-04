import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"

import axios from 'axios'

import Header from '../components/Header'
import BenevitsList from '../containers/BenevitsList'

import { API } from '../constants'
import { setWallets, setBenevits } from '../actions'

function Home()  {
    const dispatch = useDispatch()
    const wallets = useSelector(state => state.wallets)
    let navigate = useNavigate()

    useEffect(() => {
        if(!localStorage.getItem('token-nextia')){
            console.log('no hay token')
            navigate('/')
        }
    }, [])

    useEffect(() => {
        axios.get(API + 'member/wallets')
            .then(data => dispatch(setWallets(data.data)))
    }, [])

    useEffect(() => {
        let token = localStorage.getItem('token-nextia')
        axios.get(API + 'member/landing_benevits', {
            headers: {'Authorization': token},
        })
            .then(data => dispatch(setBenevits(data.data)))
    }, [])

    const signOut = () => {
        axios.delete(API + 'logout')
            .then(data => {
                console.log(data)
                localStorage.removeItem('token-nextia')
                navigate('/')
            })
            .catch(error => console.log(error))
    }

	return (
		<div>
			<Header signOut={signOut} />
            {wallets.map(item => (
                <BenevitsList key={'wallet'+item.id} wallet={item} />
            ))}
		</div>
	)
}

export default Home