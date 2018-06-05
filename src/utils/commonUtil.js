import history from './history';
import { isArray } from 'util';

export const navigateToUrl = (url) => {
    history.push(url);
}
export const setToLocalStorage = (key, value) => {
    sessionStorage.setItem(key, JSON.stringify(value));
}
export const getLocalStorage = (key) => {
    return JSON.parse(sessionStorage.getItem(key));
}
export const clearLocalStorage = () => {
    sessionStorage.clear();
}
export const getUserId = () => {
    const userDetail = getLocalStorage('userDetail');
    return isObjectEmpty(userDetail) ? '' : userDetail.userId; 
}
export const isObjectDefied = (obj) => {
    return obj || false;
}
export const isObjectEmpty = (obj) => {
    let returnValue = true;
    if (isObjectDefied(obj)) {
        returnValue = Object.keys(obj).length <= 0;
    }
    return returnValue;
}
export const isArrayEmpty = (list) => {
    if (!isObjectDefied(list)) {
        return true;
    }
    return isArray(list) && list.length <= 0;
}