import {
  ADD_TO_CART,
  REMOVE_TO_CART,
  SHOW_CART,
  HIDE_CART,
} from '../action/ActionWCart';

const initialValue = {
  cart: [],
  isShowing: false,
};
export default function ActionWCartReducer(state = initialValue, action: any) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        cart: action.payload,
        isShowing: false,
      };
    // case ADD_TO_CART:
    //   return {
    //     cartData: action.payload,
    //     showCart: false,
    //   };
    case SHOW_CART:
      return {
        cart: action.payload,
        isShowing: true,
      };
    case HIDE_CART:
      return {
        cart: action.payload,
        isShowing: false,
      };
    case REMOVE_TO_CART:
      return {
        cart: action.payload,
        isShowing: false,
      };
    default:
      return state;
  }
}
