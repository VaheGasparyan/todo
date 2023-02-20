import { FC } from "react";

/// CSS
import './todoBtnsStyle.css'

const TodoButtons: FC = () => {
    return (
        <>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </>
    );
};

export default TodoButtons;