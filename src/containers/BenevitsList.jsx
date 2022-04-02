import React, { useState, useEffect } from 'react'

import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import BenevitsItem from '../components/BenevitsItem'
import BenevitsItemSkeleton from '../components/BenevitsItemSkeleton'

const BenevitsList = ({wallet}) => {
    const [dataReady, setDataReady] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setDataReady(true)
        }, 2000)
    })

    return (
        <Grid p={2}>
            <Typography variant="h6" component="div" mb={1}>
                {wallet ? wallet.name : 'Sin nombre'}
            </Typography>
            <Grid container spacing={2}>
                {dataReady && (
                <Grid item xs={6} md={8}>
                    <BenevitsItem />
                </Grid>
                )}
                {!dataReady && (
                <Grid item xs={6} md={8}>
                    <BenevitsItemSkeleton />
                </Grid>
                )}
            </Grid>
        </Grid>
    )
}

export default BenevitsList