import React,{useState} from 'react';
import './ProductsList.scss';
import {ProductListToDelete} from '../../common/ProductListToDelete';
import ProductItem from './ProductItem';

const ProductsList = () => {

    const renderProducts = () => {
      const products = ProductListToDelete.map(product => {
            return <ProductItem product={product}/>
        })

        return products;
    }
    
    
    return(
        <div className={'products-container container'}>
            <div className={'row'}>
                {renderProducts()}
            </div>
        </div>
    )

}

export default ProductsList;