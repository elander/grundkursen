import {
     AppState,
     List,
     Task,
     appStateReducer,
} from "./appStateReducer";
import { Dispatch, FC, createContext, useContext, useEffect } from "react";

import { Action } from "./actions";
import { DragItem } from "../utils/DragItem";
import { save } from "../api/api";
import { useImmerReducer } from "use-immer";
import { withInitialState } from "./withInitialState";

export const appData = {
    draggedItem: null,
    lists: [
        {
            id:"0",
            text: "To Do",
            tasks: [
                {id: "0", text: "Task 1"},
            ],
        },
        {
            id:"1",
            text: "Pågående",
            tasks: [
                {id: "1", text: "Task 2"},
            ],
        },
        {
            id:"2",
            text: "Done",
            tasks: [
                {id: "2", text: "Eftermiddagsfika"},
            ],
        },
    ],
};

type AppStateContextProps = {
    draggedItem: DragItem | null,
    lists: List[],
    getTasksByListId: (listId: string) => Task[],
    dispatch: Dispatch<Action>
};

const AppStateContext = 
    createContext<AppStateContextProps>({} as AppStateContextProps);

type AppStateProviderProps = {
    children: React.ReactNode;
    initialState: AppState;
};

export const AppStateProvider = withInitialState<AppStateProviderProps>( 
    ({ children, initialState }) => {
        const [state, dispatch] = useImmerReducer(appStateReducer, initialState)
        // const {lists} = appData;

        const { draggedItem, lists } = state;
        const getTasksByListId = (id: string) => {
             return lists.find((list) => list.id === id)?.tasks || [];
        }
        useEffect(() => {
            save(state);
        }, [state]);
        return (
            <AppStateContext.Provider value={{draggedItem, lists, getTasksByListId, dispatch}}>
                {children}
            </AppStateContext.Provider>

        )

    })

export const useAppState = () => {
    return useContext(AppStateContext);
}