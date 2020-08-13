import React,{useEffect,useState} from 'react';
import AdikaNavbar from "../../components/adikaNavbar/AdikaNavbar";
import AdikaCover from '../../components/adikaCover/AdikaCover';
import CategoriesList from '../categories/CategoriesList ';
import DisplayConditions from '../displayConditions/DisplayConditions';
import ProductsList from '../products/ProductsList';
import {HOME_PAGE_SOTRE} from '../../stores/Stores';
import rootStores from '../../stores/index';
import './HomePage.scss';

const homepageStore = rootStores[HOME_PAGE_SOTRE];
const HomePage = () => {
    const [displayFilter,setDisplayFilter] = useState(false);
    
    useEffect(() => {
        homepageStore.initHomePage();
    },[])

    const toggleDivFilters = () => {
        const displayFilterNewVal = !displayFilter;
        setDisplayFilter(displayFilterNewVal);
    }
    
    const displayFilterDiv = displayFilter? 'display-filter' : 'display-close';
    const coverImageWomanClass = 'women-cover';
    const coverTitle = 'Women';
    const coverDescritption = "shop through our lates selection of Women's Clothing and Acessories"
    return(
        <div>
            <AdikaNavbar/>
            <CategoriesList/>
            <AdikaCover title= {coverTitle} description={coverDescritption} imageClass={coverImageWomanClass}/>
            <DisplayConditions toggleDivFilters={toggleDivFilters}/>
            <div className={`${displayFilterDiv}`}/>
            <ProductsList/>
        </div>
    )
}

export default HomePage;