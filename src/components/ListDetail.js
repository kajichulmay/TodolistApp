import React, { useContext } from 'react';
import { TodolistContext } from '../context/TodolistContext';

function ListDetail({ name, status, id, setEditForm }) {
  const { handleClickDeleteTodo, handleClickToggleStatus } = useContext(TodolistContext);
  return (
    <>
      <div>{name}</div>
      <div className="groupBtnList">
        <button className={`btn btn-${status ? 'success' : 'warning'}`} onClick={() => handleClickToggleStatus(id)}>
          <i className={`bi bi-toggle-${status ? 'on' : 'off'}`}></i>
        </button>
        <button className="btn btn-primary" onClick={() => setEditForm(cur => !cur)}>
          <i className="bi bi-pencil-fill"></i>
        </button>
        <button className="btn btn-danger" onClick={() => handleClickDeleteTodo(id)}>
          <i className="bi bi-trash-fill"></i>
        </button>
      </div>
    </>
  );
}

export default ListDetail;
