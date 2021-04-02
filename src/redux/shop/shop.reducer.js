import ShopData  from './shop.data'

const INITIAL_STATE = {
    collections: ShopData
}

export const shopReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
};