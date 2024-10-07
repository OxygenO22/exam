/* import ReactDOM from "react-dom/client";
import React, { useEffect, useState } from "react";
export const Mining = () => {
  const [btc, setBtc] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setBtc((prevState) => prevState + 1); // simulate 0.1 BTC per second
    }, 1000);
  }, []);
  return <h1>🪙 BTC: {btc}</h1>;
};
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<Mining />); */





/* import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/secret/JIUzI1NiIsInR5cCI6IkpXVCJ9')
  }, [])

  return (
    <div>Login</div>
  )
}
const SecretToken = () => {
  const token = "JIUzI1NiIsInR5cCI6IkpXVCJ9"; // FIX

  return (
    <h1>🦾 token: {token}</h1>
  )
}

export const App = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Login/>}/>
      <Route path={'/secret/:token'} element={<SecretToken/>}/>
    </Routes>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);

// 📜Описание:
// Исправьте код на 17 строке так, чтобы на странице отобразился токен.

//❗Ответ можно указывать с типизацией и без. Учтено несколько вариантов
// 🖥 Пример ответа: const token = '123' */




/* import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, useNavigate, useParams } from 'react-router-dom'
import React from 'react'

type UserType = {
  id: number
  name: string
  avatar: string
  age: number
  address: string
}

const users: UserType[] = [
  {
    id: 1,
    name: 'my Name',
    age: 32,
    avatar: '—ฅ/ᐠ.̫ .ᐟ\\ฅ—',
    address: 'my Address'
  },
  {
    id: 2,
    name: 'John',
    age: 22,
    avatar: ':)',
    address: 'California'
  },
  {
    id: 3,
    name: 'Mike',
    age: 18,
    avatar: '^._.^',
    address: 'New York'
  },
  {
    id: 4,
    name: 'Emma',
    age: 38,
    avatar: '/ᐠ-ꞈ-ᐟ\\',
    address: 'Washington'
  },
]

const StartPage = () => {
  const navigate = useNavigate()
  const friends = users.filter(u => u.id !== 1)

  const mappedFriends = friends.map((f, i) => {
    const go = () => {
      navigate('/friend/' + f.id)
    }

    return (
      <div key={i} onClick={go} style={{paddingLeft: 24, color: 'blue', cursor: 'pointer'}}>
        {f.name}, {f.age}
      </div>
    )
  })

  return (
    <div>
      <h2>🙂 My profile</h2>
      <Profile userId={2}/>
      <hr/>
      <h2>👪 Friends</h2>
      {mappedFriends}
    </div>
  )
}
const Profile: React.FC<{ userId?: number }> = ({userId}) => {
  const {id} = useParams<{ id: string }>()
  const user = users.find(u => u.id === +(id || userId || 0))

  return (
    <div>
      <div>
        <b>avatar</b> {user?.avatar}
      </div>
      <div>
        <div><b>name</b>: {user?.name}</div>
        <div><b>age</b>: {user?.age}</div>
        <div><b>address</b>: {user?.address}</div>
      </div>
    </div>
  )
}

export const Friends = () => {
  return (
    <Routes>
      <Route path={'/'} element={<StartPage/>}/>
      <Route path={'friend'} element={<Profile/>}/>
      <Route path={'*'} element={<div>❌404 Page Not Found❌</div>}/>
    </Routes>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <Friends/>
  </BrowserRouter>
);

// 📜 Описание:
// При загрузке приложения на экране отображается
// профиль пользователя и список друзей.
// Если кликнуть на пользователя, то видим ❌404 Page Not Found❌
// Исправьте код, чтобы по клику на пользователя
// отображалась странице с информацией о друге.
// В качестве ответа укажите исправленную строку кода.
//
// 🖥 Пример ответа: <Profile userId={4}/> */




