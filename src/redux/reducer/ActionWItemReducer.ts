import {PICK_ITEM, UN_PICK} from '../action/ActionWItem';

const initialValue = {
  item: {},
  isChosing: false,
};
export default function ActionWItemReducer(state = initialValue, action: any) {
  switch (action.type) {
    case PICK_ITEM:
      return {
        item: action.payload,
        isChosing: true,
      };
    // case ADD_TO_CART:
    //   return {
    //     cartData: action.payload,
    //     showCart: false,
    //   };
    case UN_PICK:
      return {
        item: null,
        isChosing: false,
      };
    default:
      return state;
  }
}
