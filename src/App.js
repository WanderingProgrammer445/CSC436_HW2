import ToDoList from './ToDoList';
import UserLine from './UserLine';
import AddToDo from './AddToDo';
function App() {
    const username ='';
    return(
        <div>
            <UserLine username={username}/>
			<AddToDo username={username}/>
			<ToDoList/>
        </div>
  );
}

export default App;
