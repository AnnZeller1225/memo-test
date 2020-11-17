const initialState = {
  fieldItems: [
    {
      id: 1,
      isClose: true,
      color: "#ebe700",
    },
    {
      id: 2,
      isClose: true,
      color: "#fa1850",
    },
    {
      id: 3,
      isClose: true,
      color: "#09e7d5",
    },
    {
      id: 4,
      isClose: true,
      color: "#ebe700",
    },
    {
      id: 5,
      isClose: true,
      color: "#010e57",
    },
    {
      id: 6,
      isClose: true,
      color: "#fa1850",
    },
    {
      id: 7,
      isClose: true,
      color: "#09e7d5",
    },
    {
      id: 8,
      isClose: true,
      color: "#010e57",
    },
    {
      id: 9,
      isClose: true,
      color: "#006329",
    },
    {
      id: 10,
      isClose: true,
      color: "#320550",
    },
    {
      id: 11,
      isClose: true,
      color: "#589e09fd",
    },
    {
      id: 12,
      isClose: true,
      color: "#006329",
    },
    {
      id: 13,
      isClose: true,
      color: "#706500fd",
    },
    {
      id: 14,
      isClose: true,
      color: "#589e09fd",
    },
    {
      id: 15,
      isClose: true,
      color: "#320550",
    },
    {
      id: 16,

      isClose: true,
      color: "#706500fd",
    },
  ],
  compareArr: [],
  clicks: 1,
  openingItems: [],
};
let click = 1;
let newe = [];
const checkMatch = (arr, arr2) => {
  let updateArr = arr.map((elem) => {
    arr2.forEach((el) => {
      if (elem.color == el.color) {
        elem.isClose = false;
        elem.opened = true;
      } else {
        elem.isClose = true;
      }
    });
    return elem;
  });
  return updateArr;
};

const checkItems = (state) => {
  const { fieldItems, compareArr, openingItems } = state;
  let newFieldItems;
  let newCompareArr;
  let newOpening = [...openingItems];
  if (compareArr.length >= 2) {
    if (
      compareArr[0].color === compareArr[1].color &&
      compareArr[0].id !== compareArr[1].id
    ) {
      newOpening = [...openingItems, compareArr[0]];
      click = 1;
      newCompareArr = [];
      newFieldItems = checkMatch(fieldItems, newOpening);
    } else {
      click = 1;
      newFieldItems = checkMatch(fieldItems, newOpening);
      newCompareArr = [];
      return {
        ...state,
        fieldItems: newFieldItems,
        clicks: click,
        compareArr: [],
      };
    }
    return {
      ...state,
      openingItems: newOpening,
      fieldItems: newFieldItems,
      clicks: click,
      compareArr: [],
    };
  } else {
    newCompareArr = [];
    newFieldItems = checkMatch(fieldItems, newOpening);
    return {
      ...state,
      fieldItems: newFieldItems,
      clicks: click,
      compareArr: newCompareArr,
    };
  }
};
const getClearField = (state) => {
  const { fieldItems } = state;

  return {
    ...state,
    fieldItems: fieldItems.map((elem) => {
      if (elem.opened) {
        elem.isClose = false;
      } else {
        elem.isClose = true;
      }
      return elem;
    }),
  };
};
const addToComparison = (state, item) => {
  click++;
  const { fieldItems, compareArr } = state;
  if (click < 4) {
    return {
      ...state,
      fieldItems: fieldItems.map((elem) => {
        if (elem.id === item.id) {
          elem.isClose = false;
        }
        return elem;
      }),
      compareArr: [...compareArr, item],
      clicks: click,
    };
  } else {
    return {
      ...state,
    };
  }
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ITEM_ADD_TO_COMPARISON":
      return addToComparison(state, action.payload);
    case "ITEM_GET_CHECK":
      return checkItems(state, action.payload); //

    case "GET_CLEAR_FIELD":
      return getClearField(state, action.payload);
    default:
      return state;
  }
};
export default reducer;
