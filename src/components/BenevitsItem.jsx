import React from 'react'

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const BenevitsItem = () => {
    return (
        <Card sx={{ maxWidth: '100%' }}>
            <CardMedia
                component="img"
                height="100"
                image="https://mui.com/static/images/cards/paella.jpg"
                alt="Paella dish"
            />
            <CardContent style={{padding: '10px'}}>
                <Typography style={{fontSize: '12px'}}>
                    This impressive paella is a perfect party dish and a fun meal to cook
                </Typography>
            </CardContent>
        </Card>
    )
}

export default BenevitsItem