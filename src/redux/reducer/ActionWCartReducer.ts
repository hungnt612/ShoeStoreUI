import {
  ADD_TO_CART,
  REMOVE_TO_CART,
  SHOW_CART,
  HIDE_CART,
} from '../action/ActionWCart';
import {images} from '../../constants';
const initialValue = {
  cart: [
    {
      id: 0,
      img: 10,
      name: 'Nike Air Zoom',
      price: '176',
      sizes: 9,
      type: 'RUNNING',
    },
    {
      id: 1,
      name: 'Nike Metcon 5',
      img: images.nikeMetcon5Purple,
      bgColor: '#D39C67',
      type: 'TRAINING',
      price: '176',
      sizes: 8,
    },
    {
      id: 2,
      name: 'Nike Metcon 6',
      img: images.nikeMetcon6,
      bgColor: '#4eaba6',
      type: 'BASKETBALL',
      price: '176',
      sizes: 6,
    },
    {
      id: 3,
      name: 'Nike Metcon 3',
      img: images.nikeMetcon3,
      bgColor: '#A69285',
      type: 'TRAINING',
      price: '176',
      sizes: 7,
    },
    {
      id: 4,
      name: 'Nike Metcon Free',
      img: images.nikeMetconFree,
      bgColor: '#A02E41',
      type: 'TRAINING',
      price: '176',
      sizes: 5,
    },
    {
      id: 5,
      name: 'Nike Metcon 5',
      img: images.nikeMetcon5Purple,
      bgColor: '#D39C67',
      type: 'TRAINING',
      price: '176',
      sizes: 9,
    },
    {
      id: 6,
      name: 'Nike Air Zoom Kobe',
      img: images.nikeZoomKobe1Proto,
      bgColor: '#7052A0',
      type: 'BASKETBALL',
      price: '176',
      sizes: 9,
    },
  ],
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
