import React, { useContext, useState } from 'react';
import { TodolistContext } from '../context/TodolistContext';

function EditFormContainer({ name, id, setEditForm }) {
  const [newName, setNewName] = useState(name);
  const { handleClickUpdateList } = useContext(TodolistContext);

  const handleChangeInputEdit = e => {
    setNewName(e.target.value);
  };

  const handleClickEditForm = () => {
    handleClickUpdateList(id, { id: id, name: newName, status: false });
    setEditForm(cur => !cur);
  };
  return (
    <>
      <div className="boxFormEdit">
        <input type="text" className="form-control" value={newName} onChange={handleChangeInputEdit} />
      </div>
      <div className="groupBtnList">
        <button className="btn btn-success" onClick={handleClickEditForm}>
          <i class="bi bi-save-fill"></i>
        </button>
        <button className="btn btn-danger" onClick={() => setEditForm(cur => !cur)}>
          <i class="bi bi-x-square-fill"></i>
        </button>
      </div>
    </>
  );
}

export default EditFormContainer;
