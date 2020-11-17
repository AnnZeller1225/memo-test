export const itemCompare = (item) => {
  return {
    type: "ITEM_ADD_TO_COMPARISON",
    payload: item,
  };
};
export const getCheck = (item) => {
  return {
    type: "ITEM_GET_CHECK",
     payload: item,
  }
}

export const clear = (item) => {
  return {
    type: "GET_CLEAR_FIELD",
     payload: item,
  }
}

