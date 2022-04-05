import React from 'react'

import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const BenevitsItem = ({benevit, unlocked}) => {
    return (
        <Card sx={{ maxWidth: '100%', backgroundColor: unlocked ? benevit.primary_color : 'white', position: 'relative', boxShadow: 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;' }}>
            {unlocked && (
            <CardMedia
                component="img"
                height={'60px'}
                image={benevit.ally.mini_logo_full_path}
                alt={benevit.description}
                style={{width: '90%', margin: '0 auto'}}
            />
            )}
            <CardContent style={{padding: '10px', minHeight: '110px', backgroundColor: 'white'}}>
                {!unlocked && (
                <img src={benevit.vector_full_path} alt={benevit.description}
                    style={{display: 'block', height: '100px', margin: '0 auto'}} />
                )}
                <Typography className="card-info" style={{fontSize: '10px', minHeight: '110px'}} mb={2}>
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
                    <Grid style={{width: '100%', position: 'absolute', bottom: '10px', left: 0, textAlign: 'center'}}>
                        <Button style={{backgroundColor: '#EC5056', textTransform: 'capitalize'}} variant="contained">Lo quiero</Button>
                    </Grid>
                )}
            </CardContent>
        </Card>
    )
}

export default BenevitsItem