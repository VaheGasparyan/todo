import {ITodo} from "interfaces";
import {Names} from "enums";

export const checkedTodoTask = (todo: ITodo[], id: string) => {
    const newTodo = todo.map(todo => {
        if(todo.id === id) {
            return {
                ...todo,
                completed: !todo.completed
            }
        }

        return todo
    });

    localStorage.setItem(Names.localStorageName, JSON.stringify(newTodo));

    return newTodo;
}