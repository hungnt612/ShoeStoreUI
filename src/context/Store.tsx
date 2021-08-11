//cai nay se fix sau, tam thoi chuyen sang dung redux

import React, {createContext, useReducer, useState} from 'react';
import PickItem from './PickItemReducer';
export const StoreContext = createContext(null);
// useReducer(authReducer, {});
const StoreProvider = ({children}) => {
  //   const [trending, setTrending] = useState([]);
  //   const [recentlyViewed, setRecentlyViewed] = useState([]);
  //   const [showAddToBag, setShowAddToBag] = useState(false);
  const [selectedItem, setSelectedItem] = useState(PickItem);
  //   const [selectedSize, setSelectedSize] = useState('');
  //   const [selectedColor, setSelectedColor] = useState('');

  const store = {
    // trending: [trending, setTrending],
    // recentlyViewed: [recentlyViewed, setRecentlyViewed],
    // showAddToBag: [showAddToBag, setShowAddToBag],
    // selectedItem: [selectedItem, setSelectedItem],
    // selectedSize: [selectedSize, setSelectedSize],
    // selectedColor: [selectedColor, setSelectedColor],
  };
  return (
    <StoreContext.Provider value={{selectedItem, setSelectedItem}}>
      {children}
    </StoreContext.Provider>
  );
};
export default StoreProvider;
