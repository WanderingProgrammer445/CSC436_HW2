import ToDoList from './ToDoList';
import UserLine from './UserLine';
import AddToDo from './AddToDo';
import react from 'react';
import { useResource } from 'react-request-hook';
import {useState, useReducer, useEffect} from 'react';
import { ToDoContext, UserContext } from './Contexts';

function App() {
   


   const [ toDos, getToDos ] = useResource(() => ({
        url: '/todos',
        method: 'get'
      }))





    

   const [ toDoCreated, createToDo ] = useResource((title, description, dateCreated, complete, dateCompleted) => ({
        url: '/todos',
        method: 'post',
        data: {title, description, dateCreated, complete, dateCompleted}

      }))
    
    function toDoReducer (state, action) {
        switch (action.type) {
            case 'TOGGLE_TODO':
              return state.map(
                  (todo, i)=>{

                      if(todo.id === action.toDoItemKey){
                          return {... todo, dateCompleted: action.completed?action.date:'', complete: action.completed } 
                        } else {
                            return todo
                        }
                    })
              
            case 'FETCH_TODOS':
                return action.todos;  
            case 'DELETE_TODO':
                return state.filter((todo,i)=>{return todo.id!==action.toDoItemKey})
            default:
               return state;
        }
      }
    useEffect(getToDos,[toDoCreated])

 

    
    const [toDoList, dispatchToDo] = useReducer(toDoReducer,[]);

    

    useEffect(() => {
        if (toDos && toDos.data) {
            dispatchToDo({ type: 'FETCH_TODOS', todos: toDos.data })
        }
    }, [toDos])

    useEffect(getToDos,[])
    
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
        <div><UserContext.Provider value={{username: username, dispatch: dispatchUser}}>
            <ToDoContext.Provider value={{toDoList: toDoList, dispatchToDo: dispatchToDo, createToDo: createToDo}}>
            <UserLine username={username} dispatchUser={dispatchUser}/>
			{username && <AddToDo username={username} dispatchToDo={dispatchToDo}/>}
			<ToDoList toDoList={toDoList} dispatchToDo={dispatchToDo}/>
            </ToDoContext.Provider>
            </UserContext.Provider>
        </div>
  );
}

export default App;
