import React from 'react'

export const ToDoContext = React.createContext({
 toDoList: [], 
 dispatchToDo: ()=>{},
 createToDo: ()=>{},
 refreshToDo: ()=>{}

});

export const UserContext = React.createContext({
    username:"",
    token: "",
    dispatch: ()=>{}
})