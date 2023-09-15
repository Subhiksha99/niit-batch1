import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid';
import { useDispatch, useSelector } from 'react-redux';
import { getProductByIdAction } from '../actions/productActions';
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import { Button } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';

import CardActions from '@mui/material/CardActions';


const ProductDetails = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const product = useSelector(state => state.fakeStore.product);

    useEffect(() => {
        dispatch(getProductByIdAction(params.id));
    }, [])
    return (
        <Grid container spacing={2}>
            {product && <Grid item xs={4}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="194"
                        image={product.image}
                        alt={product.title}
                    />
                    <CardActions style={{ display: 'flex' }}>
                        <Button variant="contained">Add to Cart</Button>
                        <Button variant="outlined">Buy Now</Button>
                    </CardActions>
                </Card>
            </Grid>

            }
            {product &&
                <Grid item xs={8}>
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <small>{product.price}</small>
                </Grid>
            }
        </Grid>
    );
}
export default ProductDetails;
