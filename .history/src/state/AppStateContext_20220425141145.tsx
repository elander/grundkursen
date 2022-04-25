type Task = {
    id: string,
    text: string,
}

interface List = {
    id: string,
    text: string,
    tasks: Task[],
}

export type = AppState {
    lists: List[],
}