/* import React, { ChangeEvent, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

// Types
type LoginFieldsType = {
  email: string;
  password: string;
};

// API
const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" });

const api = {
  login(data: LoginFieldsType) {
    return instance.post("auth/login", data);
  },
};

// Reducer
const initState = { isAuth: false };
type InitStateType = typeof initState;

const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
  switch (action.type) {
    case "SET_AUTH":
      return { ...state, isAuth: action.isAuth };
    default:
      return state;
  }
};

// Store
const rootReducer = combineReducers({ app: appReducer });

const store = configureStore({ reducer: rootReducer });
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>;
type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>;
const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const setAuth = (isAuth: boolean) => ({ type: "SET_AUTH", isAuth }) as const;
type ActionsType = ReturnType<typeof setAuth>;

// Thunk
const loginTC =
  (email: string, password: string): AppThunk =>
  async (dispatch) => {
    try {
      await api.login({ email, password });
      dispatch(setAuth(true));
    } catch (e: any) {
      alert(`❌ ${e.response.data.errors} ❌`);
    }
  };

// Components
const Login = () => {
  const isAuth = useAppSelector((state) => state.app.isAuth);

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const [email, setEmail] = useState("darrell@gmail.com");
  const [password, setPassword] = useState("123");

  const changeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const changePasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  if (isAuth) {
    navigate("/profile");
  }

  return (
    <div>
      <input type={"text"} value={email} onChange={changeEmailHandler} />
      <input
        type={"password"}
        value={password}
        onChange={changePasswordHandler}
      />
      <button
        disabled={!email || !password}
        onClick={() => dispatch(loginTC(email, password))}
      >
        login
      </button>
    </div>
  );
};

export const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Login />} />
      <Route path={"/profile"} element={<h2>😎 Profile</h2>} />
    </Routes>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
);

// 📜 Описание:
// ❗ Email и password менять не надо. Это тестовые данные с которыми будет происходить успешный запрос.
// Помогите разработчику исправить код так, чтобы успешно залогиниться (и редиректнуться на Profile)
// В качестве ответа укажите код, который необходимо добавить, чтобы реализовать данную задачу.

// 🖥 Пример ответа: navigate('/profile')

// И ещё раз: нужно указать не исправленную строку кода, а код, который нужно добавить🙂
 */




/* import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

// API
const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" });

const api = {
  me() {
    return instance.get("auth/me?delay=3");
  },
};

// Reducer
const initState = {
  isInitialized: false,
  isLoading: false,
  isLoggedIn: false,
};
type InitStateType = typeof initState;

const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
  switch (action.type) {
    case "SET_IS_INITIALIZED":
      return { ...state, isInitialized: action.isInitialized };
    case "SET_LOADING":
      return { ...state, isLoading: action.isLoading };
    case "SET_IS_LOGGED_IN":
      return { ...state, isLoggedIn: action.isLoggedIn };
    default:
      return state;
  }
};

// Store
const rootReducer = combineReducers({ app: appReducer });

const store = configureStore({ reducer: rootReducer });
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>;
type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>;
const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const setIsInitialized = (isInitialized: boolean) =>
  ({ type: "SET_IS_INITIALIZED", isInitialized }) as const;
const setLoading = (isLoading: boolean) => ({ type: "SET_LOADING", isLoading }) as const;
const setIsLoggedIn = (isLoggedIn: boolean) => ({ type: "SET_IS_LOGGED_IN", isLoggedIn }) as const;
type ActionsType =
  | ReturnType<typeof setLoading>
  | ReturnType<typeof setIsInitialized>
  | ReturnType<typeof setIsLoggedIn>;

// Thunk
const me = (): AppThunk => async (dispatch) => {
  dispatch(setLoading(true));
  api
    .me()
    .then((res) => {
      dispatch(setIsLoggedIn(true));
    })
    .finally(() => {
      dispatch(setLoading(false));
      dispatch(setIsInitialized(true));
    });
};

// Components
const Loader = () => <h2>🔘 Крутилка...</h2>;

const Login = () => {
  const isInitialized = useAppSelector((state) => state.app.isInitialized);
  const isLoading = useAppSelector((state) => state.app.isLoading);
  const isLoggedIn = useAppSelector((state) => state.app.isLoggedIn);

  if (isLoggedIn) {
    return <Navigate to={"/"} />;
  }

  return isLoading ? <Loader /> : <h2>🐣 Login</h2>;
};
const Profile = () => {
  const isInitialized = useAppSelector((state) => state.app.isInitialized);
  const isLoading = useAppSelector((state) => state.app.isLoading);
  const isLoggedIn = useAppSelector((state) => state.app.isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to={"/login"} />;
  }

  return <h2>😎 Profile </h2>;
};

export const App = () => {
  const isInitialized = useAppSelector((state) => state.app.isInitialized);
  const isLoading = useAppSelector((state) => state.app.isLoading);
  const isLoggedIn = useAppSelector((state) => state.app.isLoggedIn);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);


  return (
    <Routes>
      <Route path={"/"} element={<Profile />} />
      <Route path={"login"} element={<Login />} />
    </Routes>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
);

// 📜 Описание:
// После старта / обновления приложения мы видим Login, а потом через 3 секунды Profile
// Но это плохое поведение.
// Ваша задача написать код при котором пользователя не будет редиректить на Login,
// пока приложение не проинициализировано,
// а во время ожидания ответа с сервера он будет видеть Loader

// 🖥 Пример ответа: <Loader/>
 */



