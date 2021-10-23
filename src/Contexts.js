import React from 'react'

export const ToDoContext = React.createContext({
 toDoList: [], 
 dispatchToDo: ()=>{},
 createToDo: ()=>{},

});

export const UserContext = React.createContext({
    username:"",
    dispatch: ()=>{}
})