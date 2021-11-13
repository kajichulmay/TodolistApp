import React from 'react';

function AddButton({ setToggleBtnAddTodoList }) {
  return (
    <div className="BoxAdd">
      <button type="button" className="btn btn-outline-success" onClick={() => setToggleBtnAddTodoList(cur => !cur)}>
        <i className="bi bi-caret-down-fill"></i>
      </button>
    </div>
  );
}

export default AddButton;
