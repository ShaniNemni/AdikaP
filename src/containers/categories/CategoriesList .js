import React,{useState,useEffect,Component} from 'react';
import './Categories.scss';
import {IoIosArrowUp,IoIosArrowDown} from 'react-icons/io';
import { observer } from 'mobx-react';
import {HOME_PAGE_SOTRE} from '../../stores/Stores';
import rootStores from '../../stores/index';
import CategoryItem from './CategoryItem';

const homePageStore = rootStores[HOME_PAGE_SOTRE];

@observer
class CategoriesList extends Component {
    constructor(props){
        super(props);
        this.state = {
            categoriesPressed:false,
        }
    }

    toggleCategories = () => {
        const {categoriesPressed} = this.state;
        const categoriesPressedNewValue = !categoriesPressed; 
        this.setState({categoriesPressed:categoriesPressedNewValue});
    }

    displayIcon = () => {
        const {categoriesPressed} = this.state;
        if(categoriesPressed) {
            return <IoIosArrowUp/>
        }
        return <IoIosArrowDown/>
    }

    renderCategories = () => {
        const getCategories = homePageStore.getCategories;
        const categories = getCategories.map(category => 
                <CategoryItem key={category.categoryID} onCategorySelected={this.onCategorySelected} categoryName={category.categoryName} categoryID={category.categoryID}/>
            )
        return(
            <ul className={'row'}>
                {categories}
            </ul>
        )
    }

    onCategorySelected = (categoryID) => {
        this.toggleCategories();
        homePageStore.setCategorySelected(categoryID);
    }

    render(){
        const {categoriesPressed} = this.state;
        const displayCategoriesClassname = categoriesPressed ? '' : 'display-categories-close';
        return (
            <div className={'categories-container'}>
                <hr/>
                <div className={'categories-title mobile-only'} onClick={this.toggleCategories}>{'Categories'} {this.displayIcon()} </div>
                <hr className={'mobile-only'}/>
                <div className={`container ${displayCategoriesClassname}`}>
                    {this.renderCategories()}
                </div>
            </div>
        )
    }
} 

export default CategoriesList;