/* import React from 'react'
import ReactDOM from 'react-dom/client';

export const App = () => {
  return (
    <div>
      <h2>Для чего надо добавлять файлы в .gitignore ?</h2>
      <ul>
        <li>1 - Чтобы git удалял их историю, храня только последнюю версию</li>
        <li>2 - Чтобы git при работе с этими файлам уведомлял при их изменении</li>
        <li>3 - Чтобы git не следил за изменениями в данных файлах</li>
        <li>4 - Файл .gitignore не несет никакой смысловой нагрузки, т.к. все файлы с которыми мы работаем должны
          отслеживаться. Соответственно никакие файлы в .gitignore добавлять не нужно
        </li>
        <li>5 - Нет правильного ответа</li>
      </ul>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App/>);

// 📜 Описание:
// Для чего надо добавлять файлы в .gitignore ?
// Может быть несколько вариантов ответа (ответ дайте через пробел).
// ❗ Ответ будет засчитан как верный, только при полном правильном совпадении.
// Если указали правильно один вариант (1),
// а нужно было указать два варианта (1 и 2), то ответ в данном случае будет засчитан как неправильный

// 🖥 Пример ответа: 1
 */


/* import ReactDOM from 'react-dom/client';
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useNavigate, useParams } from 'react-router-dom'

const newSum = 1000

const Login = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate(`/balance/${newSum}`)
  }, [])

  return (
    <h1>Login</h1>
  )
}

const Balance = () => {
  const [balance, setBalance] = useState(500)

  const params = useParams()

  useEffect( ()=> {
    if (params.bonus) {
      setBalance(+params.bonus);
    }
  },[] )

  return (
    <h1>💵 balance: {balance}</h1>
  )
}

export const Bank = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Login/>}/>
      <Route path={'/balance/:bonus'} element={<Balance/>}/>
    </Routes>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <Bank/>
  </BrowserRouter>
);

// 📜 Описание:
// Перед вами баланс равный 500.
// Ваша задача вместо XXX написать код,
// в результате которого баланс увеличится на сумму указанную в роуте.

// 🖥 Пример ответа: balance = newSum */


/* import React from 'react'
import ReactDOM from 'react-dom/client';

export const App = () => {
  return (
    <div>
      <h2>Что нужно прописать в консоли, чтобы создать новую ветку с названием login и перейти на нее ?</h2>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App/>);

// 📜 Описание:
// Что нужно прописать в консоли, чтобы создать новую ветку с названием login и перейти на нее ?
//❗Ответ написать одной командой

// 🖥 Пример ответа: git create login
 */





/* import ReactDOM from "react-dom/client";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

type UserType = {
  id: string;
  name: string;
  age: number;
};

type UsersResponseType = {
  items: UserType[];
  totalCount: number;
};

// API
const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" });

const api = {
  getUsers(search: string) {
    return instance.get<UsersResponseType>(`users?name=${search}&pageSize=100`);
  },
};

const initState = { users: [] as UserType[] };
type InitStateType = typeof initState;

const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
  switch (action.type) {
    case "SET_USERS":
      return { ...state, users: action.users };
    default:
      return state;
  }
};

// Store
const rootReducer = combineReducers({ app: appReducer });

const store = configureStore({ reducer: rootReducer });
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>;
type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>;
const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const setUsersAC = (users: UserType[]) => ({ type: "SET_USERS", users }) as const;
type ActionsType = ReturnType<typeof setUsersAC>;

// Thunk
const getFriends =
  (name: string): AppThunk =>
  (dispatch) => {
    api.getUsers(name).then((res) => dispatch(setUsersAC(res.data.items)));
  };

export const Users = () => {
  const users = useAppSelector((state) => state.app.users);
  const dispatch = useAppDispatch();
  const [name, setName] = useState("");
  const [timerId, setTimerId] = useState(0);

  useEffect(() => {
    setTimerId(
      +setTimeout(() => {
        dispatch(getFriends(name));
      }, 1500),
    );
  }, [name]);

  

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      {users.map((u) => {
        return (
          <div key={u.id}>
            <p>
              <b>name</b>: {u.name}
            </p>
          </div>
        );
      })}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <Users />
  </Provider>,
);

// 📜 Описание:
// На экране input, куда можно вводить символы.
// Откройте Network/ fetch/XHR и поробуйте вводить символы
// Обратите внимание, что все символы которые вы вводите уходят на сервер -
// это плохо.
//
// 🪛 Задача: Починить debounce
// В качестве ответа напишите строку кода которую необходимо исправить или добавить
// для реализации данной задачи
//
// 🖥 Пример ответа: value={name(1500)} */



