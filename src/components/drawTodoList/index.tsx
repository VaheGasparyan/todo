import {FC, MouseEvent} from "react";

/// UTILS
import {deleteTodoTask} from "utils/deleteTask";
import {checkedTodoTask} from "utils/checkedTodoTask";
import {filterTodo} from "utils/filterTodo";

/// REDUX
import {useAppDispatch, useAppSelector} from "app/hooks";
import {setTask} from "features/todoSlice";

/// ENUM
import { Index } from "enums";

/// COMPONENTS
import FilteredTodoTask from "../filterTodoTask/filteredTodoTask";
import NotFoundATask from "../notFoundATask";

/// CSS
import './drawTodoListStyle.css'

const DrawTodoList: FC = () => {
    const { data, btnState } = useAppSelector(state => state.todo);
    const dispatch = useAppDispatch();

    const checked = (event: MouseEvent<HTMLButtonElement>) => {
        const elementId = event.currentTarget.children.item(Index.childrenIndex)!.id;

        if(data) {
            const todo = checkedTodoTask(elementId);
            const newTodo = filterTodo(todo, btnState);
            dispatch(setTask(newTodo));
        }
    }

    const deleteTask = (event: MouseEvent) => {
        if(data) {
            const elementId = event.currentTarget.id;
            const filteredTodo = deleteTodoTask(data, elementId);

            dispatch(setTask(filteredTodo));
        }
    }

    return (
        <>
            {data && data.length ? <div className='todo_list'>
                {<FilteredTodoTask checked={checked} deleteTask={deleteTask} />}
            </div> : <NotFoundATask />}
        </>
    );
};

export default DrawTodoList;