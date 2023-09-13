import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from "../actions";

const cart_reducer = (state, action) => {
  //note that only id+color can identify a unique item
  if (action.type === ADD_TO_CART) {
    const { id, color, amount, product } = action.payload;
    const tempItem = state.cart.find((i) => i.id === id + color);

    // if find item that is already in the cart (tempItem)
    // go through the items in the cart, for non-matching items, there is no change
    // for matching item, we change the amount and do not exceed the stock (max)
    // if didn't find the item in the existing cart, we create a new item and add to the cart
    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id + color) {
          let newAmout = cartItem.amount + amount;
          if (newAmout > cartItem.max) {
            newAmout = cartItem.max;
          }
          return { ...cartItem, amount: newAmout };
        } else {
          return cartItem;
        }
      });
      return { ...state, cart: tempCart };
    } else {
      const newItem = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.images[0].url,
        price: product.price,
        max: product.stock,
      };
      return { ...state, cart: [...state.cart, newItem] };
    }
  }

  if (action.type === REMOVE_CART_ITEM) {
    let tempCart = [...state.cart];
    tempCart = tempCart.filter((item) => item.id !== action.payload);

    return { ...state, cart: tempCart };
  }

  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
