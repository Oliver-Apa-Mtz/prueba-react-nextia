import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from "react-router-dom";

import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { red } from '@mui/material/colors'
import MuiAlert from '@mui/material/Alert';

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

    const inputRef = useRef()

    const setFormValidate = (message) => {
        setMessageError(message)
        setValidForm(false)
        setTimeout(() => {
            setValidForm(true)
        }, 2000)
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    })

    const handleSubmit = (event) => {
        console.log('entro')
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        setEmail(data.get('email'))
        setPassword(data.get('password'))
        if(!email && !password){
            setFormValidate('Campos incompletos')
        }
        if(email && !password){
            inputRef.current.focus();
        }
        if(email && password) {
            let params = {
                "email": email, 
                "password": password
                
            }
            console.log(params);
            fetch(API + 'login', {
                method: 'POST',
                body: JSON.stringify(params)
            })
                .then(response => response.json())
                .then(data => console.log(data))
            //navigate('Home');
        }
    };

    return (
        <Grid>
            {loading && (
            <Grid container component="main" sx={{ height: '100vh' }}>
                <Grid item xs={12} sm={6} md={5} component={Paper} elevation={6} square
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <div className="aspect-w-1 aspect-h-1 rounded-md text-center">
                        <img src={logo} alt="logo" className="object-center lg:w-full lg:h-full"/>
                        <Loading></Loading>
                    </div>
                </Grid>
            </Grid>
            )}
            {!loading && (
            <Grid container component="main" sx={{ height: '100vh' }}>
                <Grid item xs={false} sm={6} md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random)',
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
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <input className="inputs" type="text" required id="email" name="email" />
                            <input className="inputs" required type="password" id="password" name="password" ref={inputRef} />
                            <Button type="submit" fullWidth variant="contained" sx={{ bgcolor: red['A400'], mt: 3, mb: 2, borderRadius: 10 }}>
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