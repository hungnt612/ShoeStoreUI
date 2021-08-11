import {PICK_ITEM, ADD_TO_BAG, UN_PICK} from '../action/UserAction';

const initialValue = {
  data: {},
  isChosing: false,
};
export default function UserActionReducer(state = initialValue, action: any) {
  switch (action.type) {
    case PICK_ITEM:
      return {
        data: action.payload,
        isChosing: true,
      };
    case ADD_TO_BAG:
      return action.payload;
    case UN_PICK:
      return {
        data: null,
        isChosing: false,
      };
    default:
      return state;
  }
}
