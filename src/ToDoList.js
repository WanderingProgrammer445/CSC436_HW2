import ToDo from './ToDo';

function ToDoList() {
  return (
    <div>
	   <ToDo title='Do something' description='something' dateCreated={Date.now()} complete={false} dateCompleted='' />
	</div>
  );
}

export default ToDoList;
