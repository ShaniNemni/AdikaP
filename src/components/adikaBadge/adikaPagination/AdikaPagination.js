import React,{useState} from 'react';
import './AdikaPagination.scss'

const AdikaPagination = ({pagesCount}) => {
    const [selectedPage,setPage] = useState(1);

    const onSelectPage = (pageNumber) => {
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