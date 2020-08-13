import React,{Component} from 'react';
import './AdikaPagination.scss'
import rootStores from '../../../stores';
import { HOME_PAGE_SOTRE } from '../../../stores/Stores';
import { observer } from 'mobx-react';

const homePageStore = rootStores[HOME_PAGE_SOTRE];
@observer
class AdikaPagination extends Component{
    onSelectPage = (pageNumber) => {
        homePageStore.setCurrentPage(pageNumber);
    }

    renderPagination = () => {
        const {pagesCount} = this.props;
        const selectedPage = homePageStore.getCurrentPage;
        const pages = pagesCount.map(page => {
            const isPageSelected = page === selectedPage;
            const selecetClass = isPageSelected ? 'current' : '';
            return(
                  <li onClick={() => this.onSelectPage(page)} className={`page-number ${selecetClass}`} key={page}>{page}</li>
            )
        })

        return (
            <ul className={'row'}>
                {pages}
            </ul>
        );
    }

    render(){
        return(
            <div className={'container'}>
                <div className={'pagination-numbers'}>
                    {this.renderPagination()}
                </div>
            </div>
        )
    }
}

export default AdikaPagination;