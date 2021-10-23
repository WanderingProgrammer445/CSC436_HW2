import React from 'react'

export const ToDoContext = React.createContext({
 toDoList: [], 
 dispatchToDo: ()=>{},
 createToDo: ()=>{},
 deleteToDo: ()=>{},
 toggleToDo: ()=>{}
});

export const UserContext = React.createContext({
    user:"",
    dispatch: ()=>{}
})