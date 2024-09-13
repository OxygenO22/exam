/* import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

// Types
type PhotoType = {
  albumId: string;
  id: string;
  title: string;
  url: string;
};

type PayloadType = {
  title: string;
  url?: string;
};

// Api
const instance = axios.create({
  baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/",
});

const photoId = "637df6dc99fdc52af974a517";

const photosAPI = {
  getPhoto() {
    return instance.get<PhotoType>(`photos/${photoId}`);
  },
  updatePhoto(payload: PayloadType) {
    return instance.put<PhotoType>(`photos/${photoId}`, { payload });
  },
};

// App
export const App = () => {
  const [photo, setPhoto] = useState<PhotoType | null>(null);

  useEffect(() => {
    photosAPI.getPhoto().then((res) => {
      setPhoto(res.data);
    });
  }, []);

  const updatePhotoHandler = () => {
    // ❗ title и url указаны в качестве заглушки. Server сам сгенерирует новый title
    const payload = {
      title: "Новый title",
      url: "data:image/png;base64,iVBORw0FAKEADDRESSnwMZAABJRUrkJggg==",
    };
    photosAPI.updatePhoto(payload)
  };

  return (
    <>
      <h1>📸 Фото</h1>
      <div>
        <div style={{ marginBottom: "15px" }}>
          <h1>title: {photo?.title}</h1>
          <div>
            <img src={photo?.url} alt="" />
          </div>
        </div>
        <button style={{ marginLeft: "15px" }} onClick={updatePhotoHandler}>
          Изменить title
        </button>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);

// 📜 Описание:
// При нажатии на кнопку "Изменить title" title должен обновиться,
// но из-за невнимательности была допущена ошибка и изменение не происходит
//
// Найдите и исправьте ошибку
// Исправленную версию строки напишите в качестве ответа.

// 🖥 Пример ответа: photosAPI.updatePhotoTitle(id, title)
 */


/* import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client';

// Types
type PostType = {
  body: string
  id: string
  title: string
  userId: string
}


// Api
const instance = axios.create({baseURL: 'https://exams-frontend.kimitsu.it-incubator.io/api/'})

const postsAPI = {
  getPosts() {
    return instance.get<PostType[]>('posts')
  },
  deletePost(id: string) {
    return instance.delete<{ message: string }>(`posts/${id}`);
  }
}


// App
export const App = () => {

  const [posts, setPosts] = useState<PostType[]>([])

  useEffect(() => {
    postsAPI.getPosts()
      .then((res) => {
        setPosts(res.data)
      })
  }, [])

  const deletePostHandler = (id: string) => {
    postsAPI.deletePost(id)
      .then((res) => {
        const newPostsArr = posts.filter(p => p.id !== id)
        setPosts(newPostsArr)
      })
  };

  return (
    <>
      <h1>📜 Список постов</h1>
      {posts.map(p => {
        return (
          <div key={p.id}>
            <b>title</b>: {p.title}
            <button style={{marginLeft: '15px'}}
                    onClick={() => deletePostHandler(p.id)}>
              x
            </button>
          </div>
        )
      })}
    </>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App/>)

// 📜 Описание:
// Почему не удаляется post при нажатии на кнопку удаления (х) ?
// Найдите ошибку и вставьте исправленную строку кода в качестве ответа
//
// 🖥 Пример ответа: return axios.delete */


/* import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client';

// Types
type TodoType = {
  completed: boolean;
  createdAt: string;
  id: string;
  order: number;
  title: string;
  updatedAt: string;
};


// Api
const instance = axios.create({baseURL: 'https://exams-frontend.kimitsu.it-incubator.io/api/'})

const todosAPI = {
  getTodos() {
    return instance.get<TodoType[]>('todos')
  },
}


// App
const App = () => {

  const [todos, setTodos] = useState<TodoType[]>([])

  useEffect(() => {
    todosAPI.getTodos().then((res) => setTodos(res.data))
  }, [])

  return (
    <>
      <h2>✅ Список тудулистов</h2>
      {
        todos.map((t) => {
          return (
            <div style={t.completed ? { color: "grey" } : {}} key={t.id}>
              <input type="checkbox" checked={t.completed} />
              <b>Описание</b>: {t.title}
            </div>
          );
        })
      }
    </>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App/>)

// 📜 Описание:
// При написании типизации по невнимательности было допущено несколько ошибок.
// Напишите через пробел правильные свойства в TodoType, в которых была допущена ошибка.
// Debugger / network / документация вам в помощь

// 🖥 Пример ответа: id status isDone */


/* import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client';

// Types
type TodoType = {
  id: string;
  title: string;
  order: number;
  createdAt: string;
  updatedAt: string;
  completed: boolean;
}


// Api
const instance = axios.create({baseURL: 'https://exams-frontend.kimitsu.it-incubator.io/api/'})

const todosAPI = {
  getTodo(todoId: string) {
    return instance.get<TodoType>(`todos/${todoId}`)
  }
}


// App
export const App = () => {

  const [todo, setTodo] = useState<TodoType | null>(null)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const todoId = "637cb9342f24ad82bcb07d8d"
    todosAPI.getTodo(todoId)
      .then((res: any) =>  setTodo(res.data) )
      .catch(e => {
        setError('Ошибка 😰. Анализируй network 😉')
      })
  }, [])


  return (
    <>
      <h2>✅ Тудулист</h2>
      {
        !!todo
          ? <div>
            <div style={todo?.completed ? {color: 'grey'} : {}} key={todo?.id}>
              <input type="checkbox" checked={todo?.completed}/>
              <b>Описание</b>: {todo?.title}
            </div>
            <h2>Так держать. Ты справился 🚀</h2>
          </div>
          : <h2 style={{ color: 'red' }}>{error}</h2>
      }
    </>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App/>)

// 📜 Описание:
// Студент по неопытности допустил одну маленькую ошибку, но из-за нее он не может вывести на экран тудулист.
// Найдите ошибку и вставьте исправленную версию строки кода в качестве ответа
// P.S. Эта ошибка из реальной жизни, студенты часто ошибаются подобным образом и не могут понять в чем дело.

// 🖥 Пример ответа:  .then((res: any) => setTodo(res.data.data)) */

/* import axios from 'axios'
import React, { ChangeEvent, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client';

// Types
type CommentType = {
  postId: string
  id: string
  name: string
  email: string
  body: string
}

// Api
const instance = axios.create({baseURL: 'https://exams-frontend.kimitsu.it-incubator.io/api/'})

const commentsAPI = {
  getComments() {
    return instance.get<CommentType[]>('comments')
  },
  createComment() {
    const payload = {body: 'Это просто заглушка. Backend сам сгенерирует новый комментарий и вернет его вам'}
    // Promise.resolve() стоит в качестве заглушки, чтобы TS не ругался и код компилировался
    // Promise.resolve() нужно удалить и написать правильный запрос для создания нового комментария
    return instance.post(`comments`, payload);
  }
}


// App
export const App = () => {

  const [comments, setComments] = useState<CommentType[]>([])

  useEffect(() => {
    commentsAPI.getComments()
      .then((res) => {
        setComments(res.data)
      })
  }, [])

  const createPostHandler = () => {
    commentsAPI.createComment()
      .then((res: any) => {
        const newComment = res.data
        setComments([newComment, ...comments,])
      })
  };

  return (
    <>
      <h1>📝 Список комментариев</h1>
      <div style={{marginBottom: '15px'}}>
        <button style={{marginLeft: '15px'}}
                onClick={() => createPostHandler()}>
          Добавить новый комментарий
        </button>
      </div>

      {
        comments.map(c => {
          return <div key={c.id}><b>Comment</b>: {c.body} </div>
        })
      }
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App/>)

// 📜 Описание:
// Напишите запрос на сервер для создания нового комментария.
// Типизацию возвращаемых данных в ответе указывать необязательно, но можно и указать (в ответах учтены оба варианта).
// Исправленную версию строки напишите в качестве ответа.
//
// 🖥 Пример ответа: return Promise.resolve(payload) */


/* import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client';

// Types
type PostType = {
  id: string
  body: string
  title: string
  userId: string
}


// Api
const instance = axios.create({baseURL: 'https://exams-frontend.kimitsu.it-incubator.io/api/'})

const postsAPI = {
  getPosts() {
    // Promise.resolve() стоит в качестве заглушки, чтобы TS не ругался и код компилировался
    // Promise.resolve() нужно удалить и написать правильный запрос для получения постов
    return instance.get('posts')
  },
}


// App
export const App = () => {

  const [posts, setPosts] = useState<PostType[]>([])

  console.log(posts);

  useEffect(() => {
    postsAPI.getPosts()
      .then((res: any) => {
        setPosts(res.data)
      })
  }, [])


  return (
    <>
      <h1>📜 Список постов</h1>
      {
        posts.length
          ? posts.map(p => {
            return <div key={p.id}><b>title</b>: {p.title}</div>
          })
          : <h2>Постов нету 😥</h2>
      }
    </>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App/>)

// 📜 Описание:
// Напишите запрос на сервер для получения всех постов
// Типизацию возвращаемых данных в ответе указывать необязательно, но можно и указать (в ответах учтены оба варианта).
// Исправленную версию строки напишите в качестве ответа.

// 🖥 Пример ответа: return Promise.resolve() */


