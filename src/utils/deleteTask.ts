import {ITodo} from "interfaces";
import {Names} from "enums";

export const deleteTodoTask = (todo: ITodo[], id: string) => {
    const newTodo = todo.filter(todo => {
        return todo.id !== id;
    });

    localStorage.setItem(Names.localStorageName, JSON.stringify(newTodo));

    return newTodo;
}