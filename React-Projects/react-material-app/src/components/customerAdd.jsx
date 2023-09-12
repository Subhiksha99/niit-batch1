import React, { useState } from 'react'
import { Box, Button, TextField, Paper, Grid, Typography, Divider } from '@mui/material';
import { purple } from '@mui/material/colors';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CustomerAdd = () => {
    const [customer, setCustomer] = useState({
        first_name: '',
        last_name: '',
        email: '',
        avatar: ''
    })

    const navigate = useNavigate();

    const handleChange = (event) => {
        let newCustomer = { ...customer };
        newCustomer[event.target.name] = event.target.value;
        setCustomer(newCustomer);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(customer);
        // send post request to rest api
        //axios.post(url, custObj)
        axios.post('https://reqres.in/api/users', customer)
            .then((res) => {
                console.log(res);
                alert('user added ' + customer.first_name + ' successfully');
                // redirect user to /customers page
                navigate('/customers');
            })
            .catch((err) => {
                console.log(err);
            });
    }
    return (
        <Grid container spacing={2} >

            <Grid component={Paper} item p={3} xs={4} sx={{ marginLeft: 'auto', marginRight: 'auto', marginTop: "25px" }}>
                <Typography variant="h6" sx={{ color: purple.A200, marginBottom: '10px' }} >Add Customer</Typography>
                <hr />
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit}
                >
                    <Box mb={2}>
                        <TextField value={customer.first_name} name="first_name" onChange={handleChange} id="first_name" label="FirstName" variant="filled" fullWidth />
                    </Box>
                    <Box mb={2}>
                        <TextField value={customer.last_name} name="last_name" onChange={handleChange} id="last_name" label="LastName" variant="filled" fullWidth />
                    </Box>
                    <Box mb={2}>
                        <TextField value={customer.email} name="email" onChange={handleChange} id="email" label="Email" variant="filled" fullWidth />
                    </Box>
                    <Box mb={2}>
                        <TextField value={customer.avatar} name="avatar" onChange={handleChange} id="avatar" label="Avatar" variant="filled" fullWidth />
                    </Box>

                    <Button type="submit" variant="contained" fullWidth>Add</Button>
                </Box>

            </Grid>
        </Grid >

    );
}

export default CustomerAdd;