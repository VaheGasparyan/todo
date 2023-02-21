import React, {useEffect} from 'react';

/// REDUX
import {useAppDispatch} from "app/hooks";
import {setTask} from "features/todoSlice";

/// ENUMS
import {Names} from "enums";

/// COMPONENTS
import Todo from "todo";

/// CSS
import './App.css'

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(Names.localStorageName) as string);

        dispatch(setTask(data));
    }, []);

  return (
    <div className='wrapper'>
      <Todo />
    </div>
  );
}

export default App;
