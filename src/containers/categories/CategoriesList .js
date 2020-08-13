import React,{useState,useEffect,Component} from 'react';
import './Categories.scss';
import {IoIosArrowUp,IoIosArrowDown} from 'react-icons/io';
import { observer } from 'mobx-react';
import {HOME_PAGE_SOTRE} from '../../stores/Stores';
import rootStores from '../../stores/index';

const CATEGORIES_LIST = [{name:'first Category',categoryID:1},{name:'second Category',categoryID:2},{name:'third Category',categoryID:3},{name:'four Category',categoryID:4},{name:'five Category',categoryID:5},{name:'six Category',categoryID:6}]
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
        console.log("renderCategories getCategories ",getCategories);
        const categories = getCategories.map(category => 
            <li className={`col-12 col-md-2`} key={category.categoryID}>
                <a className={'category-name'}>{category.categoryName}</a>
            </li>
        )
        return(
            <ul className={'row'}>
                {categories}
            </ul>
        )
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