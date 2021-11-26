import ToDoList from './ToDoList';
import UserLine from './UserLine';
import AddToDo from './AddToDo';
import react from 'react';
import { useResource } from 'react-request-hook';
import { useState, useReducer, useEffect } from 'react';
import { ToDoContext, UserContext } from './Contexts';
import { Container } from 'react-bootstrap';
import { Router, View } from 'react-navi';
import { route, mount } from 'navi';
import UserPage from './UserPage';
import ProfilePage from './ProfilePage';
import { useContext } from 'react';

function App() {

    const routes = mount({
        '/users': route({ view: <UserPage /> }),
        '/users/:userId': route(async req => { view: <ProfilePage id={req.params.userId} /> })

    })

   

    const [toDos, getToDos] = useResource(() => ({
        url: '/todos',
        method: 'get'
    }))



    const [toDosWithAuth, getToDosWithAuth] = useResource((token) => ({
        url: '/todos',
        method: 'get',
        headers: { "Authorization": `${token}` }
    }))

    

	useEffect(()=>{console.log("ToDosWithAuth: "); console.log(toDosWithAuth);},[toDosWithAuth])






    function toDoReducer(state, action) {
        switch (action.type) {
            case 'TOGGLE_TODO':
                return state.map(
                    (todo, i) => {

                        if (i === action.todo_id) {
                            return { ...todo, dateCompleted: action.completed ? action.date : '', complete: action.completed }
                        } else {
                            return todo
                        }
                    })

            case 'FETCH_TODOS':
                console.log(action.todos)
                return action.todos;
            case 'DELETE_TODO':
                return state.filter((todo, i) => { return i !== action.todo_id})
            default:
                return state;
        }
    }
    
    
    


    const [toDoList, dispatchToDo] = useReducer(toDoReducer, []);

    useEffect(()=>{
        if(toDosWithAuth && toDosWithAuth.data){
        dispatchToDo({type: "FETCH_TODOS", todos: toDosWithAuth.data})
    }
}, [toDosWithAuth])

    useEffect(() => {
        if (toDos && toDos.data) {
            //console.log("Got Todo")
            dispatchToDo({ type: 'FETCH_TODOS', todos: toDos.data })
        }
    }, [toDos])

    useEffect(getToDos, [])
    

    /* //Only username
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
    */

    const [toDoCreated, createToDo] = useResource((title, description, dateCreated, complete, dateCompleted, token) => ({
        url: '/todos',
        method: 'post',
        headers: { "Authorization": `${token}` },
        data: { title, description, dateCreated, complete, dateCompleted }

    }))

    //useEffect(getToDos,[toDoCreated])
    
    function userReducer(state, action) {
        switch (action.type) {
            case 'LOGIN':
            case 'REGISTER':
                return { username: action.username, token: action.token }
            case 'LOGOUT':
                return { username: '', token: '' }
            default:
                return state;
        }
    }

    //const [username, dispatchUser] = useReducer(userReducer,""); //Username only

    const [userCredentials, dispatchUser] = useReducer(userReducer, { username: '', token: '' });
    
    const { username, token } = userCredentials;
    //console.log(toDoList);
    
    return (
        <div><UserContext.Provider value={{ username: username, token: token /*username*/, dispatch: dispatchUser }}>
            <ToDoContext.Provider value={{ toDoList: toDoList, dispatchToDo: dispatchToDo, createToDo: createToDo, refreshToDo: getToDosWithAuth}}>
                <Container>
                    <UserLine />
                    {username && <AddToDo />}
                    {toDoList && <ToDoList />}
                </Container>
            </ToDoContext.Provider>
        </UserContext.Provider>
        </div>
    );
}

export default App;