/* import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client';

// TYPES
type ProductType = {
  id: string
  title: string
  description: string
  price: number
}

type FilmType = {
  id: number
  nameOriginal: string
  description: string
  ratingImdb: number
}

type ProductsResponseType = {
  total: number
  messages: string[]
  page: number
  pageCount: number
  data: ProductType[]
}

type FilmsResponseType = {
  total: number
  messages: string[]
  page: number
  pageCount: number
  data: FilmType[]
}

type CommonResponseType<T> = {
  total: number;
  messages: string[];
  page: number;
  pageCount: number;
  data: T;
};

// Api
const instance = axios.create({baseURL: 'https://exams-frontend.kimitsu.it-incubator.io/api/'})

const api = {
  getProducts() {
    return instance.get<CommonResponseType<ProductType[]>>("products");
  },
  getFilms() {
    return instance.get<CommonResponseType<FilmType[]>>("films");
  }
}


// App
const App = () => {
  return (
    <>
      <h1>🛒 Products && 🎦 Films</h1>
      <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
        <Products/>
        <Films/>
      </div>
    </>
  )
}

const Products = () => {

  const [products, setProducts] = useState<ProductType[]>([])

  useEffect(() => {
    api.getProducts()
      .then((res) => setProducts(res.data.data))
  }, [])

  return (
    <div style={{width: '45%'}}>
      <h2>🛒 Products</h2>
      <div>
        {
          products.map(p => {
            return (
              <div key={p.id}>
                <b>{p.title}</b>
                <p>{p.description}</p>
                <p>💵 {p.price} $</p>
              </div>
            )
          })
        }</div>
    </div>
  )
}

const Films = () => {

  const [films, setFilms] = useState<FilmType[]>([])

  useEffect(() => {
    api.getFilms()
      .then((res) => setFilms(res.data.data))
  }, [])

  return (
    <div style={{width: '45%'}}>
      <h2>🎦 Films</h2>
      <div>
        {
          films.map(f => {
            return (
              <div key={f.id}>
                <b>{f.nameOriginal}</b>
                <p>{f.description}</p>
                <p>⭐ {f.ratingImdb} </p>
              </div>
            )
          })
        }</div>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App/>)

// 📜 Описание:
// При запуске проекта на экране вы увидите 2 списка: Products и Films.
// С ними все хорошо, но обратите внимание на типизацию ответов с сервера ProductsResponseType и FilmsResponseType.
// Дублирование типов на лицо.
// Ваша задача написать дженериковый тип CommonResponseType и заменить им дублирующие типы.
// Очередность свойств в типах менять запрещено (по причине что нам будет тяжело перебрать все правильные варианты :) )
// Параметр тип назовите буквой T
//
// В качестве ответа нужно скопировать полностью рабочий дженериковый тип CommonResponseType
//
// 🖥 Пример ответа:
// type CommonResponseType = {
//   total: T
//   messages: T[]
//   page: T
//   pageCount: T
//   data: T[]
// }

 */

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
  getUsers(pageNumber: number) {
    return instance.get(`users?pageSize=${3}&pageNumber${pageNumber}`)
  },
}

// App
const buttons = [
  {id: 1, title: '1'},
  {id: 2, title: '2'},
  {id: 3, title: '3'},
]

export const App = () => {

  const [users, setUsers] = useState<UserType[]>([])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    api.getUsers(currentPage)
      .then((res: any) => {
        console.log(res.data.items);
        setUsers(res.data.items)
      })
  }, [currentPage])

  const setPageHandler = (page: number) => {
    setCurrentPage(page)
  };

  return (
    <>
      <h1>👪 Список пользователей</h1>
      {
        users.map(u => {
          return <div style={{marginBottom: '25px'}} key={u.id}>
            <p><b>name</b>: {u.name}</p>
            <p><b>age</b>: {u.age}</p>
          </div>
        })
      }

      {
        buttons.map(b => {
          return (
            <button key={b.id}
                    style={b.id === currentPage ? {backgroundColor: 'lightblue'} : {}}
                    onClick={() => setPageHandler(b.id)}>
              {b.title}
            </button>
          )
        })
      }
    </>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App/>)

// 📜 Описание:
// При переходе по страницам должны подгружаться новые пользователи.
// Однако в коде допущена ошибка и всегда подгружаются одни и теже пользователи.
// Задача: найти эту ошибку, и исправленную версию строки написать в качестве ответа.

// 🖥 Пример ответа: const [currentPage, setCurrentPage] = useState(page) */

/* import axios from "axios";
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

// Types
type CommentType = {
  postId: string;
  id: string;
  name: string;
  email: string;
  body: string;
};

// Api
const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" });

const commentsAPI = {
  getComments() {
    return instance.get<CommentType[]>("comments");
  },
};

// Reducer
const initState = [] as CommentType[];

type InitStateType = typeof initState;

const commentsReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
  switch (action.type) {
    case "COMMENTS/GET-COMMENTS":
      return action.comments;
    default:
      return state;
  }
};

const getCommentsAC = (comments: CommentType[]) =>
  ({ type: "COMMENTS/GET-COMMENTS", comments }) as const;
type ActionsType = ReturnType<typeof getCommentsAC>;

const getCommentsTC =
  (): ThunkAction<unknown, InitStateType, unknown, ActionsType> =>
  (dispatch) => {
    commentsAPI.getComments().then((res) => {
      dispatch(getCommentsAC(res.data));
    });
  };

// Store
const rootReducer = combineReducers({
  comments: commentsReducer,
});

const store = configureStore({ reducer: rootReducer });
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>;
const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// App
export const App = () => {
  const comments = useAppSelector((state) => state.comments);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCommentsTC());
  }, []);

  return (
    <>
      <h1>📝 Список комментариев</h1>
      {comments.map((c) => {
        return (
          <div key={c.id}>
            <b>Comment</b>: {c.body}{" "}
          </div>
        );
      })}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

// 📜 Описание:
// Ваша задача стоит в том чтобы правильно передать нужные типы в дженериковый тип ThunkAction<any, any, any, any>.
// Что нужно написать вместо any, any, any, any чтобы правильно типизировать thunk creator?
// Ответ дайте через пробел

// 🖥 Пример ответа: unknown status isDone void */


/* import React from 'react'
import ReactDOM from 'react-dom/client';


const thunkCreator = () => (dispatch: any, getState: any) => {
  // сode...
};


// App
const App = () => {
  return (
    <>
      <h1>В этом задании смотреть на экран не нужно. Ничего не изменится 😈</h1>
      <p>Читайте описание к заданию</p>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App/>)

// 📜 Описание:
// Вместо XXX и YYY через пробел напишите параметры которые приходят в санку.
//
// 🖥 Пример ответа: useCallback state */

/* import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

// Types
type PostType = {
  id: string;
  body: string;
  title: string;
  userId: string;
};

// Api
const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" });

const postsAPI = {
  getPosts() {
    return instance.get<PostType[]>("posts");
  },
};

// Reducer
const initState = [] as PostType[];

type InitStateType = typeof initState;

const postsReducer = (
  state: InitStateType = initState,
  action: GetPostsActionType,
): InitStateType => {
  switch (action.type) {
    case "POSTS/GET-POSTS":
      return action.posts;
    default:
      return state;
  }
  
};

const getPostsAC = (posts: PostType[]) => ({ type: "POSTS/GET-POSTS", posts }) as const;
type GetPostsActionType = ReturnType<typeof getPostsAC>;

const getPostsTC = (): AppThunk => (dispatch) => {
  postsAPI.getPosts().then((res) => {
    dispatch(getPostsAC(res.data));
  });
};

// Store
const rootReducer = combineReducers({
  posts: postsReducer,
});

const store = configureStore({ reducer: rootReducer });
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = ThunkDispatch<RootState, unknown, GetPostsActionType>;
type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, GetPostsActionType>;
const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// App
const App = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPostsTC);
  }, []);

  return (
    <>
      <h1>📜 Список постов</h1>
      {posts.length ? (
        posts.map((p) => {
          return (
            <div key={p.id}>
              <b>title</b>: {p.title}
            </div>
          );
        })
      ) : (
        <h2>Постов нету 😥</h2>
      )}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

// 📜 Описание:
// При загрузке приложения вы должны увидеть список постов,
// но из-за невнимательности была допущена ошибка.

// Найдите и исправьте ошибку
// Исправленную версию строки напишите в качестве ответа.
// 🖥 Пример ответа: type InitStateType = typeof initState

// P.S. Эта ошибка из реальной жизни, студенты так часто ошибаются и не могут понять в чем дело. */



