import React, { useState, useEffect } from 'react'
//import ProductService from '../services/productService';
import { getAllProductsAction } from '../actions/productActions';
import { useDispatch, useSelector } from 'react-redux';

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
            {products && products.map(p => (<p key={p.id}>{p.title}</p>))}
        </div>
    );
}

export default Products;