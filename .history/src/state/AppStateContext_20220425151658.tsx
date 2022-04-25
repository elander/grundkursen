import { FC, createContext, useContext } from "react";

export type AppState = {
    lists: List[],
}

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
    getTasksByListId: (listId: string) => Task[]
};

const AppStateContext = 
    createContext<AppStateContextProps>({} as AppStateContextProps);

type AppStateProviderProps = {
    children: React.ReactNode;
};

export const AppStateProvider: FC<AppStateProviderProps> = 
    ({ children }) => {
        const {lists} = appData;
        const getTasksByListId = (id: string) => {
             return lists.find((list) => list.id === id)?.tasks || [];
        }
        return (
            <AppStateContext.Provider value={{lists, getTasksByListId}}>
                {children}
            </AppStateContext.Provider>

        )

    }

export const useAppState = () => {
    return useContext(AppStateContext);
}