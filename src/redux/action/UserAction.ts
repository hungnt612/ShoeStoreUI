export const PICK_ITEM = 'PICK_ITEM';
export const ADD_TO_BAG = 'ADD_TO_BAG';
export const UN_PICK = 'UN_PICK';

// const [trending, setTrending] = useState(DATA);
//   const [recentlyViewed, setRecentlyViewed] = useState(DATA2);
// const [showAddToBag, setShowAddToBag] = useState(false);
// const [selectedItem, setSelectedItem] = useState(null);
// const [selectedSize, setSelectedSize] = useState('');
// const [selectedColor, setSelectedColor] = useState('');
// const {selectedItem, setSelectedItem} = React.useContext(StoreContext);
export const PickItem = (data: any) => ({
  type: PICK_ITEM,
  payload: data,
});
export const AddToBag = (data: any) => ({
  type: ADD_TO_BAG,
  payload: data,
});
export const UnPickItem = () => ({
  type: UN_PICK,
});
