import { AsyncAction, AsyncActionType, AsyncState } from "../types/async";

export const asyncReducer = (state: AsyncState, action: AsyncAction) => {
  switch (action.type) {
    case AsyncActionType.FETCH_DATA_REQUEST:
      return {
        loading: true,
        data: [],
        error: null,
      };
    case AsyncActionType.FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case AsyncActionType.FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
