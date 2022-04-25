import {
     AppState,
     List,
     Task,
     appStateReducer,
} from "./appStateReducer";
import { Dispatch, FC, createContext, useContext } from "react";

import { Action } from "./actions";
import { useImmerReducer } from "use-immer";

const appData = {
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
    lists: List[],
    getTasksByListId: (listId: string) => Task[],
    dispatch: Dispatch<Action>
};

const AppStateContext = 
    createContext<AppStateContextProps>({} as AppStateContextProps);

type AppStateProviderProps = {
    children: React.ReactNode;
};

export const AppStateProvider: FC<AppStateProviderProps> = 
    ({ children }) => {
        const [state, dispatch] = useImmerReducer(appStateReducer, appData)
        // const {lists} = appData;
        const { lists } = state;
        const getTasksByListId = (id: string) => {
             return lists.find((list) => list.id === id)?.tasks || [];
        }
        return (
            <AppStateContext.Provider value={{lists, getTasksByListId, dispatch}}>
                {children}
            </AppStateContext.Provider>

        )

    }

export const useAppState = () => {
    return useContext(AppStateContext);
}