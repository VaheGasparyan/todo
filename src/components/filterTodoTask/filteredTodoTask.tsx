import {FC, MouseEvent, useEffect} from "react";

/// REDUX
import {useAppDispatch, useAppSelector} from "app/hooks";
import {setTask} from "features/todoSlice";

/// UTILS
import {filterTodo} from "utils/filterTodo";
import {Names} from "enums";

/// MUI
import {Radio} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface IFilteredTodoTaskProps {
    checked(event: MouseEvent<HTMLButtonElement>): void;
    deleteTask(event: MouseEvent): void;
}

const FilteredTodoTask: FC<IFilteredTodoTaskProps> = ({ checked, deleteTask }) => {
    const { todo } = useAppSelector(state => state);

    return (
        <>
            {todo.data && todo.data.map((todo) => {
                return (
                    <div key={todo.id} className='task'>
                        <div className="info">
                            <div className='wrap'>
                                <Radio id={todo.id} onClick={checked} checked={todo.completed} color="success" />
                                    <p>{todo.task}</p>
                            </div>
                                <div id={todo.id} onClick={deleteTask} className="deleteButton">
                                    <DeleteIcon sx={{color: 'red'}}/>
                                </div>
                            </div>
                        <div className='border'></div>
                    </div>
                );
            })}
        </>
    )
};

export default FilteredTodoTask;