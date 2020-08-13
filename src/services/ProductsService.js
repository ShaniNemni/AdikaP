import Server from '../server/Server';
import {GET_ALL_PRODUCTS} from '../server/urls';

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
}
export default new ProductsService();