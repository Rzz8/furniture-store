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

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
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

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
