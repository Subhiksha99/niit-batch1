import React from 'react';

const ProductCard = (props) => {
    return (
        <div className='d-flex align-items-stretch mb-3'>
            <div className="card shadow p-2 " >
                <img src={props.product.image} style={{ height: "150px" }} className="card-img-top" alt={props.product.title} />
                <div className="card-body" style={{ display: "flex", flexDirection: "column" }}>
                    <h6 className="card-title">{props.product.title}</h6>
                    <p className="card-text text-truncate">{props.product.description}</p>
                    <div className='d-grid gap-2 mt-auto'>
                        <a href="#" className="btn btn-secondary">More Details</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;