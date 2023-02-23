import {FC, MouseEvent} from "react";
import {checkedTodoTask} from "utils/checkedTodoTask";

/// REDUX
import {useAppDispatch, useAppSelector} from "app/hooks";
import {setTask} from "features/todoSlice";

/// ENUM

import { Index } from "enums";
/// COMPONENTS

import NotFoundATask from "../notFoundATask";
/// MUI
import {Radio} from "@mui/material";

import DeleteIcon from '@mui/icons-material/Delete';
/// CSS
import './drawTodoListStyle.css'

const DrawTodoList: FC = () => {
    const { data } = useAppSelector(state => state.todo);
    const dispatch = useAppDispatch();

    const checked = (event: MouseEvent<HTMLButtonElement>) => {
        const elementId = event.currentTarget.children.item(Index.childrenIndex)!.id;

        if(data) {
            const newTodo = checkedTodoTask(data, elementId);
            dispatch(setTask(newTodo));
        }
    }

    return (
        <>
            {data ? <div className='todo_list'>
                {data.map((todo) => {
                    return (
                        <div key={todo.id} className='task'>
                            <div className="info">
                                <div className='wrap'>
                                    <Radio id={todo.id} onClick={checked} checked={todo.completed} color="success" />
                                    <p>{todo.task}</p>
                                </div>
                                <DeleteIcon  sx={{color: 'red'}}/>
                            </div>
                            <div className='border'></div>
                        </div>
                    );
                })}
            </div> : <NotFoundATask />}
        </>
    );
};

export default DrawTodoList;