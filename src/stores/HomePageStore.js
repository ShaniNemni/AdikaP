import { observable, action,computed,toJS } from "mobx";
import CategoriesService from '../services/CategoriesService';

export default class HomePageStore{
    @observable
    categoirs = observable([]);
    
    initHomePage(){
        this.getAllCategories();
    }

    getAllCategories = () => {
       return CategoriesService.getCategories()
        .then(respone => {
            console.log("respone ",respone);
        })
        .catch(err => {
            console.log("error with categoires ",err);
        })
    }
}