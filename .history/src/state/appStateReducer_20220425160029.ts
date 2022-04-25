import { Action } from "./actions";
import { findItemIndexById } from "../utils/arrayutils";
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

export const appStateReducer = (
    draft: AppState,
    action: Action
): AppState | void => {
    switch (action.type) {
        case "ADD_LIST": {
            draft.lists.push({
                id: nanoid(),
                text: action.payload,
                tasks: []
            });
            break;
        }
        case "ADD_TASK": {
            const {text, listId} = action.payload;
            const targetListIndex = findItemIndexById(draft.lists, listId);
            draft.lists[targetListIndex].tasks.push({
                id: nanoid(),
                text
            });
            break;
        }
        default: {
            throw new Error("Hit ska vi aldrig!")
        }
    }
}