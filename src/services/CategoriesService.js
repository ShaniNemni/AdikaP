import Server from '../server/Server';
import {GET_ALL_CATEGOIRES} from '../server/urls';

class CategoriesService {
    constructor(){
        this.server = Server;
    }

    getCategories = () => {
        return this.server.get(GET_ALL_CATEGOIRES)
            .then(response => {
                const categories = response && response.data || [];
                return categories;
            })
            .catch(err => {
                console.log("error with get cagegories ",err);
            })
    }
}
export default new CategoriesService();