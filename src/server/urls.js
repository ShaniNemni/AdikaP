export const BASE_URL = 'http://localhost:3000/api'

export const CATEGORIES = '/category';
export const PRODUCTS = '/product';

export const GET_ALL_CATEGOIRES = CATEGORIES + '/allCategories'
export const GET_ALL_PRODUCTS = (page) => `${PRODUCTS}/allProducts?page=${page}`;
export const GET_ALL_PROUDCTS_BY_CATEGORIES = (page) => `${PRODUCTS}/allProductsByCategory?page=${page}`;
export const GET_ALL_PROUDCTS_BY_FILTER = (page) =>  `${PRODUCTS}/allProductsByFilter?page=${page}`;
export const GET_ALL_PROUDCTS_BY_SORT = (page,sortById) => `${PRODUCTS}/allProductsBySort?page=${page}&sortBy=${sortById}`;