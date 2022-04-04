import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from "react-router-dom"

import axios from 'axios'

import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import MuiAlert from '@mui/material/Alert'

import logo from '../assets/img/logo.png'
import Loading from '../components/Loading'

import { API } from '../constants'

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(true)
    const [validForm, setValidForm] = useState(true)
    const [messageError, setMessageError] = useState('')

    let navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem('token-nextia')){
            navigate('home')
        }else{
            setTimeout(() => {
                setLoading(false)
            }, 1000)
        }
    })

    const inputRef = useRef()

    const setFormValidate = (message) => {
        setMessageError(message)
        setValidForm(false)
        setTimeout(() => {
            setValidForm(true)
        }, 2000)
    }

    const changeEmail = (event) => {
        setEmail(event.target.value)
    }

    const changePassword = (event) => {
        setPassword(event.target.value)
    }

    const setDataUser = (data) => {
        localStorage.setItem('token-nextia', data.headers.authorization)
        navigate('Home')
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(!email && !password){
            setFormValidate('Campos incompletos')
        }
        if(email && !password){
            inputRef.current.focus();
        }
        if(email && password) {
            axios.post(API + 'login', {
                user: {
                    "email": email, 
                    "password": password
                }
            })
            .then(data => setDataUser(data))
            .catch(error => setFormValidate('Ocurrio un error, intentelo de nuevo'));
        }
    };

    return (
        <Grid>
            {loading && (
            <Grid container component="main" sx={{ height: '100vh' }}>
                <Grid item xs={12}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <div className="aspect-w-1 aspect-h-1 rounded-md text-center">
                        <img src={logo} alt="logo" className="object-center logo-animate lg:w-full lg:h-full"/>
                        <Loading></Loading>
                    </div>
                </Grid>
            </Grid>
            )}
            {!loading && (
            <Grid container component="main" sx={{ height: '100vh' }}>
                <Grid item xs={false} sm={6} md={7}
                    sx={{
                        backgroundImage: 'url(https://images.unsplash.com/photo-1465547277055-25135ea1cb56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                        t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}/>
                <Grid item xs={12} sm={6} md={5} component={Paper} elevation={6} square
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}>
                        <div className="aspect-w-1 aspect-h-1 rounded-md">
                            <img src={logo} alt="logo" className="object-center lg:w-full lg:h-full"/>
                        </div>
                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                            <input className="inputs" type="text" required id="email" name="email" value={email} onChange={changeEmail} />
                            <input className="inputs" required type="password" id="password" name="password" value={password} onChange={changePassword} ref={inputRef} />
                            <Button className="butttons" type="submit" disabled={email.length === 0} fullWidth variant="contained" sx={{ bgcolor: '#EC5056', mt: 3, mb: 2, borderRadius: 10 }}>
                                Entrar
                            </Button>
                        </Box>
                        {!validForm && (
                        <Alert severity="error">{messageError}</Alert>
                        )}
                    </Box>
                </Grid>
            </Grid>
            )}
        </Grid>
    );
}

export default Login