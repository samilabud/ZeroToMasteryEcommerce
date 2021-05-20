import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    shop=>shop.collections
)

export const selectShopCollectionWMemoize = createSelector(
    [selectShop],
    shop => shop.collections
  );
  
export const selectShopCollection =  memoize((collectionUrlParam) =>
    createSelector(
        [selectShopCollections],
        collections=> collections ? collections[collectionUrlParam] : null  
    )
)

export const selectCollectionForPreview = createSelector(
    [selectShopCollectionWMemoize],
    collections=> collections ? Object.keys(collections).map(key=>collections[key]) : []
)