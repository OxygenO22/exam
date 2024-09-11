/* type Status = "Stopped" | "Playing" | "Paused";
type StateType = {
  volume: number; // in percents
  trackUrl: string; // 'https://blabla.com/track01.mp3',
  currentPlayPosition: number; // milliseconds,
  status: Status;
};
export const playerReducer = (state: StateType, action: ChangeThemeIdActionType) => {
  switch (action.type) {
    case "TRACK-VOLUME-CHANGED":
      return {
        ...state,
        volume: action.volumeLevel,
      };
    default:
      return state;
  }
};

const muteTrackAC = () => ({ type: "TRACK-MUTED" });
const changeVolumeAC = (volumeLevel: number) => ({
  type: "TRACK-VOLUME-CHANGED",
  volumeLevel,
});

export type ChangeThemeIdActionType = ReturnType<typeof changeVolumeAC>;
const changeTrackAC = (url: string) => ({ type: "TRACK-URL-CHANGED", url });
const changeTrackPlayStatusAC = (status: Status) => ({
  type: "TRACK-STATUS-CHANGED",
  status,
});

const state: StateType = {
  status: "Stopped",
  currentPlayPosition: 1213,
  trackUrl: "https://blabla.com/track01.mp3",
  volume: 100,
};
const newState = playerReducer(state, changeVolumeAC(20));
console.log(newState.volume === 20);

// Напишите вместо XXX правильную строку кода, чтобы изменить громкость трека и увидеть в консоли true.
 */




/* import React, {useState, useReducer, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { useDispatch } from 'react-redux';

const changeCounter = (state: number, action: any): number => {
    switch (action.type) {
        case "INC_VALUE":
            return state + 1
        case "RESET":
            return 0
        case "DEC_VALUE":
            return state - 1
        default:
            return state
    }
}

function Counter() {
    const [value, setValue] = useReducer(changeCounter, 0);
    const [isCounter, setIsCounter] = useState(true)
    const commonStyles: React.CSSProperties = {
        border: "1px solid black",
        margin: "100px auto",
        width: "300px",
        height: "150px",
        textAlign: "center",
    }
    const btnStyles: React.CSSProperties = {
        color: "white",
        fontWeight: "bold",
        backgroundColor: "darkgray",
        borderRadius: "3px",
        minWidth: "40px"
    }

    return (
        <div style={commonStyles}>{
            isCounter
                ? <div >
                    <div style={{marginBottom: "20px"}}>
                        <h2>{value}</h2>
                        <button
                            style={{...btnStyles, backgroundColor: "red"}}
                            onClick={() => setIsCounter(false)}>OFF</button>
                    </div>
                    <button style={btnStyles} onClick={() => setValue({type: "INC_VALUE"})}>+</button>
                    <button style={btnStyles} onClick={() => setValue({type: "RESET"})}>0</button>
                    <button style={btnStyles} onClick={() => setValue({type: "DEC_VALUE"})}>-</button>

                </div>
                : <div style={{textAlign: "center"}}>
                    <h2>Counter not working</h2>
                    <button
                        style={{...btnStyles, backgroundColor: "green"}}
                        onClick={() => setIsCounter(true)}>ON</button>
                </div>
        }
        </div>
    )
}


ReactDOM.render(
    <Counter/>, document.getElementById('root')
);
// Что надо написать вместо XXX и YYY, чтобы код работал? Напишите через пробел. */

/* import React, { useCallback, useState } from 'react'
import ReactDOM from 'react-dom'

export const App = () => {
    const [temp, setTemp] = useState(100)
    const [seconds, setSeconds] = useState(0)

    const resetTemp = useCallback(() => setTemp(0), [])

    const incSec = useCallback(() => setSeconds(seconds + 1), [seconds]);

    return <>
        <TempDisplay temp={temp} resetTemp={resetTemp}/>
        <SecDisplay seconds={seconds} incSec={incSec}/>
    </>
}
const TempDisplay = React.memo((props: any) => {
    console.log('Render TempDisplay')
    return (
        <div style={{marginBottom: '10px'}} onClick={props.reset}>
            <p>
                <b>Температура: </b>{props.temp} &#176;
            </p>
            <button onClick={props.resetTemp}>Сбросить температуру к 0</button>
        </div>
    )
})

const SecDisplay = React.memo((props: any) => {
    console.log('Render SecDisplay')
    return (
        <div>
            <p><b>Секунды:</b> {props.seconds} c </p>
            <button style={{marginRight: '20px'}}
                    onClick={props.incSec}>
                Увеличить время на 1 секунду
            </button>
        </div>
    )
})

ReactDOM.render(<App/>, document.getElementById('root'))

// Почему не корректно работает счетчик времени при нажатии на кнопку (срабатывает только 1 раз) ?
// Найдите в чем причина.
// Исправленную версию строки напишите в качестве ответа

// Пример ответа: const incSec = () => setSeconds(seconds + 1) */



/* export const reducer = (state: InitialStateType, action: ChangeThemeIdActionType) => {
  switch (action.type) {
    case "TRACK-DELETED":
      return state.filter((track: any) => track.id !== action.trackId );
    default:
      return state;
  }
};
const deleteTrackAC = (trackId: number) => ({ type: "TRACK-DELETED", trackId });
export type ChangeThemeIdActionType = ReturnType<typeof deleteTrackAC>;
const state = [
  { id: 12, likesCount: 10 },
  { id: 14, likesCount: 2 },
  { id: 100, likesCount: 0 },
];

type InitialStateType = typeof state
const newState = reducer(state, deleteTrackAC(14));
console.log(newState.length === 2); */


import {createStore} from 'redux'
import ReactDOM from 'react-dom'
import {Provider, useSelector, useDispatch} from 'react-redux'
import React from 'react'

const students = {
    students: [
        {id: 1, name: 'Bob'},
        {id: 2, name: 'Alex'},
        {id: 3, name: 'Donald'},
        {id: 4, name: 'Ann'},
    ]
}
type RemoveStudentAT = {
    type: "REMOVE-STUDENT"
    id: number
}
const RemoveStudentAC = (id: number): RemoveStudentAT => ({
    type: "REMOVE-STUDENT",
    id
})

const studentsReducer = (state = students, action: RemoveStudentAT) => {
    switch (action.type) {
        case "REMOVE-STUDENT":
            return {
                ...state,
                students: state.students.filter(s => s.id !== action.id)
            }
    }
    return state
}

const store = createStore(studentsReducer)
type RootStateType = ReturnType<typeof studentsReducer>


const StudentList = () => {
    const listItemStyles = {
        width: "100px",
        borderBottom: "1px solid gray",
        cursor: "pointer",
    }
    const students = useSelector((state: RootStateType) => state.students)
    const dispatch = useDispatch()
    const studentsList = students.map(s => {
        const removeStudent = () => {
            dispatch(RemoveStudentAC(s.id));
        }
        return (
            <li key={s.id}
                style={listItemStyles}
                onClick={removeStudent}>
                {s.name}
            </li>)
    })
    return (
        <ol>
            {studentsList}
        </ol>

    )
}


ReactDOM.render(<div>
        <Provider store={store}>
            <StudentList/>
        </Provider>
    </div>,
    document.getElementById('root')
)

// Что нужно написать вместо XXX, YYY и ZZZ, чтобы при клике по имени студент
// удалялся из списка? Напишите через пробел.
