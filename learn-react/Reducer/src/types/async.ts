export type AsyncState = {
  data: string[];
  error: string | null;
  loading: boolean;
};

export enum AsyncActionType {
  FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST",
  FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS",
  FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE",
}

export type AsyncAction =
  | {
      type: AsyncActionType.FETCH_DATA_FAILURE;
      payload: string;
    }
  | {
      type: AsyncActionType.FETCH_DATA_SUCCESS;
      payload: string[];
    }
  | {
      type: AsyncActionType.FETCH_DATA_REQUEST;
    };
