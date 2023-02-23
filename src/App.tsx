import React, {useEffect} from 'react';

/// REDUX
import {useAppDispatch} from "app/hooks";
import {setFirstRender} from "features/todoSlice";

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
        const btnState = localStorage.getItem(Names.btnStateLocalSTRG);

        console.log(btnState);

        dispatch(setFirstRender({
            data,
            buttonState: btnState || 'all'
        }));
    }, []);

  return (
    <div className='wrapper'>
      <Todo />
    </div>
  );
}

export default App;
