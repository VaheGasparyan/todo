import { FC } from "react";

/// REDUX
import {useAppSelector} from "app/hooks";

/// UTILS
import { getDate } from "utils/getDate";

/// CSS
import './todoHeaderStyle.css'

/// COMPONENTS
import TodoButtons from "../todoBtns";
import TodoInput from "../todoInput";


const TodoHeader: FC = () => {
    const { data } = useAppSelector(state => state.todo);

    return (
        <header>
            <div className="date">
                <h2>{getDate()}</h2>
            </div>
            <div className="info">
                <div className="task_count">
                    <p>{data ? `${data.length} task` : `${0} task`}</p>
                </div>
                <div className="btns">
                    <TodoButtons />
                </div>
            </div>
            <div className="addTask">
                <TodoInput />
            </div>
        </header>
    )
};

export default TodoHeader;