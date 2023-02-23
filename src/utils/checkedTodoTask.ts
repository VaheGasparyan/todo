import {ITodo} from "interfaces";
import {Names} from "enums";

export const checkedTodoTask = (id: string) => {
    const todos = JSON.parse(localStorage.getItem(Names.localStorageName) as string);

    const newTodo = todos.map((todo: ITodo) => {
        if(id === todo.id) {
            return {
                ...todo,
                completed: !todo.completed
            };
        };

        return todo;
    });

    localStorage.setItem(Names.localStorageName, JSON.stringify(newTodo));

    return newTodo;
}