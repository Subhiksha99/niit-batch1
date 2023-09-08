import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    IconButton
} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

const Customers = () => {
    const customers = [
        {
            "id": 7,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://reqres.in/img/faces/7-image.jpg"
        },
        {
            "id": 8,
            "email": "lindsay.ferguson@reqres.in",
            "first_name": "Lindsay",
            "last_name": "Ferguson",
            "avatar": "https://reqres.in/img/faces/8-image.jpg"
        },
        {
            "id": 9,
            "email": "tobias.funke@reqres.in",
            "first_name": "Tobias",
            "last_name": "Funke",
            "avatar": "https://reqres.in/img/faces/9-image.jpg"
        }
    ];

    return (
        <Container maxWidth="xl" sx={{ marginTop: '25px' }}>
            <Button component={Link} to="/user/add" variant="contained" sx={{ marginBottom: "15px", float: "right" }}>Add User</Button>
            <TableContainer component={Paper} elevation={3} >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Avatar</TableCell>
                            <TableCell align="left">FirstName</TableCell>
                            <TableCell align="left">LastName</TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="left">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {customers.map((c) => (
                            <TableRow
                                key={c.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {c.id}
                                </TableCell>
                                <TableCell align="right">
                                    <Card sx={{ maxWidth: 100 }}>
                                        <CardMedia
                                            component="img"
                                            height="100"
                                            image={c.avatar}
                                            alt={c.full_name}
                                        />
                                    </Card>
                                </TableCell>
                                <TableCell align="left">{c.first_name}</TableCell>
                                <TableCell align="left">{c.last_name}</TableCell>
                                <TableCell align="left">{c.email}</TableCell>
                                <TableCell align="left">
                                    <IconButton aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                    <IconButton aria-label="edit" sx={{ marginLeft: "10px" }}>
                                        <EditTwoToneIcon />
                                    </IconButton>

                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer >
        </Container>
    );
}

export default Customers;