/* import ReactDOM from "react-dom/client";
import React, { useEffect } from "react";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

// Reducer
const initState = { find: "", words: [] as string[] };
type InitStateType = typeof initState;

const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
  switch (action.type) {
    case "SET_FIND":
      return { ...state, find: action.find };
    case "SET_WORDS":
      return { ...state, words: action.words };
    default:
      return state;
  }
};

// Store
const rootReducer = combineReducers({ app: appReducer });

const store = configureStore({ reducer: rootReducer });
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>;
type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>;
const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const setFind = (find: string) => ({ type: "SET_FIND", find }) as const;
const setWords = (words: string[]) => ({ type: "SET_WORDS", words }) as const;
type ActionsType = ReturnType<typeof setFind> | ReturnType<typeof setWords>;

// Components
const defWords = ["a", "ab", "abc", "b", "bc", "c", "d", "ac", "bcd", "cd", "abcd", "bd"];

export const App = () => {
  const find = useAppSelector((state) => state.app.find);
  const words = useAppSelector((state) => state.app.words);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setWords(defWords));
  }, []);

  const mapped = words
    .filter((w: string) => new RegExp(find, "gi").test(w))
    .map((w: string, i: number) => <div key={i}>{w}</div>);

  const onChangeHandler = (value: string) => {
    console.log(value);
    dispatch(setFind(value));
  };

  return (
    <div>
      <input value={find} onChange={(e) => onChangeHandler(e.target.value)} />
      {mapped}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

// 📜 Описание:
// На экране отображен массив слов.
// Ваша задача починить фильтрацию:
// вводите символы в input и сразу видите как фильтруются данные.
// В качестве ответа укажите исправленную версию строки.
//
// 🖥 Пример ответа: dispatch(setFind(defWords)) */


/* import ReactDOM from "react-dom/client";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

// Styles
const table: React.CSSProperties = {
  borderCollapse: "collapse",
  width: "100%",
  tableLayout: "fixed",
};

const th: React.CSSProperties = {
  padding: "10px",
  border: "1px solid black",
  background: "lightgray",
  cursor: "pointer",
};

const td: React.CSSProperties = {
  padding: "10px",
  border: "1px solid black",
};

// Types
type UserType = {
  id: string;
  name: string;
  age: number;
};

type UsersResponseType = {
  items: UserType[];
  totalCount: number;
};

type ParamsType = {
  sortBy: string | null;
  sortDirection: "asc" | "desc" | null;
};

// API
const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" });

const api = {
  getUsers(params?: ParamsType) {
    return instance.get<UsersResponseType>("users", { params });
  },
};

// Reducer
const initState = { users: [] as UserType[] };
type InitStateType = typeof initState;

const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
  switch (action.type) {
    case "SET_USERS":
      return { ...state, users: action.users };
    default:
      return state;
  }
};

// Store
const rootReducer = combineReducers({ app: appReducer });

const store = configureStore({ reducer: rootReducer });
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>;
type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>;
const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const setUsersAC = (users: UserType[]) => ({ type: "SET_USERS", users }) as const;
type ActionsType = ReturnType<typeof setUsersAC>;

// Thunk
const getUsersTC =
  (searchParams?: ParamsType): AppThunk =>
  (dispatch) => {
    api.getUsers(searchParams).then((res) => dispatch(setUsersAC(res.data.items)));
  };

export const Users = () => {
  const [activeColumn, setActiveColumn] = useState<ParamsType>({
    sortBy: null,
    sortDirection: "asc",
  });

  const users = useAppSelector((state) => state.app.users);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(activeColumn.sortBy ? getUsersTC(activeColumn) : getUsersTC());
  }, [activeColumn]);

  const sortHandler = (sortBy: string) => {
    setActiveColumn({ sortBy, sortDirection: activeColumn.sortDirection === 'asc' ? 'desc' : 'asc' });
  };

  return (
    <div>
      <h1>👪 Список пользователей</h1>
      <table style={table}>
        <thead>
          <tr>
            <th style={th} onClick={() => sortHandler("name")}>
              Name
              {activeColumn?.sortBy === "name" &&
                (activeColumn.sortDirection === "asc" ? (
                  <span> &#8593;</span>
                ) : (
                  <span> &#8595;</span>
                ))}
            </th>
            <th style={th} onClick={() => sortHandler("age")}>
              Age
              {activeColumn?.sortBy === "age" &&
                (activeColumn.sortDirection === "asc" ? (
                  <span> &#8593;</span>
                ) : (
                  <span> &#8595;</span>
                ))}
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => {
            return (
              <tr key={u.id}>
                <td style={td}>{u.name}</td>
                <td style={td}>{u.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <Users />
  </Provider>,
);

// 📜 Описание:
// Перед вами таблица с пользователями.
// Ваша задача вместо XXX написать код для сортировки пользователей по имени и возрасту.
// Т.е. при нажатии на name либо age пользователи должны сортироваться в таблице.
// При повторном нажатии на этот же столбец сортировка должна происходить в обратном порядке
// При последующих нажатиях сортировка не должна сбрасываться, а должна продолжать переключаться.
// ❗ сортировка пользователей происходит на сервере, т.е. sort использовать не нужно
// ❗ не используйте запись вида setState(prevState => ...), передайте в setActiveColumn объект

// 🖥 Пример ответа: sort(a, b) */





