import './App.css';
import AddFormContainer from './components/AddFormContainer';
import ListContainer from './components/ListContainer';

function App() {
  return (
    <div className="App">
      <div className="containerBox">
        <AddFormContainer />
        <ListContainer />
      </div>
    </div>
  );
}

export default App;
