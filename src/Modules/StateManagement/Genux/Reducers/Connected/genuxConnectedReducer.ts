// CHECKED 1.0
import { GCAction } from "../../Actions/Connected/interfaces";
import { defaultGCState } from "../../States/Connected/_Constants/defaultGenuxConnectedState";
import { GCState } from "../../States/Connected/_Interfaces/GenuxConnectedState";
import { addGCError } from "./_Helpers/addGCError";
import { addGCLoading } from "./_Helpers/addGCLoading";
import { removeGCError } from "./_Helpers/removeGCError";
import { removeGCLoading } from "./_Helpers/removeGCLoading";

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
      const { payload: manageLoadingPayload } = action;
      const {
        param: manageLoadingParam,
        connectedIds: manageLoadingConnectedIds,
      } = manageLoadingPayload;

      return {
        ...state,
        loadingIds: manageLoadingConnectedIds,
        param: manageLoadingParam ? manageLoadingParam.value : state.param,
      };

    case "ADD_LOADING":
      const { payload: addLoadingPayload } = action;
      const {
        isParallel: addLoadingIsParallel,
        connectedId: addLoadingConnectedId,
      } = addLoadingPayload;

      return {
        ...state,
        loadingIds: addGCLoading(
          state.loadingIds,
          addLoadingConnectedId,
          addLoadingIsParallel
        ),
      };

    case "REMOVE_LOADING":
      const { payload: removeLoadingPayload } = action;
      const {
        isParallel: removeLoadingIsParallel,
        connectedId: removeLoadingConnectedId,
        param: removeLoadingParam,
      } = removeLoadingPayload;

      return {
        ...state,
        loadingIds: removeGCLoading(
          state.loadingIds,
          removeLoadingConnectedId,
          removeLoadingIsParallel
        ),
        param: removeLoadingParam ? removeLoadingParam.value : state.param,
      };

    case "MANAGE_ERROR":
      const { payload: manageErrorPayload } = action;
      const { param: manageErrorParam, errors: manageErrorErrors } =
        manageErrorPayload;

      return {
        ...state,
        errors: manageErrorErrors,
        param: manageErrorParam ? manageErrorParam.value : state.param,
      };

    case "ADD_ERROR":
      const { payload: addErrorPayload } = action;
      const {
        param: addErrorParam,
        error: addErrorError,
        isParallel: addErrorIsParallel,
      } = addErrorPayload;

      return {
        ...state,
        errors: addGCError(state.errors, addErrorError, addErrorIsParallel),
        param: addErrorParam ? addErrorParam.value : state.param,
      };

    case "REMOVE_ERROR":
      const { payload: removeErrorPayload } = action;
      const {
        param: removeErrorParam,
        isParallel: removeErrorIsParallel,
        connectedId: removeErrorConnectedId,
      } = removeErrorPayload;

      return {
        ...state,
        errors: removeGCError(
          state.errors,
          removeErrorConnectedId,
          removeErrorIsParallel
        ),
        param: removeErrorParam ? removeErrorParam.value : state.param,
      };

    case "API_SUCCESS":
      const { payload: apiSuccessPayload } = action;
      const {
        isParallel: apiSuccessIsParallel,
        connectedId: apiSuccessConnectedId,
        param: apiSuccessParam,
      } = apiSuccessPayload;

      return {
        ...state,
        loadingIds: removeGCLoading(
          state.loadingIds,
          apiSuccessConnectedId,
          apiSuccessIsParallel
        ),
        errors: removeGCError(
          state.errors,
          apiSuccessConnectedId,
          apiSuccessIsParallel
        ),
        param: apiSuccessParam ? apiSuccessParam.value : state.param,
      };

    case "API_ERROR":
      const { payload: apiErrorPayload } = action;
      const {
        isParallel: apiErrorIsParallel,
        error: apiErrorError,
        param: apiErrorParam,
      } = apiErrorPayload;

      return {
        ...state,
        loadingIds: removeGCLoading(
          state.loadingIds,
          apiErrorError.connectedId,
          apiErrorIsParallel
        ),
        errors: addGCError(state.errors, apiErrorError, apiErrorIsParallel),
        param: apiErrorParam ? apiErrorParam.value : state.param,
      };

    default:
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const check: never = action;
      return state;
  }
};

export const gcReducer = genuxConnectedReducer;
