import {FC} from "react";

/// CSS
import './todoInputStyle.css'

const TodoInput: FC = () => {
    return (
        <>
            <input type="text" placeholder='Add a new task...'/>
        </>
    );
};

export default TodoInput;