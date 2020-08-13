import { observable, action,computed,toJS, observe } from "mobx";
import CategoriesService from '../services/CategoriesService';
import ProductsService from "../services/ProductsService";

const resetCurrentPage = true;

export default class HomePageStore{
    @observable
    categoirs = observable([]);

    @observable
    categorySelected = null;

    @observable
    products = observable([]);

    @observable
    pagesCount = 1;

    @observable
    currentPage = 1;

    @observable
    filterType = null;

    @observable
    filterCondition = null;

    @observable
    sortById = null;
    
    initHomePage(){
        this.getAllCategories();
        this.getAllProducts();
    }

    setValues = (productsCount,productsToSet) => {
        const products = productsToSet || [];
        const pagesCount = productsCount > 0 ? parseInt(productsCount / 12) + 1 : 1;
        this.setPagesCount(pagesCount);
        this.setProducts(products);
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
                this.setValues(dataRes.productsCount, dataRes.data)
            })
            .catch(err => {
                console.log("error with products ",err);
                this.setProducts([])
            })
    }

    getProductsByCategory = () => {
        const categoryId = this.getCategorySelected;
        return ProductsService.getProductsByCategory(categoryId)
            .then(dataRes => {
                this.setValues(dataRes.productsCount, dataRes.data) 
            })
            .catch(err => {
                console.log("error with get products by category",err);
                this.setProducts([]);
            })
    }

    getAllSortProducts = () => {
        const sortById = this.getSortByID;
        return ProductsService.getProductsBySort(sortById)
            .then(dataRes => {
                this.setValues(dataRes.productsCount, dataRes.data) 
            })
            .catch(err => {
                console.log("error with sort products ",err);
                this.setProducts([]);
            })
    }

    getAllFilteredProducts = () => {
        const filterType = this.getFilterType;
        const filterCondition = this.getFilterCondition;
        return ProductsService.getProductsByFilter(filterType,filterCondition)
        .then(dataRes => {
            this.setValues(dataRes.productsCount, dataRes.data) 
        })
        .catch(err => {
            console.log("error with sort products ",err);
            this.setProducts([]);
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
    setCurrentPage(currentPage,resetCurrentPageOnly){
        this.currentPage = currentPage;
        if(!resetCurrentPageOnly){
            this.getAllProducts();
        }
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

    @action
    setSortById(sortId){
        this.setCurrentPage(1,resetCurrentPage);
        this.sortById = sortId;
        this.getAllSortProducts();
    }

    @computed
    get getSortByID() {
        return this.sortById;
    }

    @action
    setFilterCondition(filterType,filterCondition){
        this.setCurrentPage(1,resetCurrentPage)
        this.filterType = filterType;
        this.filterCondition = filterCondition;
        this.getAllFilteredProducts();
    }

    @computed
    get getFilterCondition(){
        return this.filterCondition.toLowerCase();
    }

    @computed
    get getFilterType(){
        return this.filterType;
    }

    @action
    setCategorySelected(categoryID){
        this.setCurrentPage(1,resetCurrentPage);
        this.categorySelected = categoryID;
        this.getProductsByCategory();
    }

    @computed
    get getCategorySelected(){
        return this.categorySelected;
    }

}