/* import ReactDOM from "react-dom/client";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import React from "react";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

// Reducer
const initState = {
  goodMorning: [
    { id: 1, name: "errors" },
    { id: 2, name: "bugs" },
    { id: 3, name: "fackups" },
    { id: 4, name: "laziness" },
    { id: 5, name: "work" },
  ] as { id: number; name: string }[],
};

type InitStateType = typeof initState;

const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
  switch (action.type) {
    case "DELETE":
      return {
        ...state,
        goodMorning: state.goodMorning.filter((g) => g.id !== action.id),
      };
    default:
      return state;
  }
};

// Store
const rootReducer = combineReducers({ app: appReducer });

const store = configureStore({ reducer: rootReducer });
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>;
type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>;
const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const deleteSome = (id: any) => ({ type: "DELETE", id }) as const;
type ActionsType = ReturnType<typeof deleteSome>;

// Components
export const Monday = () => {
  const goodMorning = useAppSelector((state) => state.app.goodMorning);
  const dispatch = useAppDispatch();

  const mapped = goodMorning.map((p: any, i: number) => (
    <div key={i}>
      {p.name}
      <button onClick={() => dispatch(deleteSome(p.id))}>X</button>
    </div>
  ));

  return <div>{mapped}</div>;
};

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <Monday />
  </Provider>,
);

// 📜 Описание:
// На экране отображен список дел.
// Попробуйте удалить какой-нибудь элемент - у вас не получится.
// Найдите ошибку.
// В качестве ответа укажите исправленную версию строки
//
// 🖥 Пример ответа: delete goodMorning */






/* import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

type UserType = {
  id: string;
  name: string;
  age: number;
};

// API
const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" });

const api = {
  getUsers(pageNumber: number) {
    return instance.get(`users?pageSize=${3}&pageNumber=${pageNumber}`);
  },
};

// Reducer
const initState = { page: 1, users: [] as UserType[] };
type InitStateType = typeof initState;

const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
  switch (action.type) {
    case "SET_PAGE":
      return { ...state, page: action.page };
    case "SET_USERS":
      return { ...state, users: action.users };
    default:
      return state;
  }
};

// Store
const rootReducer = combineReducers({ app: appReducer });

const store = configureStore({ reducer: rootReducer });
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>;
type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>;
const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const setPageAC = (page: number) => ({ type: "SET_PAGE", page }) as const;
const setUsersAC = (users: UserType[]) => ({ type: "SET_USERS", users }) as const;
type ActionsType = ReturnType<typeof setPageAC> | ReturnType<typeof setUsersAC>;

const getUsers = (): AppThunk => (dispatch, getState) => {
  const page = getState().app.page;
  api.getUsers(page).then((res) => dispatch(setUsersAC(res.data.items)));
};

// Components
export const App = () => {
  const page = useAppSelector((state) => state.app.page);
  const users = useAppSelector((state) => state.app.users);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [page]);

  const pages = new Array(4).fill(1).map((p, i) => (
    <button key={i} onClick={() => dispatch(setPageAC(i + 1))} disabled={page === i + 1}>
      {i + 1}
    </button>
  ));

  return (
    <div>
      {users.map((u) => {
        return (
          <div style={{ marginBottom: "25px" }} key={u.id}>
            <p>
              <b>name</b>: {u.name}
            </p>
            <p>
              <b>age</b>: {u.age}
            </p>
          </div>
        );
      })}
      {pages}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

// 📜 Описание:
// При переходе по страницам должны подгружаться новые пользователи.
// Однако в коде допущена ошибка и всегда подгружаются одни и теже пользователи.
// Задача: найти эту ошибку, и исправленную версию строки написать в качестве ответа.

// 🖥 Пример ответа: {pages.next()} */






