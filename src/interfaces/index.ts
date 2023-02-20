export interface ITodoState {
    data: ITodo[] | null
}

export interface ITodo {
    id: string;
    completed: boolean;
    task: string
}