import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';


const Nav = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>

                    <Typography variant="h6" component="div">
                        Material-App
                    </Typography>
                    <Box>
                        <Button color="inherit" component={NavLink} to="/">Home</Button>
                        <Button color="inherit" component={NavLink} to="/products">Products</Button>
                        <Button color="inherit" component={NavLink} to="/customers" >Customers</Button>
                    </Box>
                    <Box sx={{ marginLeft: 'auto' }}>
                        <Button color="inherit" component={NavLink} to="/login">Login</Button>
                        <Button color="inherit" component={NavLink} to="/register">Register</Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Nav;