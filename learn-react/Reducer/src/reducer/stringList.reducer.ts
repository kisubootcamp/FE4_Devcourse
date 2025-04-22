import { StringListAction, StringListActionType } from "../types/stringList";

export function StringListReducer(
  stringArr: string[],
  action: StringListAction
): string[] {
  switch (action.type) {
    case StringListActionType.ADD_ITEM:
      return [...stringArr, action.payload];
    case StringListActionType.REMOVE_ITEM:
      return stringArr.filter((_, index) => index !== action.payload);
    default:
      return stringArr;
  }
}
