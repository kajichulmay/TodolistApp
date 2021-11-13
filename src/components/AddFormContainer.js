import React, { useContext, useState } from 'react';
import { TodolistContext } from '../context/TodolistContext';
import AddButton from './AddButton';
import AddFormTodolist from './AddFormTodolist';

function AddFormContainer() {
  const { setToggleBtnAddTodoList, toggleBtnAddTodoList } = useContext(TodolistContext);
  return (
    <div className="BoxAddForm">
      {toggleBtnAddTodoList ? (
        <AddFormTodolist setToggleBtnAddTodoList={setToggleBtnAddTodoList} />
      ) : (
        <AddButton setToggleBtnAddTodoList={setToggleBtnAddTodoList} />
      )}
      {/* <AddButton />
      <AddFormTodolist /> */}
    </div>
  );
}

export default AddFormContainer;
