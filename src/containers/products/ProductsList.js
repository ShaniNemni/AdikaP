import React,{Component} from 'react';
import {isMobile} from 'react-device-detect';
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
        const colClass = this.getColClass();
        const products = proudctsList.map(product => {
              return <ProductItem colClass={colClass} key={product.id} product={product}/>
          })
          return products;
      }

      getColClass = () => {
          const classCol = homePageStore.rowsToDisplay;
          const prodInRows = homePageStore.getProductCountInRow;
          if(isMobile) {
            return `col-${classCol}`;
          }else if(prodInRows === 5) {
            return `costum-col-5`;
          }
          return `col-lg-${classCol}`;
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
                    <div className={`row`}>
                        {this.renderProducts()}
                    </div>
                </div>
                {productsCount > 1 && <AdikaPagination pagesCount={pagesNumber}/>} 
            </div>
        )    
      }
}

export default ProductsList;
