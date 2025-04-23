export enum StringListActionType {
  ADD_ITEM = "ADD_ITEM",
  REMOVE_ITEM = "REMOVE_ITEM",
}

export type StringListAction =
  | {
      type: StringListActionType.ADD_ITEM;
      payload: string;
    }
  | {
      type: StringListActionType.REMOVE_ITEM;
      payload: number;
    };
