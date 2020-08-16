import Server from '../server/Server';
import {GET_ROW_COUNT,GET_ALL_PRODUCTS,GET_ALL_PROUDCTS_BY_SORT,GET_ALL_PROUDCTS_BY_FILTER,GET_ALL_PROUDCTS_BY_CATEGORIES} from '../server/urls';

class ProductsService {
    constructor(){
        this.server = Server;
    }

    getRowsCount = (productsCountInRow) => {
        return this.server.get(GET_ROW_COUNT(productsCountInRow))
            .then(response => {
                const data = response && response.data || null;
                return data;
            })
            .catch(err => {
                console.log("error with get rows ",err);
            })
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