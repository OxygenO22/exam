import React, { useCallback, useState } from "react";
import ReactDOM from "react-dom";
export const App = () => {
  const [temp, setTemp] = useState(100);
  const [seconds, setSeconds] = useState(0);
  const resetTemp = useCallback(() => setTemp(0), []);
  const incSec = useCallback(() => setSeconds(seconds + 1), [seconds]);



   /* const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "TRACK-ADDED":
        return {
          ...state,
          [action.trackId]: {
            id: action.trackId,
            likesCount: 0,
          },
        };
      default:
        return state;
    }
  };
  const addTrackAC = (trackId: number) => ({ type: "TRACK-ADDED", trackId });
  const state = {
    12: { id: 12, likesCount: 10 },
    14: { id: 14, likesCount: 2 },
    100: { id: 100, likesCount: 0 },
  };
  const newState = reducer(state, addTrackAC(300));
  console.log(newState[300].likesCount === 0); */


  /* const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "TRACK-DELETED":
        return state.filter((track: any) => track.id !== action.trackId);
      default:
        return state;
    }
  };
  const deleteTrackAC = (trackId: number) => ({
    type: "TRACK-DELETED",
    trackId,
  });
  const state = [
    { id: 12, likesCount: 10 },
    { id: 14, likesCount: 2 },
    { id: 100, likesCount: 0 },
  ];
  const newState = reducer(state, deleteTrackAC(14));
  console.log(newState.length === 2);
 */

  /* const value = 96;
  const getValue = (value: any) => {
    value += 42;
    return value;
  };
  const myResult = getValue("") || value;

  console.log(myResult); */


  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "USER-NAME-UPDATED":
        return { ...state, user: { name: action.name } };
      default:
        return state;
    }
  };
  const updateUserNameAC = (name: string) => ({
    type: "USER-NAME-UPDATED",
    name,
  });
  const state = {
    count: 10,
    user: {
      name: "Dimych",
      age: 18,
      isMarried: true,
      status: "offline",
    },
    books: ["you don't know JS"],
  };
  const newState = reducer(state, updateUserNameAC("Dmitry"));
  
  console.log(newState.user.name === "Dmitry");
  console.log(newState.books === state.books);
  console.log(newState.user !== state.user);

  /* const students = [{ name: "Bob" }, { name: "Alex" }, { name: "Donald" }];
  const filteredStudents = students.filter((s) => s.name !== "Kate");
  const lengthDiff = students.length - filteredStudents.length;
  const newValue = (lengthDiff && 95.78) || (14.53 && 78.36); 
  console.log(newValue); */



  return (
    <>
      <TempDisplay temp={temp} resetTemp={resetTemp} />
      <SecDisplay seconds={seconds} incSec={incSec} />
    </>
  );
};
const TempDisplay = React.memo((props: any) => {
  console.log("Render TempDisplay");
  return (
    <div style={{ marginBottom: "10px" }} onClick={props.reset}>
      <p>
        <b>Температура: </b>
        {props.temp} &#176;
      </p>
      <button onClick={props.resetTemp}>Сбросить температуру к 0</button>
    </div>
  );
});
const SecDisplay = React.memo((props: any) => {
  console.log("Render SecDisplay");
  return (
    <div>
      <p>
        <b>Секунды:</b> {props.seconds} c{" "}
      </p>
      <button style={{ marginRight: "20px" }} onClick={props.incSec}>
        Увеличить время на 1 секунду
      </button>
    </div>
  );
});
ReactDOM.render(<App />, document.getElementById("root"));
