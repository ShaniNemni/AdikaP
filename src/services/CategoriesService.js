import Server from '../server/Server';
import {GET_ALL_PROUDCTS_BY_CATEGORIES} from '../server/urls';

class CategoriesService {
    constructor(){
        this.server = Server;
    }

    getCategories = () => {
        return this.server.get(GET_ALL_PROUDCTS_BY_CATEGORIES)
            .then(response => {
                console.log("response ",response);
                return response;
            })
            .catch(err => {
                console.log("error with get cagegories ",err);
            })
    }
}
export default new CategoriesService();