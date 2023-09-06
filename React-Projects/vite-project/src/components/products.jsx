import React, { useState } from 'react';
import { products } from '../assets/data/products';
import ProductCard from './productCard';

const Products = () => {

    const [productList, setProductList] = useState(products);

    const [categories, setCategories] = useState([
        "men's clothing", "jewelery", "electronics", "women's clothing"
    ])


    return (
        <div className='mt-5'>
            <div className='row'>
                <div className='col-sm-2 col-xs-12'>
                    <ul className="list-group shadow">
                        {categories.map(c => (<li className="list-group-item" key={c}>{c}</li>))}
                    </ul>
                </div>
                <div className='col-sm-10 col-xs-12'>
                    <div className="row">
                        {productList.map(p => (
                            <div key={p.id} className='col-lg-3 col-md-4 col-sm-6 col-xm-12 '>
                                <ProductCard product={p} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;

