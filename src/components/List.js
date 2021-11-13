import React, { useContext, useState } from 'react';

import EditFormContainer from './EditFormContainer';
import ListDetail from './ListDetail';

function List({ item }) {
  const [editForm, setEditForm] = useState(false);

  return (
    <div className={`boxListTodo ${item.status ? 'success' : 'warning'}-line `}>
      {editForm ? (
        <EditFormContainer name={item.name} status={item.status} id={item.id} setEditForm={setEditForm} />
      ) : (
        <ListDetail name={item.name} status={item.status} id={item.id} setEditForm={setEditForm} />
      )}
    </div>
  );
}

export default List;
