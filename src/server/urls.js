export const BASE_URL = 'http://localhost:3000/api'

export const CATEGORIES = '/category';
export const PRODUCTS = '/product';

export const GET_ALL_CATEGOIRES = CATEGORIES + '/allCategories';
export const GET_ROW_COUNT = (productsCountRow) => `${PRODUCTS}/productsRow?productsCountRow=${productsCountRow}`;
export const GET_ALL_PRODUCTS = (page) => `${PRODUCTS}/allProducts?page=${page}`;
export const GET_ALL_PROUDCTS_BY_CATEGORIES = (page,categoryID) => `${PRODUCTS}/allProductsByCategory?page=${page}&categoryID=${categoryID}`;
export const GET_ALL_PROUDCTS_BY_FILTER = (page,filterType,filterCondition) =>  `${PRODUCTS}/allProductsByFilter?page=${page}&filterType=${filterType}&filterCondition=${filterCondition}`;
export const GET_ALL_PROUDCTS_BY_SORT = (page,sortById) => `${PRODUCTS}/allProductsBySort?page=${page}&sortBy=${sortById}`;