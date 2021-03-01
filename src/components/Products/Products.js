import ProductItem from "./ProductItem";
import React from 'react';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

const Products = ({ products, loading }) => {
    if(loading){
        return <Spinner />
    }
    else{
        return (
            <div style={productStyle}>
                {products.map(product => (
                    <ProductItem key={product.id} product={product}/>
                ))}
            </div>
        )
    }
}

Products.propTypes ={
    products: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}
 const productStyle={
     display:'grid',
     gridTemplateColumns: 'repeat(3, 1fr)',
     gridGap: '1rem'
 }
export default Products
