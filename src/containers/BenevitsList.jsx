import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import BenevitsItem from '../components/BenevitsItem'
import BenevitsItemSkeleton from '../components/BenevitsItemSkeleton'

const BenevitsList = ({wallet}) => {
    const benevits = useSelector(state => state.benevits)
    const [dataReady, setDataReady] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setDataReady(true)
        }, 2000)
    })

    return (
        <Grid p={2} mt={7}>
            <Typography variant="h6" component="div" mb={1}>
                {wallet ? wallet.name : 'Sin nombre'}
            </Typography>
            {!dataReady && (
            <Grid container spacing={2}>
                <Grid item xs={6} md={8}>
                    <BenevitsItemSkeleton />
                </Grid>
            </Grid>
            )}
            {dataReady && (
            <Grid container spacing={2}>
                {benevits.unlocked.map(item => (
                    item.wallet.id === wallet.id ?
                    <Grid key={'unlocked'+item.id} item xs={6} sm={4} md={3} lg={3}>
                        <BenevitsItem benevit={item} unlocked={true} />
                    </Grid> : null
                ))}
                {benevits.locked.map(item => (
                    item.wallet.id === wallet.id ?
                    <Grid key={'locked'+item.id} item xs={6} sm={4} md={3} lg={3}>
                        <BenevitsItem benevit={item} unlocked={false} />
                    </Grid> : null
                ))}
            </Grid>
            )}
        </Grid>
    )
}

export default BenevitsList