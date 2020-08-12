import React from 'react';

const ProductItem = ({product}) => {
    const firstImageToDisplay = product.images[0];
    const secondImageToDisplay = product.images[1];

    return(
            <div className={'product-container col-lg-15 col-md-3 col-6'}>
                <div style={{backgroundImage:`url(${firstImageToDisplay})`,paddingTop:'130%',backgroundSize:'contain',backgroundPosition:'center center',backgroundRepeat:'no-repeat'}}/>
                <div className={'product-title-price'}> 
                    <h1 className={'product-title'}>{product.name}</h1>
                    <span className={'product-price'}>{product.price + product.currency}</span>
                </div>
            </div>
    )
}

export default ProductItem;