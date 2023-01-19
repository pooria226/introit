import * as types from "../types";
const initialState = { payload: "light" };

export const themeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LIGHT_THEME:
      return {
        ...state,
        payload,
      };
    case types.DARK_THEME:
      return {
        ...state,
        payload,
      };
    default:
      return state;
  }
};
