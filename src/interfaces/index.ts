export interface ITodoState {
    data: ITodo[] | null;
    btnState: string | 'all'
}

export interface ITodo {
    id: string;
    completed: boolean;
    task: string
}