import {ITodo} from "interfaces";
import {Names} from "enums";

export const changeTodoTask = (value: string, id: string, todo: ITodo[]) => {
    const newTodo = todo.map(todo => {
        if(todo.id === id) {
            return {
                ...todo,
                task: value
            }
        }

        return todo;
    });

    localStorage.setItem(Names.localStorageName, JSON.stringify(newTodo));

    return newTodo
}