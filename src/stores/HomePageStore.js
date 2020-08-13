import { observable, action,computed,toJS } from "mobx";
import CategoriesService from '../services/CategoriesService';
import ProductsService from "../services/ProductsService";

export default class HomePageStore{
    @observable
    categoirs = observable([]);

    @observable
    products = observable([]);

    @observable
    pagesCount = 1;

    @observable
    currentPage = 1;
    
    initHomePage(){
        this.getAllCategories();
        this.getAllProducts();
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

    getAllProducts = () => {
        const currentPage = this.getCurrentPage;
        return ProductsService.getProducts(currentPage)
            .then(dataRes => {
                const products = dataRes.data || [];
                const pagesCount = dataRes.productsCount > 0 ? parseInt(dataRes.productsCount / 12) + 1 : 1;
                this.setPagesCount(pagesCount);
                this.setProducts(products);
            })
            .catch(err => {
                console.log("error with products ",err);
                this.setProducts([])
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

    @action
    setProducts(products){
        this.products.replace(products);
    }

    @computed
    get getProducts(){
        return toJS(this.products);
    }

    @action
    setCurrentPage(currentPage){
        this.currentPage = currentPage;
        this.getAllProducts()
    }

    @computed
    get getCurrentPage(){
        return this.currentPage;
    }

    @action
    setPagesCount(pagesCount){
        this.pagesCount = pagesCount;
    }

    @computed
    get getPagesCount(){
        return this.pagesCount;
    }

}