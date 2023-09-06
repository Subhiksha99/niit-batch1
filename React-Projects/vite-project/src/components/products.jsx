import React, { useState } from 'react';
import { products } from '../assets/data/products';

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
                            <div key={p.id} className='col-lg-3 col-md-4 col-sm-6 col-xm-12 d-flex align-items-stretch mb-3'>
                                <div className="card shadow p-2" >
                                    <img src={p.image} style={{ height: "150px" }} className="card-img-top" alt={p.title} />
                                    <div className="card-body" style={{ display: "flex", flexDirection: "column" }}>
                                        <h6 className="card-title">{p.title}</h6>
                                        <p className="card-text text-truncate">{p.description}</p>
                                        <div className='d-grid gap-2 mt-auto'>
                                            <a href="#" className="btn btn-secondary">More Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;

