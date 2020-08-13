import {HOME_PAGE_SOTRE} from '../stores/Stores';
import HomePageStore from './HomePageStore';

const homePageStore = new HomePageStore();
const rootStores = {
    [HOME_PAGE_SOTRE]:homePageStore
}

export default rootStores;