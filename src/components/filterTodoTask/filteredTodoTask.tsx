import {ChangeEvent, FC, MouseEvent, useState} from "react";

/// REDUX
import {useAppDispatch, useAppSelector} from "app/hooks";
import {setTask} from "features/todoSlice";

/// UTILS
import {filterTodo} from "utils/filterTodo";

/// ENUM
import {Index, Names} from "enums";

/// MUI
import {Radio} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

/// CSS
import './filteredTodoStyle.css'
import {changeTodoTask} from "../../utils/changeTodoTask";

interface IFilteredTodoTaskProps {
    checked(event: MouseEvent<HTMLButtonElement>): void;
    deleteTask(event: MouseEvent): void;
}

const FilteredTodoTask: FC<IFilteredTodoTaskProps> = ({ checked, deleteTask }) => {
    const { todo } = useAppSelector(state => state);
    const dispatch = useAppDispatch();
    const [change, setChange] = useState<{edit: boolean, value: string}>({
        edit: false,
        value: ''
    });

    const handleEdit = (event: MouseEvent) => {
        const id = event.currentTarget.id;

        if(id.includes(Names.check) && todo.data) {
            const todoId = id.split(' ');
            const newTodo = changeTodoTask(change.value, todoId[Index.idIndex], todo.data);

            dispatch(setTask(newTodo));
            setChange(prevState => {
                return {
                    edit: !prevState.edit,
                    value: ''
                }
            })
        } else if(id.includes(Names.close)) {
            setChange(prevState => {
                return {
                    edit: !prevState.edit,
                    value: ''
                }
            });
        } else {
            setChange(prevState => {
                return {
                    ...prevState,
                    edit: !prevState.edit
                }
            })
        }
    }

    const changeInput = (event: ChangeEvent<HTMLInputElement>) => {
        setChange(prevState => {
            return {
                ...prevState,
                value: event.target.value
            }
        });
    }

    return (
        <>
            {todo.data && todo.data.map((todo) => {
                return (
                    <div key={todo.id} className='task'>
                        <div className="info">
                            <div className='wrap'>
                                {!change.edit ? <div className="inner">
                                    <Radio id={todo.id} onClick={checked} checked={todo.completed} color="success" />
                                    <p>{todo.task}</p>
                                </div> : <div className='inputChange'><input value={change.value} onChange={changeInput} type="text" placeholder='Edit your task' /></div>}
                            </div>
                                <div className="settings_buttons">
                                    <div className="edit" >
                                        {!change.edit ? <EditIcon id={todo.id} onClick={handleEdit} className='edit_button' /> : <CheckIcon fontSize='large' className='checkIcon' id={`check ${todo.id}`} onClick={handleEdit} />}
                                    </div>

                                    <div className="delete_button">
                                        {!change.edit ? <DeleteIcon onClick={deleteTask} id={todo.id} sx={{color: 'red'}}/> : <CloseIcon fontSize='large' className='closeIcon' id='close' onClick={handleEdit} />}
                                    </div>
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