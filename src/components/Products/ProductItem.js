import React from 'react'
import PropTypes from 'prop-types';

const ProductItem = ({product: {price, image, title}}) => {
    const salePrice = (price) =>{
        return price *0.9 ;
    }
        return (
            <div className="card text-center">
                <h4 id='price' >{title}</h4>
                <img src={image} alt="" className="" 
                style={{width : '100px'}}>
                </img>
                <h4 id="price" style={{bottom:0}}>
                    Price: {price}<br/>
                    Sale Value: {salePrice(price)}
                </h4>              
                {/* <div>
                    <a href={} className="btn btn-dark btn-sm my-1"></a>
                </div>  */}
            </div>
        )
}
ProductItem.propTypes = {
    product:PropTypes.object.isRequired
}
export default ProductItem
