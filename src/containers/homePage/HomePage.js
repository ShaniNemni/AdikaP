import React from 'react';
import AdikaNavbar from "../../components/adikaNavbar/AdikaNavbar";
import AdikaCover from '../../components/adikaCover/AdikaCover';
import CategoriesList from '../categories/CategoriesList ';
import DisplayConditions from '../displayConditions/DisplayConditions';
import ProductsList from '../products/ProductsList';

const HomePage = () => {
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