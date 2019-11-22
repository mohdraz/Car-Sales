export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const UPDATE_PRICE = "UPDATE_PRICE";

export const addFeature = feature => {
  return {
    type: ADD_FEATURE,
    payload: feature
  };
};

export const removeFeature = feature => {
  return {
    type: REMOVE_FEATURE,
    payload: feature
  };
};

export const updatePrice = price => {
  return {
    type: UPDATE_PRICE,
    payload: price
  };
};