/* import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'

type UserType = {
  id: string;
  name: string;
  age: number;
}

// API
const instance = axios.create({baseURL: 'https://exams-frontend.kimitsu.it-incubator.io/api/'})

const api = {
  getUsers() {
    return instance.get('users?pageSize=3&pageNumber=2')
    //return instance.get(`users=pageSize=3=pageNumber=2`)
  },
}

// App
export const App = () => {

  const [users, setUsers] = useState<UserType[]>([])

  useEffect(() => {
    api.getUsers()
      .then((res) => {
        setUsers(res.data.items)
      })
  }, [])


  return (
    <>
      <h1>👪 Список пользователей</h1>
      {
        users.map(u => {
          return <div style={{display: 'flex', gap: '10px'}} key={u.id}>
            <p><b>name</b>: {u.name}</p>
            <p><b>age</b>: {u.age}</p>
          </div>
        })
      }
    </>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App/>)

// 📜 Описание:
// На странице отображен список юзеров из 3-человек.
// Подгрузились именно эти пользователи не случайно, а из-за query параметров указанных в запросе.
// Ваша задача переписать строку с запросом таким образом, чтобы получить аналогичный результат (все тех же юзеров),
// при этом запрещено в ответе использовать символы вопроса и амперсанда.
// В качестве ответа укажите полностью исправленную строку коду (переносы разрешены)


// 🖥 Пример ответа: return instance.get('users=pageSize=3=pageNumber=2') */





/* import React from 'react'
import ReactDOM from 'react-dom/client';

export const App = () => {
  return (
    <div>
      <h2>Сколько всего веток может быть в репозитории ?</h2>
      <ul>
        <li>1 - 2 ветки. master(main) и develop</li>
        <li>2 - Число веток согласовывается в команде разработчиков и устанавливается в git config</li>
        <li>3 - Всегда есть ветка master (main), develop может быть по соглашения команды разработчиков. Под каждую фичу
          создается новая ветка. При этом от ветки с фичей запрещено создавать новые ветки</li>
        <li>4 - Нет правильного ответа</li>
      </ul>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App/>);

// 📜 Описание:
// Сколько всего веток может быть в репозитории ?
// Может быть несколько вариантов ответа (ответ дайте через пробел).
// ❗ Ответ будет засчитан как верный, только при полном правильном совпадении.
// Если указали правильно один вариант (1),
// а нужно было указать два варианта (1 и 2), то ответ в данном случае будет засчитан как неправильный

// 🖥 Пример ответа: 1 */





/* import React from 'react'
import ReactDOM from 'react-dom/client';

export const App = () => {
  return (
    <div>
      <h2>Какое из приведенных ниже определений верно?</h2>
      <ol>
        <li>1 - Команда git push используется для выгрузки содержимого локального репозитория в удаленный репозиторий.
          Она позволяет передать коммиты из локального репозитория в удаленный.
        </li>
        <li>2 - Команда git pull используется для обновления локальной версии репозитория, синхронизируя её с содержимым удалённого репозитория
        </li>
        <li>3 - Команда git fetch загружает коммиты, файлы и ссылки из удаленного репозитория в ваш локальный
          репозиторий. Извлеките данные с помощью команды fetch, если хотите увидеть, над чем работают остальные.
        </li>
        <li>4 - Ни одно из вышеперечисленных определений не верно</li>
      </ol>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App/>);

// 📜 Описание:
// Какое из приведенных ниже определений верно?
// Может быть несколько вариантов ответа (ответ дайте через пробел).
// ❗ Ответ будет засчитан как верный, только при полном правильном совпадении.
// Если указали правильно один вариант (1),
// а нужно было указать два варианта (1 и 2), то ответ в данном случае будет засчитан как неправильный

// 🖥 Пример ответа: 1 */



