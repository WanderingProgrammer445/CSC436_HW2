import ToDoList from './ToDoList';
import UserLine from './UserLine';
import AddToDo from './AddToDo';
import react from 'react';
import {useState, useReducer} from 'react';

function App() {
   

    
    
    function userReducer (state, action) {
        switch (action.type) {
            case 'LOGIN':
            case 'REGISTER':
                return action.username
            case 'LOGOUT':
                return ''
            default:
                return state;
        }
    }
    
   const [username, dispatchUser] = useReducer(userReducer,"");

    return(
        <div>
            <UserLine username={username} dispatchUser={dispatchUser}/>
			{username && <AddToDo username={username}/>}
			<ToDoList/>
        </div>
  );
}

export default App;
