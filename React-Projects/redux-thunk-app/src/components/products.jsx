import React, { useState, useEffect } from 'react'
//import ProductService from '../services/productService';
import { getAllProductsAction } from '../actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Grid, Typography } from '@mui/material';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import { Link } from 'react-router-dom';


const Products = () => {
    //const [productList, setProductList] = useState([]);
    const dispatch = useDispatch();
    const products = useSelector(state => state.fakeStore.products);
    useEffect(() => {
        dispatch(getAllProductsAction());

        /*
        // axios.get(url).then().catch();
        //console.log(ProductService.getProducts());
        ProductService.getProducts()
            .then(res => {
                console.log(res);
                setProductList(res.data);
            })
            .catch(console.error(() => console.log(error)))
            */

    }, [])
    return (
        <div>
            <h1> Products Component</h1>
            <Grid container spacing={2}>
                {products ? products.map(p => (
                    < Grid key={p.id} item xs={8} md={3} style={{ display: "flex" }}>
                        <Link to={`/product/${p.id}`}>
                            <Card key={p.title} sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    height="194"
                                    image={p.image}
                                    alt={p.title}
                                />
                                <CardContent>
                                    <Typography variant="body2" color="text.secondary">
                                        {p.title}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>
                )) : <p>Loading...</p>}
            </Grid>
        </div >
    );
}

export default Products;