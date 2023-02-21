import {FC, FormEvent} from "react";

/// REDUX
import {useAppDispatch} from "app/hooks";
import {setNewTask} from "features/todoSlice";

/// ENUMS
import {Names} from "enums";

/// UTILS
import {createTask} from "utils/createTask";

/// CSS
import './todoInputStyle.css'

const TodoInput: FC = () => {
    const dispatch = useAppDispatch();
    const addTask = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const newTask = createTask(formData.get(Names.inputValue) as string);

        dispatch(setNewTask(newTask));
    };

    return (
        <form onSubmit={addTask}>
            <input name={Names.inputValue} type="text" placeholder='Add a new task...'/>
        </form>
    );
};

export default TodoInput;