/* import axios from "axios";
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

// Types
type CommentType = {
  postId: string;
  id: string;
  name: string;
  email: string;
  body: string;
};

// Api
const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" });

const commentsAPI = {
  getComments() {
    return instance.get<CommentType[]>("comments");
  },
};

// Reducer
const initState = [] as CommentType[];

type InitStateType = typeof initState;

const commentsReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
  switch (action.type) {
    case "COMMENTS/GET-COMMENTS":
      return action.comments;
    default:
      return state;
  }
};

const getCommentsAC = (comments: CommentType[]) =>
  ({ type: "COMMENTS/GET-COMMENTS", comments }) as const;
type ActionsType = ReturnType<typeof getCommentsAC>;

const getCommentsTC = () => (dispatch: DispatchType) => {
  commentsAPI.getComments().then((res) => {
    dispatch(getCommentsAC(res.data));
  });
};

// Store
const rootReducer = combineReducers({
  comments: commentsReducer,
});

const store = configureStore({ reducer: rootReducer });
type RootState = ReturnType<typeof rootReducer>;
type DispatchType = ThunkDispatch<RootState, unknown, ActionsType>;
const useAppDispatch = () => useDispatch<DispatchType>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// App
export const App = () => {
  const comments = useAppSelector((state) => state.comments);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCommentsTC());
  }, []);

  return (
    <>
      <h1>📝 Список комментариев</h1>
      {comments.map((c) => {
        return (
          <div key={c.id}>
            <b>Comment</b>: {c.body}{" "}
          </div>
        );
      })}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

// 📜 Описание:
// Ваша задача стоит в том чтобы правильно передать нужные типы в дженериковый тип ThunkDispatch<any, any, any>.
// Что нужно написать вместо any, any, any чтобы правильно типизировать dispatch ?
// Ответ дайте через пробел

// 🖥 Пример ответа: unknown status isDone */



/* import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

// Types
type PostType = {
  body: string;
  id: string;
  title: string;
  userId: string;
};

type PayloadType = {
  title: string;
  body?: string;
};

// Api
const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" });

const postsAPI = {
  getPosts() {
    return instance.get<PostType[]>("posts");
  },
  updatePostTitle(postId: string, post: PayloadType) {
    return instance.put<PostType>(`posts/${postId}`, post);
  },
};

// Reducer
const initState = [] as PostType[];

type InitStateType = typeof initState;

const postsReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
  switch (action.type) {
    case "POSTS/GET-POSTS":
      return action.posts;

    case "POSTS/UPDATE-POST-TITLE":
      return state.map((p) => {
        if (p.id === action.post.id) {
          return { ...p, title: action.post.title };
        } else {
          return p;
        }
      });

    default:
      return state;
  }
};

const getPostsAC = (posts: PostType[]) => ({ type: "POSTS/GET-POSTS", posts }) as const;
const updatePostTitleAC = (post: PostType) => ({ type: "POSTS/UPDATE-POST-TITLE", post }) as const;
type ActionsType = ReturnType<typeof getPostsAC> | ReturnType<typeof updatePostTitleAC>;

const getPostsTC = (): AppThunk => (dispatch) => {
  postsAPI.getPosts().then((res) => {
    dispatch(getPostsAC(res.data));
  });
};

const updatePostTC = (postId: string): AppThunk =>
   (dispatch, getState: any) => {
    console.log(getState());
    try {
      const currentPost = getState().posts.find((p: PostType) => p.id === postId);
      

      if (currentPost) {
        const payload = { title: "Это просто заглушка. Backend сам сгенерирует новый title" };
        postsAPI.updatePostTitle(postId, payload).then((res) => {
          dispatch(updatePostTitleAC(res.data));
        });
      }
    } catch (e) {
      alert("Обновить пост не удалось 😢");
    }
  };

// Store
const rootReducer = combineReducers({
  posts: postsReducer,
});

const store = configureStore({ reducer: rootReducer });
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>;
type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>;
const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// App
const App = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts);

  useEffect(() => {
    dispatch(getPostsTC());
  }, []);

  const updatePostHandler = (postId: string) => {
    dispatch(updatePostTC(postId));
  };

  return (
    <>
      <h1>📜 Список постов</h1>
      {posts.map((p) => {
        return (
          <div key={p.id}>
            <b>title</b>: {p.title}
            <button onClick={() => updatePostHandler(p.id)}>Обновить пост</button>
          </div>
        );
      })}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

// 📜 Описание:
// Попробуйте обновить пост и вы увидите alert с ошибкой.
// Debugger / network / console.log вам в помощь
// Найдите ошибку и вставьте исправленную строку кода в качестве ответа.

// 🖥 Пример ответа: const payload = {...currentPost, tile: 'Летим 🚀'} */


/* import { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import axios from "axios";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

// Types
type TodoType = {
  id: string;
  title: string;
  order: number;
  createdAt: string;
  updatedAt: string;
  completed: boolean;
};

// Api
const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" });

const todosAPI = {
  getTodos() {
    return instance.get<TodoType[]>("todos");
  },
  changeTodoStatus(id: string, completed: boolean) {
    return instance.put(`todos/${id}`, { completed });
  },
};

// Reducer
const initState = [] as TodoType[];

type InitStateType = typeof initState;

const todosReducer = (state: InitStateType = initState, action: ActionsType) => {
  switch (action.type) {
    case "TODOS/GET-TODOS":
      return action.todos;

    case "TODOS/CHANGE-TODO-STATUS":
      return state.map((t) => {
        if (t.id === action.todo.id) {
          return { ...t, completed: action.todo.completed };
        } else {
          return t;
        }
      });

    default:
      return state;
  }
};

const getTodosAC = (todos: TodoType[]) => ({ type: "TODOS/GET-TODOS", todos }) as const;
const changeTodoStatusAC = (todo: TodoType) =>
  ({ type: "TODOS/CHANGE-TODO-STATUS", todo }) as const;
type ActionsType = ReturnType<typeof getTodosAC> | ReturnType<typeof changeTodoStatusAC>;

// Thunk
const getTodosTC = (): AppThunk => (dispatch) => {
  todosAPI.getTodos().then((res) => {
    dispatch(getTodosAC(res.data));
  });
};

const changeTodoStatusTC =
  (id: string, completed: boolean): AppThunk =>
  (dispatch) => {
    todosAPI.changeTodoStatus(id, completed).then((res) => {
      dispatch(changeTodoStatusAC(res.data));
    });
  };

// Store
const rootReducer = combineReducers({
  todos: todosReducer,
});

const store = configureStore({ reducer: rootReducer });
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>;
type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>;
const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// App
const App = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getTodosTC());
  }, []);

  const changeStatusHandler = (id: string, completed: boolean) => {
    dispatch(changeTodoStatusTC(id, completed));
  };

  return (
    <>
      <h2>✅ Список тудулистов</h2>
      {todos.length ? (
        todos.map((t) => {
          return (
            <div style={t.completed ? { color: "grey" } : {}} key={t.id}>
              <input
                type="checkbox"
                checked={t.completed}
                onChange={() => changeStatusHandler(t.id, !t.completed)}
              />
              <b>Описание</b>: {t.title}
            </div>
          );
        })
      ) : (
        <h2>Тудулистов нету 😥</h2>
      )}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

// 📜 Описание:
// При загрузке приложения вы должны увидеть список тудулистов,
// но из-за невнимательности была допущена ошибка.
// Найдите и исправьте ошибку.
// Исправленную версию строки напишите в качестве ответа.

// 🖥 Пример ответа: type InitStateType = typeof initState */


