import React from 'react'
import { Box, Button, TextField, Paper, Grid, Typography, Divider } from '@mui/material';
import { purple } from '@mui/material/colors';

const UserAdd = () => {
    return (
        <Grid container spacing={2} >

            <Grid component={Paper} item p={3} xs={4} sx={{ marginLeft: 'auto', marginRight: 'auto', marginTop: "25px" }}>
                <Typography variant="h6" sx={{ color: purple.A200, marginBottom: '10px' }} >Add User</Typography>
                <hr />
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"

                >
                    <Box mb={2}>
                        <TextField id="firstName" label="FirstName" variant="filled" fullWidth />
                    </Box>

                    <TextField sx={{ marginBottom: '20px' }} id="lastName" label="LastName" variant="filled" fullWidth />
                    <Box mb={2}>
                        <TextField id="email" label="Email" variant="filled" fullWidth />
                    </Box>
                    <Box mb={2}>
                        <TextField id="avatar" label="Avatar" variant="filled" fullWidth />
                    </Box>

                    <Button variant="contained" fullWidth>Add</Button>
                </Box>

            </Grid>
        </Grid >

    );
}

export default UserAdd;