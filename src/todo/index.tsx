import { FC } from "react";

/// COMPONENTS
import TodoHeader from "components/todoHeader";
import DrawTodoList from "components/drawTodoList";

const Todo: FC = () => {
    return (
        <div className='todo'>
            <TodoHeader />
            <DrawTodoList />
        </div>
    )
};

export default Todo;