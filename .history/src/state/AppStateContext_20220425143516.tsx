import { FC, createContext, useContext } from "react";

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
            text: "In Progress",
            tasks: [
                {id: "1", text: "Task 2"},
            ],
        },
        {
            id:"2",
            text: "Done",
            tasks: [
                {id: "2", text: "Task 3"},
            ],
        },
    ],
};

type AppStateContextProps = {
    lists: List[],
};

const AppStateContext = 
    createContext<AppStateContextProps>({} as AppStateContextProps);

type AppStateProviderProps = {
    children: React.ReactNode;
};

export const AppStateProvider: FC<AppStateProviderProps> = 
    ({ children }) => {
        const lists = appData;
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