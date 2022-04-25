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
            const targetListIndex = findItemIndexById(draft.lists, listId)
        }
    }
}