import { UPDATE_LOADER, PRODUCT_DATA } from './actionType';

export function commenActionCreater(data, actionName) {
    return {
        type: actionName,
        payload: data
    };
}

export const setLoader = (data) => commenActionCreater(data, UPDATE_LOADER);
export const setProdects = (data) => commenActionCreater(data, PRODUCT_DATA);