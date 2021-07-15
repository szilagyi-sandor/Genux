import { GCAction } from "../../Actions/Connected/interfaces";
import { defaultGCState } from "../../States/Connected/_Constants/defaultGCState";
import { GCState } from "../../States/Connected/_Interfaces/GenuxItemState";
import { removeFromArray } from "../../_Helpers/removeFromArray";

export const genuxConnectedReducer = <P = undefined>(
  state: GCState<P>,
  action: GCAction<P>
): GCState<P> => {
  switch (action.type) {
    case "MANAGE_PARAM":
      return {
        ...state,
        param: action.payload,
      };

    case "INIT":
      return defaultGCState;

    case "MANAGE":
      return action.payload;

    case "MANAGE_LOADING":
      return {
        ...state,
        loadingIds: action.payload,
      };

    case "ADD_LOADING":
      return {
        ...state,
        loadingIds: [...state.loadingIds, action.payload],
      };

    case "REMOVE_LOADING":
      return {
        ...state,
        loadingIds: removeFromArray(
          state.loadingIds,
          (id) => id === action.payload
        ),
      };

    case "MANAGE_ERROR":
      return {
        ...state,
        errors: action.payload,
      };

    case "ADD_ERROR":
      return {
        ...state,
        errors: [...state.errors, action.payload],
      };

    case "REMOVE_ERROR":
      return {
        ...state,
        errors: removeFromArray(
          state.errors,
          (error) => error.connectedId === action.payload
        ),
      };

    case "API_SUCCESS":
      return {
        ...state,
        loadingIds: removeFromArray(
          state.loadingIds,
          (id) => id === action.payload
        ),
        errors: removeFromArray(
          state.errors,
          (error) => error.connectedId === action.payload
        ),
      };

    case "API_ERROR":
      return {
        ...state,
        loadingIds: removeFromArray(
          state.loadingIds,
          (id) => id === action.payload.connectedId
        ),
        errors: [...state.errors, action.payload],
      };

    default:
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const check: never = action;
      return state;
  }
};
