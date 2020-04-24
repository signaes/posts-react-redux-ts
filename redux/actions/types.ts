export interface ReduxAction<T> {
  type: T;
  payload?: any;
}

export type ActionCreatorFunc<T> = (payload?: { [key: string]: any }) => T