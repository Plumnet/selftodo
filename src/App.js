import "./App.css";
import { useState } from 'react';

export const App = () => {
  const [todoTitle, setTodoTitle] = useState("")
  const [todoId, setTodoId] = useState(1)

  const handleSetTodoTitle = e => {
    setTodoTitle(e.target.value)
  }

  const handleDeleteTodo = (targetTodo) => {
    setTodos(todos.filter((todo) => todo.id !== targetTodo.id));
  };




  const resetTodoTitle = () => { setTodoTitle("") }

  const handleAddTodo = () => {
    setTodos([...todos,　{ id: todoId, title: todoTitle , status: 'notStarted'}　])
    setTodoId(todoId + 1)
    resetTodoTitle()
   }

  const filterOptions = [
    { value: 'all', label: 'すべて' },
    { value: 'notStarted', label: '未着手' },
    { value: 'inProgress', label: '作業中' },
    { value: 'done', label: '完了' },
  ];

  const [ todos, setTodos ] = useState(
    [
     {
       title : "test",
       status: "未着手" 
     },
     {
       title : "test2",
       status: "着手" 
     },
     {
       title : "test3",
       status: "完了" 
     },
   ]
 )

  return (
    <>
    <div className="App">
      <ul>
        <li>
          <span>タイトル</span>
          <span>TODO</span>
          <button>編集</button>
          <button>削除</button>
        </li>
      </ul>
    

      <input
        type="text"
        label="タイトル"
        value={todoTitle}
        onChange={handleSetTodoTitle}
      />
      <button onClick={()=>handleAddTodo()}>作成</button>
          
          
      <button onClick={() => handleDeleteTodo(todos)}>削除</button>

      {/* <input
        type='text'
        label='新しいタイトル'
        // value={newTitle}
        // onChange={handleEditFormChanges}
      /> */}
      {/* <button onClick={()=>handleEditTodo}>編集を保存</button>
      <button onClick={()=>handleCloseEditForm}>キャンセル</button> */}

      <select>
          {filterOptions.map(({ value, label }) => (
            <option value={value}>{label}</option>
          ))}
        </select>

       
 	
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.title}</span>
            <select value={todo.status}>
              <option value='notStarted'>未着手</option>
              <option value='inProgress'>作業中</option>
              <option value='done'>完了</option>
            </select>
            <button>編集</button>
            <button>削除</button>
          </li>
        ))}
      </ul> 
    
    </div>
    </>
  );
};
