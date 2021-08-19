export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_TO_CART = 'REMOVE_TO_CART';
export const SHOW_CART = 'SHOW_CART';
export const HIDE_CART = 'HIDE_CART';

import {Dispatch} from '@reduxjs/toolkit';
import store from '../store'; //! chỗ này cần xử lý vì gặp lỗi
//!Consider refactoring to remove the need for a cycle.
// const [trending, setTrending] = useState(DATA);
//   const [recentlyViewed, setRecentlyViewed] = useState(DATA2);
// const [showAddToBag, setShowAddToBag] = useState(false);
// const [selectedItem, setSelectedItem] = useState(null);
// const [selectedSize, setSelectedSize] = useState('');
// const [selectedColor, setSelectedColor] = useState('');
// const {selectedItem, setSelectedItem} = React.useContext(StoreContext);
// export const AddToCart = (item: any) => ({
//   type: ADD_TO_CART,
//   payload: item,
// });
export const RemoveToCart = (item: any) => ({
  type: REMOVE_TO_CART,
  payload: item,
});

export const AddToCart = (item: any) => (dispatch: Dispatch) => {
  dispatch({
    type: ADD_TO_CART,
    payload: item,
  });
};

export const ShowCart = () => (dispatch: Dispatch) => {
  var oldCart = store.getState().ActionWCartReducer?.cart;
  dispatch({
    type: SHOW_CART,
    payload: oldCart,
  });
};
export const HideCart = () => (dispatch: Dispatch) => {
  var oldCart = store.getState().ActionWCartReducer?.cart;
  dispatch({
    type: HIDE_CART,
    payload: oldCart,
  });
};
