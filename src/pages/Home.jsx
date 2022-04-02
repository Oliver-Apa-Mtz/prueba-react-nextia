import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Header from '../components/Header'
import BenevitsList from '../containers/BenevitsList'

import { API } from '../constants'
import { setWallets } from '../actions'

function Home()  {
    const dispatch = useDispatch()
    const wallets = useSelector(state => state.wallets)

    useEffect(() => {
        fetch(API + 'member/wallets')
            .then(response => response.json())
            .then(data => dispatch(setWallets(data)))
    })

	return (
		<div>
			<Header />
            {wallets.map(item => (
                <BenevitsList key={'wallet'+item.id} wallet={item} />
            ))}
		</div>
	)
}

export default Home