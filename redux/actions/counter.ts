enum CounterActionType {
    INCREMENT,
    DECREMENT
}

export interface CounterAction {
    type: CounterActionType;
    payload: number;
}

export type ActionFunc = (value?: number) => CounterAction

export const INCREMENT = CounterActionType.INCREMENT
export const DECREMENT = CounterActionType.DECREMENT

export const increment: ActionFunc = (value = 1) => ({
    type: INCREMENT,
    payload: value
})

export const decrement: ActionFunc = (value = 1) => ({
    type: DECREMENT,
    payload: value
})