import React,{Component} from 'react';
import './ProductsList.scss';
import {ProductListToDelete} from '../../common/ProductListToDelete';
import ProductItem from './ProductItem';
import AdikaPagination from '../../components/adikaBadge/adikaPagination/AdikaPagination';
import rootStores from '../../stores/index';
import {HOME_PAGE_SOTRE} from '../../stores/Stores';
import { observer } from 'mobx-react';

const homePageStore = rootStores[HOME_PAGE_SOTRE];
@observer
class ProductsList extends Component {
    renderProducts = () => {
        const proudctsList = homePageStore.getProducts;
        const products = proudctsList.map(product => {
              return <ProductItem key={product.id} product={product}/>
          })
          return products;
      }

      getPagesNumber = () => {
        const productsCount = homePageStore.getPagesCount;
        const pages = [];
        for(let i=1 ; i <= productsCount ; i++) {
            pages.push(i); 
        }
        return pages;
      }

      render(){
        const productsCount = homePageStore.getPagesCount;  
        const pagesNumber = this.getPagesNumber();
        return(
            <div>
                <div className={'products-container container'}>
                    <div className={'row'}>
                        {this.renderProducts()}
                    </div>
                </div>
                {productsCount > 1 && <AdikaPagination pagesCount={pagesNumber}/>} 
            </div>
        )    
      }
}

export default ProductsList;