/* import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

// Types
type CommentType = {
  postId: string;
  id: string;
  name: string;
  email: string;
  body: string;
};

// Api
const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" });

const commentsAPI = {
  getComments() {
    return instance.get<CommentType[]>("comments");
  },
  createComment() {
    const payload = {
      body: "Это просто заглушка. Backend сам сгенерирует новый комментарий и вернет его вам",
    };
    return instance.post("comments", payload);
  },
};

// Reducer
const initState = [] as CommentType[];

type InitStateType = typeof initState;

const commentsReducer = (state: InitStateType = initState, action: ActionsType) => {
  switch (action.type) {
    case "COMMENTS/GET-COMMENTS":
      return action.comments;
    case "COMMENTS/CREATE-COMMENT":
      return [action.comment, ...state];
    default:
      return state;
  }
};

const getCommentsAC = (comments: CommentType[]) =>
  ({ type: "COMMENTS/GET-COMMENTS", comments }) as const;
const createCommentAC = (comment: CommentType) =>
  ({ type: "COMMENTS/CREATE-COMMENT", comment }) as const;

type ActionsType = ReturnType<typeof getCommentsAC> | ReturnType<typeof createCommentAC>;

const getCommentsTC = (): AppThunk => (dispatch) => {
  commentsAPI.getComments().then((res) => {
    dispatch(getCommentsAC(res.data));
  });
};

const addCommentTC = (): AppThunk => (dispatch) => {
  commentsAPI.createComment().then((res) => {
    dispatch(createCommentAC(res.data));
  });
};

// Store
const rootReducer = combineReducers({
  comments: commentsReducer,
});

const store = configureStore({ reducer: rootReducer });
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>;
type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>;
const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// App
const App = () => {
  const dispatch = useAppDispatch();
  const comments = useAppSelector((state) => state.comments);

  useEffect(() => {
    dispatch(getCommentsTC());
  }, []);

  const addCommentHandler = () => {
    dispatch(addCommentTC());
  };

  return (
    <>
      <h1>📝 Список комментариев</h1>
      <button style={{ marginBottom: "10px" }} onClick={addCommentHandler}>
        Добавить новый комментарий
      </button>
      {comments.map((p) => {
        return (
          <div key={p.id}>
            <b>описание</b>: {p.body}
          </div>
        );
      })}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

// 📜 Описание:
// При нажатии на кнопку "Добавить новый комментарий" комментарий должен добавиться,
// но появляется alert.
// Вместо alerta напишите код, чтобы комментарий добавлялся.
// Правильную версию строки напишите в качестве ответа.

// 🖥 Пример ответа: return instance.get<CommentType[]>('comments?_limit=10') */


/* import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import axios, { AxiosError } from "axios";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

// Types
type CommentType = {
  postId: string;
  id: string;
  name: string;
  email: string;
  body: string;
};

// Api
const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" });

const commentsAPI = {
  getComments() {
    return instance.get<CommentType[]>("comments");
  },
};

// Reducer
const initState = {
  comments: [] as CommentType[],
};

type InitStateType = typeof initState;

const appReducer = (state: InitStateType = initState, action: ActionsType) => {
  switch (action.type) {
    case "COMMENTS/GET-COMMENTS":
      return { ...state, comments: action.comments };

    default:
      return state;
  }
};

const getCommentsAC = (comments: CommentType[]) =>
  ({ type: "COMMENTS/GET-COMMENTS", comments }) as const;
type ActionsType = ReturnType<typeof getCommentsAC>;

// Thunk
const getCommentsTC = (): AppThunk => (dispatch) => {
  commentsAPI
    .getComments()
    .then((res) => {
      dispatch(getCommentsAC(res.data));
    })
    .catch((e: AxiosError) => {
      alert(`Сообщение об ошибке: ${e.message}`);
    });
};

// Store
const rootReducer = combineReducers({
  app: appReducer,
});

const store = configureStore({ reducer: rootReducer });
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>;
type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>;
const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Components
export const App = () => {
  const comments = useAppSelector((state) => state.app.comments);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCommentsTC());
  }, []);

  return (
    <>
      <h1>📝 Список комментариев</h1>
      {comments.length ? (
        comments.map((c) => {
          return (
            <div key={c.id}>
              <b>Comment</b>: {c.body}{" "}
            </div>
          );
        })
      ) : (
        <h3>❌ Комментарии не подгрузились. Произошла какая-то ошибка. Найди и исправь ее</h3>
      )}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

// 📜 Описание:
// ❌ Комментарии не подгрузились. Произошла какая-то ошибка.
// В данном задании вам нужно найти ошибку и починить приложение.
// Если сделаете все верно, то увидите комментарии.
// В качестве ответа указать исправленную строку коду

// 🖥 Пример ответа: const store = createStore(rootReducer, applyMiddleware(thunk))
 */


/* import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import axios, { AxiosError } from "axios";
import { configureStore, combineReducers, Dispatch } from "@reduxjs/toolkit";

// TYPES
type TodoType = {
  id: string;
  title: string;
  order: number;
  createdAt: string;
  updatedAt: string;
  completed: boolean;
};

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
  getTodos() {
    return instance.get<TodoType[]>("todo");
  },
  getUsers() {
    return instance.get<UsersResponseType>("user");
  },
};

// Reducer
const initState = {
  isLoading: false,
  error: null as string | null,
  todos: [] as TodoType[],
  users: [] as UserType[],
};

type InitStateType = typeof initState;

const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
  switch (action.type) {
    case "APP/GET-TODOS":
      return { ...state, todos: action.todos };
    case "APP/GET-USERS":
      return { ...state, users: action.users };
    case "APP/IS-LOADING":
      return { ...state, isLoading: action.isLoading };
    case "APP/SET-ERROR":
      return { ...state, error: action.error };
    default:
      return state;
  }
};

const getUsersAC = (users: UserType[]) => ({ type: "APP/GET-USERS", users }) as const;
const getTodosAC = (todos: TodoType[]) => ({ type: "APP/GET-TODOS", todos }) as const;
const setLoadingAC = (isLoading: boolean) => ({ type: "APP/IS-LOADING", isLoading }) as const;
const setError = (error: string | null) => ({ type: "APP/SET-ERROR", error }) as const;

type ActionsType =
  | ReturnType<typeof getUsersAC>
  | ReturnType<typeof getTodosAC>
  | ReturnType<typeof setLoadingAC>
  | ReturnType<typeof setError>;

// Utils functions
function baseErrorHandler(dispatch: Dispatch, message: string) {
  dispatch(setError(message));
  dispatch(setLoadingAC(false));
}

// Thunk
const getTodosTC = (): AppThunk => (dispatch) => {
  dispatch(setLoadingAC(true));
  api
    .getTodos()
    .then((res) => {
      dispatch(getTodosAC(res.data));
      dispatch(setLoadingAC(false));
    })
    .catch((e: AxiosError) => {
      baseErrorHandler(dispatch, e.message);
    });
};

const getUsersTC = (): AppThunk => (dispatch) => {
  dispatch(setLoadingAC(true));
  api
    .getUsers()
    .then((res) => {
      dispatch(getUsersAC(res.data.items));
      dispatch(setLoadingAC(false));
    })
    .catch((e: AxiosError) => {
      baseErrorHandler(dispatch, e.message);
    });
};

// Store
const rootReducer = combineReducers({
  app: appReducer,
});

const store = configureStore({ reducer: rootReducer });
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>;
type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>;
const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// COMPONENTS
// Loader
export const Loader = () => {
  return <h1>Loading ...</h1>;
};

const App = () => {
  return (
    <>
      <h1>✅Todos & 🙂Users</h1>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Todos />
        <Users />
      </div>
    </>
  );
};

const Todos = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.app.todos);
  const error = useAppSelector((state) => state.app.error);
  const isLoading = useAppSelector((state) => state.app.isLoading);

  useEffect(() => {
    dispatch(getTodosTC());
  }, []);

  return (
    <div>
      <h2>✅ Список тудулистов</h2>
      {!!error && <h2 style={{ color: "red" }}>{error}</h2>}
      {isLoading && <Loader />}
      {todos.map((t) => {
        return (
          <div style={t.completed ? { color: "grey" } : {}} key={t.id}>
            <input type="checkbox" checked={t.completed} />
            <b>Описание</b>: {t.title}
          </div>
        );
      })}
    </div>
  );
};

const Users = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.app.users);
  const error = useAppSelector((state) => state.app.error);
  const isLoading = useAppSelector((state) => state.app.isLoading);

  useEffect(() => {
    dispatch(getUsersTC());
  }, []);

  return (
    <div>
      <h2>🙂 Список юзеров</h2>
      {!!error && <h2 style={{ color: "red" }}>{error}</h2>}
      {isLoading && <Loader />}
      <div>
        {users.map((u) => {
          return (
            <div key={u.id}>
              <b>name</b>:{u.name} - <b>age</b>:{u.age}
            </div>
          );
        })}
      </div>
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
// Перед вами список тудулистов и пользователей, которые находятся в постоянной загрузке.
// Откройте network и вы увидите что запросы падают с ошибками,
// но в коде этот никак не обрабатывается.
// Для обработки ошибок написана утилитная функция baseErrorHandler.
// Ваша задача воспользоваться этой функцией и вывести ошибки на экран.
// Что нужно написать вместо XXX, чтобы ошибки обработались и пользователь их увидел ?
//❗ Код фиксить не нужно.

// 🖥 Пример ответа: dispatch(setLoadingAC(false)) */


