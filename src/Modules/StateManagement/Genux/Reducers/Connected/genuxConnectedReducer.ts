import { GCAction } from "../../Actions/Connected/interfaces";
import { defaultGCState } from "../../States/Connected/_Constants/defaultGCState";
import { GCState } from "../../States/Connected/_Interfaces/GenuxItemState";
import { removeFromArray } from "../../_Helpers/removeFromArray";

// TODO: desctruction usage
// TODO: Add helpers
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
      return {
        ...state,
        ...action.payload,
      };

    case "MANAGE_LOADING":
      return {
        ...state,
        loadingIds: action.payload.connectedIds,
        // TODO: his param logic is almost in everywhere.
        param: action.payload.param ? action.payload.param.value : state.param,
      };

    case "ADD_LOADING":
      return {
        ...state,
        // TODO: Make this better -> doing the same thing 2x
        loadingIds:
          !action.payload.parallel &&
          state.loadingIds.includes(action.payload.connectedId)
            ? state.loadingIds
            : [...state.loadingIds, action.payload.connectedId],
      };

    case "REMOVE_LOADING":
      return {
        ...state,
        loadingIds: action.payload.parallel
          ? removeFromArray(
              state.loadingIds,
              (id) => id === action.payload.connectedId
            )
          : state.loadingIds.filter((id) => id !== action.payload.connectedId),
        param: action.payload.param ? action.payload.param.value : state.param,
      };

    case "MANAGE_ERROR":
      return {
        ...state,
        errors: action.payload.errors,
        param: action.payload.param ? action.payload.param.value : state.param,
      };

    case "ADD_ERROR":
      return {
        ...state,
        errors:
          !action.payload.parallel &&
          state.errors.find(
            (er) => er.connectedId === action.payload.error.connectedId
          )
            ? state.errors
            : [...state.errors, action.payload.error],
        param: action.payload.param ? action.payload.param.value : state.param,
      };

    case "REMOVE_ERROR":
      return {
        ...state,
        errors: action.payload.parallel
          ? removeFromArray(
              state.errors,
              (error) => error.connectedId === action.payload.connectedId
            )
          : state.errors.filter(
              (error) => error.connectedId !== action.payload.connectedId
            ),
        param: action.payload.param ? action.payload.param.value : state.param,
      };

    case "API_SUCCESS":
      return {
        ...state,
        loadingIds: action.payload.parallel
          ? removeFromArray(
              state.loadingIds,
              (id) => id === action.payload.connectedId
            )
          : state.loadingIds.filter((id) => id !== action.payload.connectedId),

        errors: action.payload.parallel
          ? removeFromArray(
              state.errors,
              (error) => error.connectedId === action.payload.connectedId
            )
          : state.errors.filter(
              (error) => error.connectedId !== action.payload.connectedId
            ),
        param: action.payload.param ? action.payload.param.value : state.param,
      };

    case "API_ERROR":
      return {
        ...state,
        loadingIds: action.payload.parallel
          ? removeFromArray(
              state.loadingIds,
              (id) => id === action.payload.error.connectedId
            )
          : state.loadingIds.filter(
              (id) => id !== action.payload.error.connectedId
            ),

        errors:
          !action.payload.parallel &&
          state.errors.find(
            (er) => er.connectedId === action.payload.error.connectedId
          )
            ? state.errors
            : [...state.errors, action.payload.error],
      };

    default:
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const check: never = action;
      return state;
  }
};
