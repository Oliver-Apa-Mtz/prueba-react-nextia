import React from 'react'

import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

const BenevitsItemSkeleton = () => {
    return (
        <Box p={0} m={0}>
            <Skeleton variant="rectangular" height={100} style={{marginBottom: 10}} />
            <Skeleton width="60%" />
            <Skeleton width="60%" />
        </Box>
    )
}

export default BenevitsItemSkeleton