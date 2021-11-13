import axios from '../config/axios';
import { useState, createContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TodolistContext = createContext();

const TodolistContextProvider = ({ children }) => {
  const [lists, setLists] = useState([]);
  const [inputTodo, setInputTodo] = useState('');
  const [errorAddForm, setErrorAddForm] = useState('');
  const [toggleBtnAddTodoList, setToggleBtnAddTodoList] = useState(false);
  const [toggleLists, setToggleLists] = useState(false);

  useEffect(() => {
    const fetchTodolist = async () => {
      const result = await axios.get('/todos');
      setLists(result.data.allTodolist);
    };
    fetchTodolist();
  }, [toggleLists]);

  const handleChangeAddTodoForm = e => {
    setInputTodo(e.target.value);
    if (!e.target.value) {
      setErrorAddForm('Todo is require');
    } else {
      setErrorAddForm('');
    }
  };

  const handleSubmitTodo = async e => {
    e.preventDefault();
    try {
      if (!inputTodo) {
        setErrorAddForm('Todo is require');
      } else {
        await axios.post('/todos', { name: inputTodo });
        setErrorAddForm('');
        setInputTodo('');
        setToggleLists(cur => !cur);
        setToggleBtnAddTodoList(cur => !cur);
      }
    } catch (err) {
      console.dir(err);
    }
  };

  const handleClickDeleteTodo = async id => {
    try {
      const idx = lists.findIndex(item => item.id === id);
      if (idx !== -1) {
        const newList = [...lists];
        newList.splice(idx, 1);
        setLists(newList);
        await axios.delete(`/todos/${id}`, { newList });
        setToggleLists(cur => !cur);
      }
    } catch (err) {
      console.dir(err);
    }
  };

  const handleClickToggleStatus = async id => {
    try {
      const idx = lists.findIndex(item => item.id === id);

      if (idx !== -1) {
        const newList = [...lists];
        newList[idx].status = !newList[idx].status;
        setLists(newList);
        await axios.put(`/todos/${id}`, newList[idx]);
        setToggleLists(cur => !cur);
      }
    } catch (err) {
      console.dir(err);
    }
  };

  const handleClickUpdateList = async (id, objTodo) => {
    try {
      const idx = lists.findIndex(item => item.id === id);
      if (idx !== -1) {
        const newList = [...lists];
        newList[idx] = objTodo;
        await axios.put(`/todos/${id}`, newList[idx]);
        setLists(newList);
        setToggleLists(cur => !cur);
      }
    } catch (err) {
      console.dir(err);
    }
  };

  return (
    <TodolistContext.Provider
      value={{
        lists,
        handleChangeAddTodoForm,
        errorAddForm,
        inputTodo,
        handleSubmitTodo,
        handleClickDeleteTodo,
        handleClickToggleStatus,
        handleClickUpdateList,
        setToggleBtnAddTodoList,
        toggleBtnAddTodoList,
      }}
    >
      {children}
    </TodolistContext.Provider>
  );
};

export { TodolistContext, TodolistContextProvider };
