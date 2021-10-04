import ToDo from './ToDo';

function ToDoList({toDoList=[{title: 'Do something', description: 'something', dateCreated: Date.now(), complete: false, dateCompleted: ''}],dispatchToDo}) {
  return (
    <div>
      
     {toDoList.map((t,i) =>
	   <ToDo title={t.title} description={t.description} dateCreated={t.dateCreated} complete={t.complete} dateCompleted={t.dateCompleted} listIndex={i} dispatchToDo={dispatchToDo} />)
     }
     </div>
  );
}

export default ToDoList;
