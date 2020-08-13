import Server from '../server/Server';
import {GET_ALL_PRODUCTS,GET_ALL_PROUDCTS_BY_SORT,GET_ALL_PROUDCTS_BY_FILTER,GET_ALL_PROUDCTS_BY_CATEGORIES} from '../server/urls';

class ProductsService {
    constructor(){
        this.server = Server;
    }

    getProducts = (page) => {
        return this.server.get(GET_ALL_PRODUCTS(page))
            .then(response => {
                const data = response && response.data || [];
                return data;
            })
            .catch(err => {
                console.log("error with get products ",err);
            })
    }

    getProductsByCategory = (categoryId) => {
        const page = 1;
        return this.server.get(GET_ALL_PROUDCTS_BY_CATEGORIES(page,categoryId))
            .then(response => {
                const data = response && response.data || [];
                return data;
            })
            .catch(err => {
                console.log("error with get products ",err);
            })
    }

    getProductsBySort = (currentSortById) => {
        const page = 1;
        return this.server.get(GET_ALL_PROUDCTS_BY_SORT(page,currentSortById))
            .then(response => {
                const data = response && response.data || [];
                return data;
            })
            .catch(err => {
                console.log("error with get products by sort ",err);
            })
    }

    getProductsByFilter = (filterType,filterCondition) => {
        const page = 1;
        return this.server.get(GET_ALL_PROUDCTS_BY_FILTER(page,filterType,filterCondition))
            .then(response => {
                const data = response && response.data || [];
                return data;
            })
            .catch(err => {
                console.log("error with get products by sort ",err);
            })
    }
}
export default new ProductsService();