import React from 'react';
import { useSelector } from 'react-redux'

const Home = () => {
    const products = useSelector(state => state.fakeStore.products);
    return (
        <div>
            <h1>Home Component</h1>
            {products && products.map(p => (
                <p key={p.id}>{p.id}</p>)
            )}
        </div>
    );
}

export default Home;