/* import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import axios, { AxiosError } from "axios";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

// Types
type NullableType<T> = null | T;

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
const initState = {
  isLoading: false,
  error: null as NullableType<string>,
  isLoggedIn: false,
};

type InitStateType = typeof initState;

const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
  switch (action.type) {
    case "APP/SET-IS-LOGGED-IN":
      return { ...state, isLoggedIn: action.isLoggedIn };
    case "APP/IS-LOADING":
      return { ...state, isLoading: action.isLoading };
    case "APP/SET-ERROR":
      return { ...state, error: action.error };
    default:
      return state;
  }
};

// Actions
const setIsLoggedIn = (isLoggedIn: boolean) =>
  ({ type: "APP/SET-IS-LOGGED-IN", isLoggedIn }) as const;
const setLoadingAC = (isLoading: boolean) => ({ type: "APP/IS-LOADING", isLoading }) as const;
const setError = (error: string | null) => ({ type: "APP/SET-ERROR", error }) as const;
type ActionsType =
  | ReturnType<typeof setIsLoggedIn>
  | ReturnType<typeof setLoadingAC>
  | ReturnType<typeof setError>;

// Thunk
const loginTC =
  (values: LoginFieldsType): AppThunk =>
  (dispatch) => {
    dispatch(setLoadingAC(true));
    api
      .login(values)
      .then((res) => {
        dispatch(setIsLoggedIn(true));
        alert("Вы залогинились успешно");
      })
      .catch((e) => {
        dispatch(setError(e.message));
         console.log(e)
       })
      .finally(() => {
        dispatch(setLoadingAC(false));
      });
  };

// Store
const rootReducer = combineReducers({
  app: appReducer,
});

const store = configureStore({ reducer: rootReducer });
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>;
type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>;
const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Loader
export const Loader = () => {
  return <h1>Loading ...</h1>;
};

// App
export const App = () => {
  const dispatch = useAppDispatch();

  const [form, setForm] = useState<LoginFieldsType>({ email: "", password: "" });

  const error = useAppSelector((state) => state.app.error);
  const isLoading = useAppSelector((state) => state.app.isLoading);

  console.log(error);

  const changeFormValuesHandler = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    if (field === "email") {
      setForm({ ...form, email: e.currentTarget.value });
    }
    if (field === "password") {
      setForm({ ...form, password: e.currentTarget.value });
    }
  };

  const submitForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(loginTC(form));
  };

  return (
    <div>
      {!!error && <h2 style={{ color: "red" }}>{error}</h2>}
      {isLoading && <Loader />}
      <form>
        <div>
          <input
            placeholder={"Введите email"}
            value={form.email}
            onChange={(e) => changeFormValuesHandler(e, "email")}
          />
        </div>
        <div>
          <input
            type={"password"}
            placeholder={"Введите пароль"}
            value={form.password}
            onChange={(e) => changeFormValuesHandler(e, "password")}
          />
        </div>
        <button type="submit" onClick={submitForm}>
          Залогиниться
        </button>
      </form>
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
// Перед вами форма логинизации. Введите любые логин и пароль и попробуйте залогиниться.
// У вас это навряд ли получится 😈, т.к. вы не знаете email и пароль.
// Откройте Network и проанализируйте запрос.
// Задача: вывести сообщение об ошибке, которую возвращает сервер, говорящую о том что email или password некорректны.

// В качестве ответа указать строку коду, которая позволит это осуществить.
// 🖥 Пример ответа: dispatch('Error message')
// ❗ Типизировать ошибку не надо, т.к. там есть много нюансов, о которых вы узнаете позже */


/* import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import axios from "axios";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

// Types
type PostDomainType = PostType & {
  isDisabled: boolean;
};

type PostType = {
  body: string;
  id: string;
  title: string;
  userId: string;
};

// Api
const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" });

const postsAPI = {
  getPosts() {
    return instance.get<PostType[]>("posts");
  },
  deletePost(id: string) {
    return instance.delete<{ message: string }>(`posts/${id}?delay=3`);
  },
};

// Reducer
const initState = {
  isLoading: false,
  posts: [] as PostDomainType[],
};

type InitStateType = typeof initState;

const postsReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
  switch (action.type) {
    case "POSTS/GET-POSTS":
      return {
        ...state,
        posts: action.posts.map((t) => {
          return { ...t, isDisabled: false };
        }),
      };

    case "POSTS/DELETE-POST":
      return { ...state, posts: state.posts.filter((t) => t.id !== action.id) };

    case "POSTS/IS-LOADING":
      return { ...state, isLoading: action.isLoading };

    case "POSTS/IS-DISABLED":
      return {
        ...state,
        posts: state.posts.map((t) => {
          if (t.id === action.id) {
            return { ...t, isDisabled: action.isDisabled };
          } else {
            return t;
          }
        }),
      };

    default:
      return state;
  }
};

const getPostsAC = (posts: PostType[]) => ({ type: "POSTS/GET-POSTS", posts }) as const;
const deletePostAC = (id: string) => ({ type: "POSTS/DELETE-POST", id }) as const;
const setLoadingAC = (isLoading: boolean) => ({ type: "POSTS/IS-LOADING", isLoading }) as const;
const setIsDisabled = (isDisabled: boolean, id: string) =>
  ({ type: "POSTS/IS-DISABLED", isDisabled, id }) as const;
type ActionsType =
  | ReturnType<typeof getPostsAC>
  | ReturnType<typeof deletePostAC>
  | ReturnType<typeof setLoadingAC>
  | ReturnType<typeof setIsDisabled>;

// Thunk
const getPostsTC = (): AppThunk => (dispatch) => {
  postsAPI.getPosts().then((res) => {
    dispatch(getPostsAC(res.data));
  });
};

const deletePostTC =
  (id: string): AppThunk =>
  (dispatch) => {
    dispatch(setIsDisabled(true, id));
    dispatch(setLoadingAC(true));
    postsAPI.deletePost(id).then((res) => {
      dispatch(deletePostAC(id));
      dispatch(setLoadingAC(false));
    });
  };

// Store
const rootReducer = combineReducers({
  posts: postsReducer,
});

const store = configureStore({ reducer: rootReducer });
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>;
type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>;
const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Loader
export const Loader = () => {
  return <h1>Loading ...</h1>;
};

// App
const App = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts.posts);
  const isLoading = useAppSelector((state) => state.posts.isLoading);

  useEffect(() => {
    dispatch(getPostsTC());
  }, []);

  const deletePostHandler = (id: string) => {
    dispatch(deletePostTC(id));
    
  };

  return (
    <div>
      <div style={{ position: "absolute", top: "0px" }}>{isLoading && <Loader />}</div>
      <div style={{ marginTop: "100px" }}>
        <h1>📜 Список постов</h1>
        {posts.map((p) => {
          return (
            <div key={p.id}>
              <b>title</b>: {p.title}
              <button
                style={{ marginLeft: "15px" }}
                onClick={() => deletePostHandler(p.id)}
                
              >
                удалить пост
              </button>
            </div>
          );
        })}
      </div>
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
// Перед вами список постов.
// Откройте network и быстро нажмите на кнопку удалить пост несколько раз подряд.
// Откройте вкладку Preview и проанализируйте ответ с сервера
// Первое сообщение будет "Post has been successfully deleted",
// а следующие "Post with id: 63626ac315d01f80765587ee does not exist"
// Т.е. бэкенд первый раз удаляет, а потом уже не может, т.к. пост удален из базы данных.

// Ваша задача при первом клике задизаблить кнопку удаления,
// соответсвенно не давать пользователю возможности слать повторные запросы.
// ❗ Необходимо задизаблить кнопку именно удаляемого поста, а не все кнопки.
// Необходимую строку кода для решения этой задачи напишите в качестве ответа.

// 🖥 Пример ответа: style={{marginRight: '20px'}} */


