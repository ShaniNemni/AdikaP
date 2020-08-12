import React,{useState} from 'react';
import './ProductsList.scss';
import {ProductListToDelete} from '../../common/ProductListToDelete';
import ProductItem from './ProductItem';
import AdikaPagination from '../../components/adikaBadge/adikaPagination/AdikaPagination';

const ProductsList = () => {
    const [productsList,setProducts] = useState([]);
    const [productsCount,setPageNumer] = useState(1);

    const renderProducts = () => {
      const products = ProductListToDelete.map(product => {
            return <ProductItem product={product}/>
        })

        return products;
    }

    const getPagesNumber = () => {
        const pages = [];
        for(let i=1 ; i <= productsCount ; i++) {
            pages.push(i); 
        }
        return pages;
    }
    
    const pagesNumber = getPagesNumber();
    return(
        <div>
            <div className={'products-container container'}>
                <div className={'row'}>
                    {renderProducts()}
                </div>
            </div>
            {productsCount > 1 && <AdikaPagination pagesCount={pagesNumber}/>} 
        </div>
    )

}

export default ProductsList;