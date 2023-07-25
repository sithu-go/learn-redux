import { Action } from "redux";

export interface AppState {
    counter: number;
}

// Define the action types
enum ActionType {
    INCREMENT = "INCREMENT",
    DECREMENT = "DECREMENT",
    ADD = "ADD",
}

// Define the actions with payloads using action creator functions
interface IncrementAction extends Action<ActionType.INCREMENT> { }
interface DecrementAction extends Action<ActionType.DECREMENT> { }
interface AddAction extends Action<ActionType.ADD> {
    payload: number; // Payload type for the ADD action
}
// Define the union type for all possible actions
export type AppAction = IncrementAction | DecrementAction | AddAction;