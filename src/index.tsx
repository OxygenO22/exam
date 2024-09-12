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


import React, { useEffect } from "react";
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

// 🖥 Пример ответа: return instance.get<CommentType[]>('comments?_limit=10')