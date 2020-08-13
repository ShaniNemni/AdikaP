import React,{useEffect} from 'react';
import AdikaNavbar from "../../components/adikaNavbar/AdikaNavbar";
import AdikaCover from '../../components/adikaCover/AdikaCover';
import CategoriesList from '../categories/CategoriesList ';
import DisplayConditions from '../displayConditions/DisplayConditions';
import ProductsList from '../products/ProductsList';
import {HOME_PAGE_SOTRE} from '../../stores/Stores';
import rootStores from '../../stores/index';

const homepageStore = rootStores[HOME_PAGE_SOTRE];
const HomePage = () => {
    useEffect(() => {
        homepageStore.getAllCategories();
    })
    
    const coverImageWomanClass = 'women-cover';
    const coverTitle = 'Women';
    const coverDescritption = "shop through our lates selection of Women's Clothing and Acessories"
    return(
        <div>
            <AdikaNavbar/>
            <CategoriesList/>
            <AdikaCover title= {coverTitle} description={coverDescritption} imageClass={coverImageWomanClass}/>
            <DisplayConditions/>
            <ProductsList/>
        </div>
    )
}

export default HomePage;