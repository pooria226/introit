import * as types from "../types";

export const activeLightTheme = () => async (dispatch) => {
  dispatch({
    type: types.LIGHT_THEME,
    payload: "light",
  });
};
export const activeDarkTheme = () => async (dispatch) => {
  dispatch({
    type: types.DARK_THEME,
    payload: "dark",
  });
};
