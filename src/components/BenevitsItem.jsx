import React from 'react'

import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const BenevitsItem = ({benevit, unlocked}) => {
    return (
        <Card sx={{ maxWidth: '100%', backgroundColor: unlocked ? benevit.primary_color : 'white', position: 'relative', boxShadow: '0 3px 6px 6px rgba(0,0,0,.08)' }}>
            <CardMedia
                component="img"
                height={unlocked ? '70px' : '80px'}
                image={unlocked ? benevit.ally.mini_logo_full_path : benevit.vector_full_path}
                alt={benevit.description}
                style={{width: unlocked ? '80%' : '40%', margin: '0 auto'}}
            />
            <CardContent style={{padding: '10px', minHeight: unlocked ? '110px' : '100px', backgroundColor: 'white'}}>
                <Typography style={{fontSize: '11px'}} mb={2}>
                    {benevit.title}
                </Typography>
                { unlocked && (
                <Grid style={{position: 'absolute', bottom: '10px'}}>
                    <Typography style={{fontSize: '12px'}}>
                        <b>{benevit.territories[0].name}</b>
                    </Typography>
                    <Typography style={{fontSize: '10px'}}>
                        Valido hasta: <b>{benevit.expiration_date}</b>
                    </Typography>
                </Grid>
                )}
                { !unlocked && (
                    <Grid style={{width: '100%', position: 'absolute', bottom: '10px', textAlign: 'center'}}>
                        <Button style={{backgroundColor: '#EC5056'}} variant="contained">Lo quiero</Button>
                    </Grid>
                )}
            </CardContent>
        </Card>
    )
}

export default BenevitsItem