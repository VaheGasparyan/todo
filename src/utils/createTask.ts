import { v4 as uuid } from 'uuid';

import { Names } from 'enums'

export const createTask = (task: string) => {
    const newTask = {
        id: uuid(),
        completed: false,
        task
    };

    const parseValue = JSON.parse(localStorage.getItem(Names.localStorageName) as string);

    if(parseValue) {
        const returnedValue = [newTask, ...parseValue]
        localStorage.setItem(Names.localStorageName, JSON.stringify(returnedValue));

        return returnedValue
    } else {
        const returnedValue = [newTask]
        localStorage.setItem(Names.localStorageName, JSON.stringify(returnedValue));

        return returnedValue;
    }
}