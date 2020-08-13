import React,{useState,useEffect} from 'react';
import './AdikaPagination.scss'
import rootStores from '../../../stores';
import { HOME_PAGE_SOTRE } from '../../../stores/Stores';

const homePageStore = rootStores[HOME_PAGE_SOTRE];
const AdikaPagination = ({pagesCount}) => {
    const [selectedPage,setPage] = useState(1);

    useEffect(() => {
        const currentPage = homePageStore.getCurrentPage;
        setPage(currentPage);
    }, [selectedPage])

    const onSelectPage = (pageNumber) => {
        homePageStore.setCurrentPage(pageNumber);
        setPage(pageNumber);
    }

    const renderPagination = () => {
        const pages = pagesCount.map(page => {
            const isPageSelected = page === selectedPage;
            const selecetClass = isPageSelected ? 'current' : '';
            return(
                  <li onClick={() => onSelectPage(page)} className={`page-number ${selecetClass}`} key={page}>{page}</li>
            )
        })

        return (
            <ul className={'row'}>
                {pages}
            </ul>
        );
    }
    return(
        <div className={'container'}>
            <div className={'pagination-numbers'}>
                {renderPagination()}
            </div>
        </div>
    )
}

export default AdikaPagination;