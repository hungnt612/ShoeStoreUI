export const PICK_ITEM = 'PICK_ITEM';
export const UN_PICK = 'UN_PICK';

// const [trending, setTrending] = useState(DATA);
//   const [recentlyViewed, setRecentlyViewed] = useState(DATA2);
// const [showAddToBag, setShowAddToBag] = useState(false);
// const [selectedItem, setSelectedItem] = useState(null);
// const [selectedSize, setSelectedSize] = useState('');
// const [selectedColor, setSelectedColor] = useState('');
// const {selectedItem, setSelectedItem} = React.useContext(StoreContext);
export const PickItem = (item: any) => ({
  type: PICK_ITEM,
  payload: item,
});
export const UnPickItem = () => ({
  type: UN_PICK,
});