/* import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import axios, { AxiosError } from "axios";
import { configureStore, combineReducers, Dispatch } from "@reduxjs/toolkit";

// TYPES
type TodoType = {
  id: string;
  title: string;
  order: number;
  createdAt: string;
  updatedAt: string;
  completed: boolean;
};

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
  getTodos() {
    return instance.get<TodoType[]>("todos");
  },
  getUsers() {
    return instance.get<UsersResponseType>("users");
  },
};

// Reducer
const initState = {
  isLoading: false,
  error: null as string | null,
  todos: [] as TodoType[],
  users: [] as UserType[],
};

type InitStateType = typeof initState;

const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
  switch (action.type) {
    case "APP/GET-TODOS":
      return { ...state, todos: action.todos };
    case "APP/GET-USERS":
      return { ...state, users: action.users };
    case "APP/IS-LOADING":
      return { ...state, isLoading: action.isLoading };
    case "APP/SET-ERROR":
      return { ...state, error: action.error };
    default:
      return state;
  }
};

const getUsersAC = (users: UserType[]) => ({ type: "APP/GET-USERS", users }) as const;
const getTodosAC = (todos: TodoType[]) => ({ type: "APP/GET-TODOS", todos }) as const;
const setLoadingAC = (isLoading: boolean) => ({ type: "APP/IS-LOADING", isLoading }) as const;
const setError = (error: string | null) => ({ type: "APP/SET-ERROR", error }) as const;

type ActionsType =
  | ReturnType<typeof getUsersAC>
  | ReturnType<typeof getTodosAC>
  | ReturnType<typeof setLoadingAC>
  | ReturnType<typeof setError>;

// Utils functions
function baseSuccessHandler<T>(dispatch: Dispatch, actionCreator: Function, data: T) {
  dispatch(actionCreator(data));
  dispatch(setLoadingAC(false));
}

// Thunk
const getTodosTC = (): AppThunk => (dispatch) => {
  dispatch(setLoadingAC(true));
  api
    .getTodos()
    .then((res) => {
      baseSuccessHandler(dispatch, setLoadingAC, res.data);
    })
    .catch((e: AxiosError) => {
      dispatch(setError(e.message));
      dispatch(setLoadingAC(false));
    });
};

const getUsersTC = (): AppThunk => (dispatch) => {
  dispatch(setLoadingAC(true));
  api
    .getUsers()
    .then((res) => {
      baseSuccessHandler(dispatch, setLoadingAC, res.data);
    })
    .catch((e: AxiosError) => {
      dispatch(setError(e.message));
      dispatch(setLoadingAC(false));
    });
};

// Store
const rootReducer = combineReducers({
  app: appReducer,
});

const store = configureStore({ reducer: rootReducer });
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>;
type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>;
const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// COMPONENTS
// Loader
export const Loader = () => {
  return <h1>Loading ...</h1>;
};

const App = () => {
  return (
    <>
      <h1>✅Todos & 🙂Users</h1>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Todos />
        <Users />
      </div>
    </>
  );
};

const Todos = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.app.todos);
  const error = useAppSelector((state) => state.app.error);
  const isLoading = useAppSelector((state) => state.app.isLoading);

  useEffect(() => {
    dispatch(getTodosTC());
  }, []);

  return (
    <div>
      <h2>✅ Список тудулистов</h2>
      {!!error && <h2 style={{ color: "red" }}>{error}</h2>}
      {isLoading && <Loader />}
      {todos.map((t) => {
        return (
          <div style={t.completed ? { color: "grey" } : {}} key={t.id}>
            <input type="checkbox" checked={t.completed} />
            <b>Описание</b>: {t.title}
          </div>
        );
      })}
    </div>
  );
};

const Users = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.app.users);
  const error = useAppSelector((state) => state.app.error);
  const isLoading = useAppSelector((state) => state.app.isLoading);

  useEffect(() => {
    dispatch(getUsersTC());
  }, []);

  return (
    <div>
      <h2>🙂 Список юзеров</h2>
      {!!error && <h2 style={{ color: "red" }}>{error}</h2>}
      {isLoading && <Loader />}
      <div>
        {users.map((u) => {
          return (
            <div key={u.id}>
              <b>name</b>:{u.name} - <b>age</b>:{u.age}
            </div>
          );
        })}
      </div>
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
// Перед вами список тудулистов и пользователей, которые находятся в постоянной загрузке.
// Откройте network и вы увидите что запросы на сервер уходят и возвращаются с хорошими данными,
// но вместо этого пользователь видит на экране Loader.
// Для обработки успешного результата написана утилитная функция baseSuccessHandler.
// Ваша задача воспользоваться этой функцией отобразить Todos и Users
// Что нужно написать вместо XXX и YYY, чтобы реализовать данную задачу?
// Ответ дайте через пробел.

// 🖥 Пример ответа: dispatch(baseSuccessHandler(1,2,3))  dispatch(baseSuccessHandler(3,2,1) */


/* import React from "react";
import ReactDOM from "react-dom/client";
import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import axios, { AxiosError } from "axios";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

// Types
type PhotoType = {
  albumId: string;
  id: string;
  title: string;
  url: string;
};

// Api
const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" });

const photosAPI = {
  getPhotos() {
    return instance.get<PhotoType[]>("pictures?delay=3");
  },
};

// Reducer
const initState = {
  isLoading: false,
  error: null as string | null,
  photos: [] as PhotoType[],
};

type InitStateType = typeof initState;

const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
  switch (action.type) {
    case "PHOTO/GET-PHOTOS":
      return { ...state, photos: action.photos };
    case "PHOTO/IS-LOADING":
      return { ...state, isLoading: action.isLoading };
    case "PHOTO/SET-ERROR":
      return { ...state, error: action.error };
    default:
      return state;
  }
};

const getPhotosAC = (photos: PhotoType[]) => ({ type: "PHOTO/GET-PHOTOS", photos }) as const;
const setLoadingAC = (isLoading: boolean) => ({ type: "PHOTO/IS-LOADING", isLoading }) as const;
const setError = (error: string | null) => ({ type: "PHOTO/SET-ERROR", error }) as const;
type ActionsType =
  | ReturnType<typeof getPhotosAC>
  | ReturnType<typeof setLoadingAC>
  | ReturnType<typeof setError>;

const getPhotosTC = (): AppThunk => (dispatch) => {
  dispatch(setLoadingAC(true));
  photosAPI
    .getPhotos()
    .then((res) => {
      dispatch(getPhotosAC(res.data));
      dispatch(setLoadingAC(false));
    })
    .catch((e: AxiosError) => {
      dispatch(setError(e.message));
      dispatch(setLoadingAC(false));
    });
};

// Store
const rootReducer = combineReducers({
  app: appReducer,
});

const store = configureStore({ reducer: rootReducer });
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>;
type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>;
const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Loader
export const Loader = () => {
  return <h1>Loading ...</h1>;
};

// App
const App = () => {
  const dispatch = useAppDispatch();

  const photos = useAppSelector((state) => state.app.photos);
  const isLoading = useAppSelector((state) => state.app.isLoading);
  const error = useAppSelector((state) => state.app.error);

  const getPhotosHandler = () => {
    dispatch(getPhotosTC());
  };

  return (
    <>
      <h1>📸 Фото</h1>
      <h2 style={{ color: "red" }}>{!!error && error}</h2>
      {isLoading && <Loader />}
      <button onClick={getPhotosHandler}>Подгрузить фотографии</button>
      <div style={{ display: "flex", gap: "20px", margin: "20px" }}>
        {photos.map((p) => {
          return (
            <div key={p.id}>
              <b>title</b>: {p.title}
              <div>
                <img src={p.url} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

// 📜 Описание:
// При нажатии на кнопку "Подгрузить фотографии" появляется Loading... и сообщение об ошибке.
// Ваша задача состоит в том, чтобы спрятать Loader независимо от того, как завершится запрос на сервер.
// Т.е. если ответ придет успешный - Loader убираем
//      если ответ придет с ошибкой - Loader тоже убираем.
// Напишите код, с помощью которого можно реализовать данную задачу
// В качестве ответа напишите строку кода.

// 🖥 Пример ответа: .then(() =>  dispatch(getPhotosAC(res.data))) */


/* import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import axios, { AxiosError } from "axios";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

// Types
type PostType = {
  id: string;
  body: string;
  title: string;
  userId: string;
};

// Api
const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/ " });

const postsAPI = {
  getPosts() {
    return instance.get<PostType[]>("posts");
  },
};

// Reducer
const initState = {
  error: null as string | null,
  posts: [] as PostType[],
};

type InitStateType = typeof initState;

const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
  switch (action.type) {
    case "POSTS/GET-POSTS":
      return { ...state, posts: action.posts };

    case "POSTS/SET-ERROR":
      return { ...state, error: action.error };

    default:
      return state;
  }
};

const getPostsAC = (posts: PostType[]) => ({ type: "POSTS/GET-POSTS", posts }) as const;
const setErrorAC = (error: string | null) => ({ type: "POSTS/SET-ERROR", error }) as const;
type ActionsType = ReturnType<typeof getPostsAC> | ReturnType<typeof setErrorAC>;

// Thunk
const getPostsTC = (): AppThunk => (dispatch) => {
  postsAPI
    .getPosts()
    .then((res) => {
      dispatch(getPostsAC(res.data));
    })
    .catch((e: AxiosError) => {
      dispatch(setErrorAC(e.message));
    });
};

// Store
const rootReducer = combineReducers({
  app: appReducer,
});

const store = configureStore({ reducer: rootReducer });
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>;
type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>;
const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Components
export const App = () => {
  const dispatch = useAppDispatch();

  const posts = useAppSelector((state) => state.app.posts);
  const error = useAppSelector((state) => state.app.error);

  useEffect(() => {
    dispatch(getPostsTC());
  }, []);

  return (
    <>
      <h1>📜 Список постов</h1>
      {posts.length ? (
        posts.map((c) => {
          return (
            <div key={c.id}>
              <b>Описание</b>: {c.body}{" "}
            </div>
          );
        })
      ) : (
        <h3>
          ❌ Посты не подгрузились. Произошла какая-то ошибка. Выведите сообщение об ошибке на экран
        </h3>
      )}
      <h2 style={{ color: "red" }}>{!!error && error}</h2>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

// 📜 Описание:
// ❌ Посты не подгрузились. Произошла какая-то ошибка.
// Чинить приложение не нужно (если только для себя, в ответе это не учитывается).
// Задача: вывести сообщение об ошибке на экран.
// В качестве ответа указать строку коду, которая позволит это осуществить

// 🖥 Пример ответа: const store = createStore(rootReducer, applyMiddleware(thunk)) */



