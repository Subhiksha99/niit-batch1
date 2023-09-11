import React, { useState, useEffect } from 'react'

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
import axios from 'axios';

const Customers = () => {

    const [customers, setCustomers] = useState([]);

    // useEffect(()=>{},[])
    // axios.get(url)
    // axios.post(url, obj)
    // axios.delete(url+id);
    // axios.put(url, obj)

    useEffect(() => {
        axios.get('https://reqres.in/api/users')
            .then((response) => {
                console.log(response.data.data);
                setCustomers(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    /*
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
*/

    const handleDelete = (id) => {
        // send  delete req to delete user based on id
        //axios.delete('https://reqres.in/api/delete/' + id);
        axios.delete(`https://reqres.in/api/delete/${id}`)
            .then((response) => {
                console.log(response);
                // delete user from table in frontend after getting success response
                let newCustomers = customers.filter(c => c.id !== id);
                setCustomers(newCustomers);
            }).catch((error) => {
                console.log(error);
            });
    }
    return (
        <Container maxWidth="xl" sx={{ marginTop: '25px' }}>
            <Button component={Link} to="/customer/add" variant="contained" sx={{ marginBottom: "15px", float: "right" }}>Add User</Button>
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
                                        <DeleteIcon onClick={() => handleDelete(c.id)} />
                                    </IconButton>
                                    <IconButton component={Link} to={`/customer/update/${c.id}`} aria-label="edit" sx={{ marginLeft: "10px" }}>
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