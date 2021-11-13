import React, { useContext } from 'react';
import { TodolistContext } from '../context/TodolistContext';

function AddFormTodolist({ setToggleBtnAddTodoList }) {
  const { handleChangeAddTodoForm, errorAddForm, inputTodo, handleSubmitTodo } = useContext(TodolistContext);
  return (
    <div className="AddFormBox">
      <div className="btnCancleAddForm" onClick={() => setToggleBtnAddTodoList(cur => !cur)}>
        <button type="button" className="btn-close" disabled aria-label="Close"></button>
      </div>
      <div className="containerAddForm ">
        <form onSubmit={handleSubmitTodo}>
          <input
            type="text"
            className={`inputTodo form-control ${errorAddForm && 'is-invalid'}`}
            placeholder="Create Todo List"
            value={inputTodo}
            onChange={handleChangeAddTodoForm}
          />
          <p className="invalid-feedback">{errorAddForm}</p>
          <button className="btn btn-success">
            <i className="bi bi-save"></i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddFormTodolist;