/* import React from "react";
import ReactDOM from "react-dom/client";
import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

// Types
type PhotoType = {
  albumId: string;
  id: string;
  title: string;
  url: string;
};

// Api
const instance = axios.create({ baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/" });

const photosAPI = {
  getPhotos() {
    return instance.get<PhotoType[]>("photos?delay=2");
  },
};

// Reducer
const initState = {
  isLoading: false,
  photos: [] as PhotoType[],
};

type InitStateType = typeof initState;

const photoReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
  switch (action.type) {
    case "PHOTO/GET-PHOTOS":
      return { ...state, photos: action.photos };
    case "PHOTO/IS-LOADING":
      return { ...state, isLoading: action.isLoading };
    default:
      return state;
  }
};

const getPhotosAC = (photos: PhotoType[]) => ({ type: "PHOTO/GET-PHOTOS", photos }) as const;
const setLoadingAC = (isLoading: boolean) => ({ type: "PHOTO/IS-LOADING", isLoading }) as const;
type ActionsType = ReturnType<typeof getPhotosAC> | ReturnType<typeof setLoadingAC>;

const getPhotosTC = (): AppThunk => (dispatch) => {
  dispatch(setLoadingAC(true));
  photosAPI.getPhotos().then((res) => {
    dispatch(getPhotosAC(res.data));
    dispatch(setLoadingAC(false));
  });
};

// Store
const rootReducer = combineReducers({
  photo: photoReducer,
});

const store = configureStore({ reducer: rootReducer });
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>;
type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>;
const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Loader
export const Loader = () => {
  return <h1>Loading ...</h1>;
};

// App
const App = () => {
  const dispatch = useAppDispatch();
  const photos = useAppSelector((state) => state.photo.photos);
  const isLoading = useAppSelector((state) => state.photo.isLoading);

  const getPhotosHandler = () => {
    dispatch(getPhotosTC());
  };

  return (
    <>
      <h1>📸 Фото</h1>
      <button onClick={getPhotosHandler}>Подгрузить фотографии</button>
      {isLoading && <Loader />}
      <div style={{ display: "flex", gap: "20px", margin: "20px" }}>
        {photos.map((p) => {
          return (
            <div key={p.id}>
              <b>title</b>: {p.title}
              <div>
                <img src={p.url} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

// 📜 Описание:
// При нажатии на кнопку "Подгрузить фотографии" вы должны увидеть Loading...,
// и через 3 секунды непосредственно фотографии.
// Но после подгрузки данных Loader не убирается.
// Какой код нужно написать, чтобы Loader перестал отображаться после получения данных
// В качестве ответа напишите строку кода.

// 🖥 Пример ответа: console.log('stop Loader') */


/* import { useFormik } from "formik";
import React from "react";
import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import axios from "axios";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
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
const initState = {
  isLoading: false,
  error: null as string | null,
  isLoggedIn: false,
};

type InitStateType = typeof initState;

const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
  switch (action.type) {
    case "APP/SET-IS-LOGGED-IN":
      return { ...state, isLoggedIn: action.isLoggedIn };
    case "APP/IS-LOADING":
      return { ...state, isLoading: action.isLoading };
    case "APP/SET-ERROR":
      return { ...state, error: action.error };
    default:
      return state;
  }
};

// Actions
const setIsLoggedIn = (isLoggedIn: boolean) =>
  ({ type: "APP/SET-IS-LOGGED-IN", isLoggedIn }) as const;
const setLoadingAC = (isLoading: boolean) => ({ type: "APP/IS-LOADING", isLoading }) as const;
const setError = (error: string | null) => ({ type: "APP/SET-ERROR", error }) as const;
type ActionsType =
  | ReturnType<typeof setIsLoggedIn>
  | ReturnType<typeof setLoadingAC>
  | ReturnType<typeof setError>;

// Thunk
const loginTC =
  (values: LoginFieldsType): AppThunk =>
  (dispatch) => {
    dispatch(setLoadingAC(true));
    api
      .login(values)
      .then((res) => {
        dispatch(setIsLoggedIn(true));
        alert("Вы залогинились успешно");
      })
      .catch((e) => {
        dispatch(setError(e.response.data.errors));
      })
      .finally(() => {
        dispatch(setLoadingAC(false));
        setTimeout(() => {
          dispatch(setError(null));
        }, 3000);
      });
  };

// Store
const rootReducer = combineReducers({
  app: appReducer,
});

const store = configureStore({ reducer: rootReducer });
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>;
type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>;
const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Loader
export const Loader = () => {
  return <h1>Loading ...</h1>;
};

// Profile
export const Profile = () => {
  return <h2>😎 Profile</h2>;
};

// Login
export const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const error = useAppSelector((state) => state.app.error);
  const isLoading = useAppSelector((state) => state.app.isLoading);
  const isLoggedIn = useAppSelector((state) => state.app.isLoggedIn);

  const formik = useFormik({
    initialValues: {
      email: "darrell@gmail.com",
      password: "123",
    },
    onSubmit: (values) => {
      dispatch(loginTC(values));
    },
  });

  if (isLoggedIn) {
    return <Navigate to={"profile"} />;
  }

  return (
    <div>
      {!!error && <h2 style={{ color: "red" }}>{error}</h2>}
      {isLoading && <Loader />}
      <form onSubmit={formik.handleSubmit}>
        <div>
          <input placeholder={"Введите email"} {...formik.getFieldProps("email")} />
        </div>
        <div>
          <input
            type={"password"}
            placeholder={"Введите пароль"}
            {...formik.getFieldProps("password")}
          />
        </div>
        <button type="submit">Залогиниться</button>
      </form>
    </div>
  );
};

// App
export const App = () => {
  return (
    <Routes>
      <Route path={""} element={<Login />} />
      <Route path={"profile"} element={<Profile />} />
    </Routes>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);

// 📜 Описание:
// ❗ Email и password менять не надо. Это просто тестовые данные с которыми будет происходить успешный запрос.
// Нажмите на кнопку "Залогиниться" и вы увидели alert с успешным сообщением
// Задача: при успешной логинизации, редиректнуть пользователя на страницу Profile.

// Напишите строку кода, которую нужно добавить
// 🖥 Пример ответа: if (true) { console.log('hello') } */








/* import { useFormik } from 'formik';
import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


// Main
export const Login = () => {

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phone: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <input
          name="firstName"
          onChange={formik.handleChange}
          value={formik.values.firstName}
          placeholder={'Введите имя'}
        />
      </div>
      <div>
        <input
          name="lastName"
          onChange={formik.handleChange}
          value={formik.values.lastName}
          placeholder={'Введите фамилию'}
        />
      </div>
      <div>
        <input
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder={'Введите email'}
        />
      </div>
      <div>
        <input
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          placeholder={'Введите пароль'}
          type={'password'}
        />
      </div>
      <div>
        <input
          name="password"
          onChange={formik.handleChange}
          value={formik.values.phone}
          placeholder={'Введите телефон'}
        />
      </div>
      <button type="submit">Отправить</button>
    </form>
  );
}

// App
export const App = () => {
  return (
    <Routes>
      <Route path={''} element={<Login/>}/>
    </Routes>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<BrowserRouter><App/></BrowserRouter>)

// 📜 Описание:
// Форма заполнения данных работает некорректно.
// Пользователи жалуются на поле ввода "Телефона"
// Найдите в коде ошибку. Исправленную версию строки напишите в качестве ответа.

// 🖥 Пример ответа: <form onSubmit={formik.handleSubmit}> */


