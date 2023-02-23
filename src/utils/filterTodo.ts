import {ITodo} from "interfaces";
import {Names} from "enums";

export const filterTodo = (todo: ITodo[], btnState: string) => {
    switch (btnState) {
        case Names.all:
            return todo;
        case Names.active:
            return todo.filter(todo => {
                return !todo.completed
            });
        case Names.completed:
            return todo.filter(todo => {
                return todo.completed;
            });
    };
}