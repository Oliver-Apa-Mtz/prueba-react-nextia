import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { red } from '@mui/material/colors'

import logo from '../assets/img/logo.png'

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar style={{backgroundColor: red['A400']}}>
                    <Grid container>
                        <Grid item xs={6} sm={6} md={6}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                            }}>
                            <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 1 }}>
                                <MenuIcon />
                            </IconButton>
                            <img src={logo} alt="logo" className="object-center lg:w-full lg:h-full"/>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6}
                            style={{
                                display: 'flex',
                                justifyContent: 'right',
                                alignItems: 'center',
                            }}>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header