const TodoItem = ({ itemProp,  handleChange }) => {

    const delTodo = (id) => {
        setTodos([
          ...todos.filter((todo) => {
            return todo.id !== id;
          }),
        ]);
      };
      

    return (
      <li>
        <input 
        type="checkbox"
        checked={itemProp.completed}
        onChange={() => handleChange(itemProp.id)}
         />
        <button onClick={() => delTodo(itemProp.id)}>Delete</button>
        {itemProp.title}
      </li>
    );
  };
  export default TodoItem;
  