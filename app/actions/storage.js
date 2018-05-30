const TronHttpClient = require('tron-http-client');
const client = new TronHttpClient();

export const SAVE_STORAGE = 'SAVE_STORAGE';
export const LOAD_FAILED = 'LOAD_FAILED';

const STORAGE_KEY = 'TRONWATCH_SETTINGS';

export const saveStorage = (storage) =>{
    console.log("b");
    console.log(storage);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(storage));
    return {
        type : SAVE_STORAGE,
        storage : storage
    }
};


export const loadStorage = () =>{
    let loaded = null;
    try{
        loaded = JSON.parse(window.localStorage.getItem(STORAGE_KEY));
    }catch (e) {}

    if(!loaded || !loaded.storage){
        return {
            type : LOAD_FAILED
        }
    }

    return {
        type : SAVE_STORAGE,
        storage : storage
    }
};

export const getValue = (storage, namespace, key, fallback)=>{
    if(storage.settings[namespace] && storage.settings[namespace][key] !== undefined)
        return storage.settings[namespace][key];
    return fallback;
};

export const setValue = (storage, namespace, key, newValue, dispatch) => {
    if(!storage.settings[namespace])
        storage.settings[namespace] = {};
    storage.settings[namespace][key] = newValue;
    dispatch(saveStorage(storage));
};
