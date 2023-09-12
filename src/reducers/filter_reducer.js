import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

//
const filter_reducer = (state, action) => {
  //Math.max() can not process an array and we should use the spread operator to copy the array
  if (action.type === LOAD_PRODUCTS) {
    let maxPrice = action.payload.map((product) => product.price);
    maxPrice = Math.max(...maxPrice);
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
    };
  }

  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid_view: true };
  }

  if (action.type === SET_LISTVIEW) {
    return { ...state, grid_view: false };
  }

  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }

  // in reducer function we don't want to modify the old state to the new state, so use spread operator
  if (action.type === SORT_PRODUCTS) {
    const { filtered_products } = state;
    let temp_products = [...filtered_products];

    if (state.sort === "price-lowest") {
      temp_products = temp_products.sort((a, b) => a.price - b.price);
    }
    if (state.sort === "price-highest") {
      temp_products = temp_products.sort((a, b) => b.price - a.price);
    }
    if (state.sort === "name-a") {
      temp_products = temp_products.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
    if (state.sort === "name-z") {
      temp_products = temp_products.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }
    return { ...state, filtered_products: temp_products };
  }

  // dynamic property [name] is used to update the filters!
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
