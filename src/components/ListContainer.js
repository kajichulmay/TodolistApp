import { useContext } from 'react';
import { TodolistContext } from '../context/TodolistContext';
import EditFormContainer from './EditFormContainer';
import List from './List';

function ListContainer() {
  const { lists } = useContext(TodolistContext);
  return (
    <div className="ListContainer">
      {lists.map(item => (
        <List key={item.id} item={item} />
      ))}
    </div>
  );
}

export default ListContainer;
