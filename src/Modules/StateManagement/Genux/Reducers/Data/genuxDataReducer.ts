// CHECKED 1.0
import { GDAction } from "../../Actions/Data/interfaces";
import { createDefaultGDState } from "../../States/Data/_Helpers/createDefaultGenuxDataState";
import { GDState } from "../../States/Data/_Interfaces/GenuxDataState";

export const genuxDataReducer = <P = undefined, D = undefined>(
  state: GDState<P, D>,
  action: GDAction<P, D>
): GDState<P, D> => {
  switch (action.type) {
    case "MANAGE_PARAM":
      return {
        ...state,
        param: action.payload,
      };

    case "INIT":
      const { payload: initPayload } = action;

      return createDefaultGDState(
        initPayload.data,
        initPayload.setDataRecieved
      );

    case "MANAGE":
      return {
        ...state,
        ...action.payload,
      };

    case "MANAGE_LOADING":
      return {
        ...state,
        loading: action.payload,
      };

    case "API_SUCCESS":
      const { payload: apiSuccessPayload } = action;

      return {
        ...state,
        data: apiSuccessPayload.data,
        dataRecieved: new Date(),
        error: undefined,
        loading: false,
        latestParam: apiSuccessPayload.param,
        param: apiSuccessPayload.param,
      };

    case "SET_DATA":
      const { payload: setDataPayload } = action;

      return {
        ...state,
        data: setDataPayload.data,
        dataRecieved: new Date(),
        error: undefined,
        latestParam: setDataPayload.param,
        param: setDataPayload.param,
      };

    case "SET_DATA_KEEP_ERROR":
      const { payload: setDataKeepErrorPayload } = action;

      return {
        ...state,
        data: setDataKeepErrorPayload.data,
        dataRecieved: new Date(),
        latestParam: setDataKeepErrorPayload.param,
        param: setDataKeepErrorPayload.param,
      };

    case "REFRESH_DATA":
      return {
        ...state,
        data: action.payload,
        dataRecieved: new Date(),
      };

    case "API_ERROR":
      const { payload: apiErrorPayload } = action;

      return {
        ...state,
        error: apiErrorPayload.error,
        latestParam: apiErrorPayload.param,
        param: apiErrorPayload.param,
        loading: false,
      };

    case "API_SENSITIVE_ERROR":
      const { payload: apiSensitiveErrorPayload } = action;

      return {
        ...state,
        error: apiSensitiveErrorPayload.error,
        data: apiSensitiveErrorPayload.data,
        dataRecieved: new Date(),
        latestParam: apiSensitiveErrorPayload.param,
        param: apiSensitiveErrorPayload.param,
        loading: false,
      };

    case "SET_ERROR":
      const { payload: setErrorPayload } = action;

      return {
        ...state,
        error: setErrorPayload.error,
        latestParam: setErrorPayload.param,
        param: setErrorPayload.param,
      };

    case "SET_SENSITIVE_ERROR":
      const { payload: setSensitiveErrorPayload } = action;

      return {
        ...state,
        error: setSensitiveErrorPayload.error,
        data: setSensitiveErrorPayload.data,
        dataRecieved: new Date(),
        latestParam: setSensitiveErrorPayload.param,
        param: setSensitiveErrorPayload.param,
      };

    case "REFRESH_ERROR":
      return {
        ...state,
        error: action.payload,
      };

    default:
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const check: never = action;
      return state;
  }
};

export const gdReducer = genuxDataReducer;
