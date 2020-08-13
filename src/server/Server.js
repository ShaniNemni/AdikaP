import axios from 'axios';
import {BASE_URL} from './urls';

class Server {

    get(url) {
        const axios = this.createAxios();
        return axios.get(url);
    }

    createAxios(){
        const config = {
            baseURL:BASE_URL
        }

        return axios.create(config);
    }
}

export default new Server();