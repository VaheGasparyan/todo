import {FC} from "react";

/// REDUX
import {useAppSelector} from "app/hooks";

/// COMPONENTS
import NotFoundATask from "../notFoundATask";

/// MUI
import {Radio} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

/// CSS
import './drawTodoListStyle.css'

const DrawTodoList: FC = () => {
    const { data } = useAppSelector(state => state.todo);

    return (
        <>
            {data ? <div className='todo_list'>
                {data.map((todo) => {
                    return (
                        <div key={todo.id} className='task'>
                            <div className="info">
                                <div className='wrap'>
                                    <Radio color="success" />
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