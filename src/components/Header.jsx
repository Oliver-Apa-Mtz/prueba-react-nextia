import React, { useState } from 'react'

import { styled } from '@mui/material/styles'
import MuiDrawer from '@mui/material/Drawer'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Button from '@mui/material/Button'
import CloseIcon from '@mui/icons-material/Close'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogTitle from '@mui/material/DialogTitle'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

import logo from '../assets/img/logo.png'

const drawerWidth = 300;

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      '& .MuiDrawer-paper': {
        backgroundColor: '#EC5056',
        height: '100vh',
        position: 'fixed',
        left: '-72px',
        top: '55px',
        whiteSpace: 'nowrap',
        borderRight: 'none',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
        ...(!open && {
          overflowX: 'hidden',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          width: theme.spacing(7),
          [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
          },
        }),
      },
    }),
)

const Header = ({signOut}) => {
    const [open, setOpen] = useState(false)
    const [openComfirm, setOpenComfirm] = useState(false)

    const toggleDrawer = () => {
        setOpen(!open)
    }

    return (
        <Box sx={{ flexGrow: 1 }} style={{position: 'fixed', top: 0, left: 0, width: '100%', zIndex: '99', height: '55px'}}>
            <AppBar position="static">
                <Toolbar style={{backgroundColor: '#EC5056'}}>
                    <Grid container>
                        <Grid item xs={6} sm={6} md={6}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                            }}>
                            <IconButton onClick={toggleDrawer} size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 1 }}>
                                {open ? <CloseIcon /> : <MenuIcon />}
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
            <Drawer variant="permanent" open={open}>
                <Toolbar
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        px: [1],
                    }}>
                    <List>
                        <ListItem style={{width: '240px', marginLeft: '70px'}}>
                            <ListItemButton style={{width: '100%'}}>
                                <ListItemText style={{color: 'white'}} primary="Benevits" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Toolbar>
                <Button onClick={() => setOpenComfirm(true)} style={{width: '200px', position: 'absolute', right: '10px', bottom: '70px', backgroundColor: 'white', color: '#EC5056'}} variant="contained">Salir</Button>
            </Drawer>
            <Dialog
                open={openComfirm}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">
                    ¿Desea cerrar sesión?
                </DialogTitle>
                <DialogActions>
                    <Button onClick={() => setOpenComfirm(false)}>Cancelar</Button>
                    <Button onClick={() => signOut()} autoFocus>Aceptar</Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}

export default Header