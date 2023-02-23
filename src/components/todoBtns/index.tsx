import {FC, MouseEvent} from "react";

import {btnsValue} from "utils/btnsValue";
import {v4 as uuid} from 'uuid';

/// REDUX
import {useAppDispatch, useAppSelector} from "app/hooks";
import {setButtonState} from "features/todoSlice";

/// ENUMS
import {Names} from "enums";

/// CSS
import './todoBtnsStyle.css'

/// UTILS
import {filterTodo} from "utils/filterTodo";

const TodoButtons: FC = () => {
    const { btnState } = useAppSelector(state => state.todo);
    const dispatch = useAppDispatch();

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        localStorage.setItem(Names.btnStateLocalSTRG, event.currentTarget.className);
        const btnState = event.currentTarget.className;
        const todos = JSON.parse(localStorage.getItem(Names.localStorageName) as string);
        const newTodos = filterTodo(todos, btnState);

        dispatch(setButtonState({
            btnState,
            newTodos
        }))
    };

    return (
        <>
            {btnsValue.map(value => {
                const text = value.slice(0, 1).toUpperCase() + value.slice(1).toLowerCase();

                if(value === btnState) {
                    return <button onClick={handleClick} key={uuid()} className={`${value} clicked`}>{text}</button>
                }

                return <button onClick={handleClick} key={uuid()} className={value}>{text}</button>
            })}
        </>
    );
};

export default TodoButtons;