/* import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const Main = () => {
  return (
    <>
      <h2>✅ Список тудулистов</h2>
      <h2>📜 Список постов</h2>
    </>
  )
}

// App
export const App = () => {

  return (
    <Routes>
      <Route path={'/'} element={<Main/>}/>
    </Routes>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<BrowserRouter><App/></BrowserRouter>)

// 📜 Описание:
// Приложение при старте падает с ошибкой...
// Найдите и исправьте ошибку, чтобы на экране отобразилось 2 заголовка.
// Исправленную версию строки напишите в качестве ответа.

// 🖥 Пример ответа: type InitStateType = typeof initState */



/* import { useFormik } from 'formik';
import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


// Types
type LoginFieldsType = {
  firstName?: string
}

// Main
export const Login = () => {

  const formik = useFormik({
    initialValues: {
      firstName: '',
    },
    validate: (values) => {
      const errors: LoginFieldsType = {};
      if (values.firstName.length < 5) {
        errors.firstName = "Must be 5 characters or more";
      }
      return errors
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <input
          placeholder={"Введите имя"}
          {...formik.getFieldProps("firstName")}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div style={{ color: "red" }}>{formik.errors.firstName}</div>
        ) : null}
      </div>
      <button type="submit" disabled={!(formik.isValid && formik.dirty)}>
        Отправить
      </button>
    </form>
  );
}

// App
export const App = () => {
  return (
    <Routes>
      <Route path={''} element={<Login/>}/>
    </Routes>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<BrowserRouter><App/></BrowserRouter>)

// 📜 Описание:
// Начните вводить в поле firstName символы. После ввода первого символа кнопка "Отправить" раздизаблится.
// Задача: кнопка "Отправить" должна раздизаблиться только в том случае, если длинна имени больше, либо равна 5 символам.
// Т.е. вам необходимо самостоятельно написать эту валидацию для поля firstName.
// ❗ В качестве текста ошибки напишите 'Must be 5 characters or more'
// ❗ Текст ошибки выводить не нужно (только если для себя поиграться).

// В качестве ответа напишите полностью строку кода с условием.
// 🖥 Пример ответа: if (true) { errors.firstName = 'Must be 5 characters or more' }
// ❗ Сторонние библиотеки (например yup) использовать запрещено */



/* import { useFormik } from 'formik';
import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


// Types
type LoginFieldsType = {
  firstName: string
  email: string
}

// Main
export const Login = () => {

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
    },
    validate: (values) => {
      const errors: Partial<LoginFieldsType> = {};

      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      return errors
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  // Функция необходима для того, чтобы вебшторм не ругался на true в JSX
  const getTrue = () => {
    return true
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <input
          placeholder={"Введите имя"}
          {...formik.getFieldProps("firstName")}
        />
      </div>
      <div>
        <input
          placeholder={"Введите email"}
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email ? (
          <div style={{ color: "red" }}>{formik.errors.email}</div>
        ) : null}
      </div>
      <button type="submit">Отправить</button>
    </form>
  );
}

// App
export const App = () => {
  return (
    <Routes>
      <Route path={''} element={<Login/>}/>
    </Routes>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<BrowserRouter><App/></BrowserRouter>)

// 📜 Описание:
// Загрузив приложение вы увидите ошибку под полем email, но вы еще ничего не ввели.
// Исправьте 46 строку кода так, чтобы:
// 1) Сообщение об ошибке показывалось только в том случае, когда email введен некорректно.
// 2) Вместо ERROR должен быть конкретный текст ошибки прописанный в валидации к этому полю.
// 3) Сообщение должно показываться только в том случае, когда мы взаимодействовали с полем.
// Исправленную версию строки напишите в качестве ответа.

// 🖥 Пример ответа: {true && <div style={{color: 'red'}}>error.email</div>} */





/* import React, { useEffect } from "react";
import { Provider, TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import axios from "axios";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

// Utils
console.log = () => {};

// Api
const instance = axios.create({
  baseURL: "https://exams-frontend.kimitsu.it-incubator.io/api/",
});

const api = {
  getUsers() {
    return instance.get("users");
  },
};

// Reducer
const initState = {
  isLoading: false,
  users: [] as any[],
};

type InitStateType = typeof initState;

const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
  switch (action.type) {
    case "APP/SET-USERS":
      //1 
      return { ...state, users: action.users };
    case "APP/IS-LOADING":
      // 2 
      return { ...state, isLoading: action.isLoading };
    default:
      return state;
  }
};

// Actions
const setUsersAC = (users: any[]) => ({ type: "APP/SET-USERS", users }) as const;
const setLoadingAC = (isLoading: boolean) => ({ type: "APP/IS-LOADING", isLoading }) as const;
type ActionsType = ReturnType<typeof setUsersAC> | ReturnType<typeof setLoadingAC>;

// Thunk
const getUsersTC = (): AppThunk => (dispatch) => {
  // 3
  dispatch(setLoadingAC(true));
  api.getUsers().then((res) => {
    // 4
    dispatch(setLoadingAC(false));
    // 5
    dispatch(setUsersAC(res.data.data));
  });
};

// Store
const rootReducer = combineReducers({
  app: appReducer,
});

const store = configureStore({ reducer: rootReducer });
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = ThunkDispatch<RootState, unknown, ActionsType>;
type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, ActionsType>;
const useAppDispatch = () => useDispatch<AppDispatch>();
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Loader
export const Loader = () => {
  // 6
  return <h1>Loading ...</h1>;
};

// Login
export const Login = () => {
  // 7
  console.log(7);

  const users = useAppSelector((state) => state.app.users);
  const isLoading = useAppSelector((state) => state.app.isLoading);

  return (
    <div>
      {isLoading && <Loader />}
      {users.map((u) => (
        <p key={u.id}>{u.email}</p>
      ))}
      <h1>
        В данном задании на экран смотреть не нужно. Рекомендуем взять ручку, листик и
        последовательно, спокойно расставить цифры в нужном порядке. Прежде чем давать ответ
        обязательно посчитайте к-во цифр и сверьте с подсказкой. Удачи 🚀
      </h1>
    </div>
  );
};

// App
export const App = () => {
  // 8
  const dispatch = useAppDispatch();

  useEffect(() => {
    // 9
    dispatch(getUsersTC());
  }, []);

  // 10
  console.log(10);
  return (
    <Routes>
      <Route path={""} element={<Login />} />
    </Routes>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);

// 📜 Описание:
// Задача: напишите в какой последовательности вызовутся числа при успешном запросе.
// Подсказка: будет 13 чисел.
// Ответ дайте через пробел.

// 🖥 Пример ответа: 1 2 3 4 5 6 7 8 9 10 1 2 3 */


/* import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'


export const PageNotFound = () => {
  return <h2>⛔ 404. Page not found ⛔</h2>
}

export const Profile = () => {
  return <h2>😎 Профиль</h2>
}


export const Main = () => {
  return (
    <>
      <h2>✅ Список тудулистов</h2>
      <h2>📜 Список постов</h2>
    </>
  )
}

// App
export const App = () => {

  return (
    <Routes>
      <Route path={"profile"} element={<Profile />} />
      <Route index path={"profile"} element={<Profile />} />
      
    </Routes>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<BrowserRouter><App/></BrowserRouter>)

// 📜 Описание:
// Вместо ХХХ напишите роут таким образом, чтобы вне зависимости от того чтобы будет в урле (login или home или...)
// вас всегда редиректило на страницу профиля и при в это в урле по итогу
// был адрес /profile

// 🖥 Пример ответа: <Route path={'/'} element={'to profile page'}/> */




/* import { useFormik } from 'formik';
import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Main
export const Login = () => {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <input
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          type="text"
          placeholder={"Введите email"}
        />
      </div>
      <div>
        <input
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          type="password"
          placeholder={"Введите пароль"}
        />
      </div>
      <button type="submit">Отправить</button>
    </form>
  );
}

// App
export const App = () => {
  return (
    <Routes>
      <Route path={''} element={<Login/>}/>
    </Routes>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<BrowserRouter><App/></BrowserRouter>)

// 📜 Описание:
// При заполнении данных формы и их отправке вы должны увидеть alert c
// введенными значениями, но из-за допущенной ошибки форма работает не корректно.
// Найдите ошибку и исправленную версию строки напишите в качестве ответа.
// ❗После того как показался alert форма не должна перегружать все приложение

// 🖥 Пример ответа: <div onClick={handleClick}> */



/* import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const Main = () => {
  return (
    <>
      <h2>✅ Список тудулистов</h2>
      <h2>📜 Список постов</h2>
    </>
  )
}

// App
export const App = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Main/>}/>
    </Routes>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// 📜 Описание:
// Белый экран... Приложение не работает.
// Найдите и исправьте ошибку, чтобы на экране отобразилось 2 заголовка.
// Исправленную версию строки напишите в качестве ответа.

// 🖥 Пример ответа: <Route path={'/'} component={<Main/>}/> */






