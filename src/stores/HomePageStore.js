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
        .then(cateogires => {
            this.setCategoirs(cateogires);
        })
        .catch(err => {
            console.log("error with categoires ",err);
            this.setCategoirs([]);
        })
    }

    @action
    setCategoirs(categories){
        this.categoirs.replace(categories);
    }

    @computed
    get getCategories(){
        return toJS(this.categoirs);
    }
}