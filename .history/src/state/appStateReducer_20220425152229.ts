import { Action } from "./actions";
import { nanoid } from "nanoid";

type Task = {
    id: string,
    text: string,
}

type List = {
    id: string,
    text: string,
    tasks: Task[],
}

export type AppState = {
    lists: List[],
}

export appStateReducer = (
    draft: AppState
    action: Action
): AppState | void => {
    //
}