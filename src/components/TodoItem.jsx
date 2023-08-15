import styles from '@/styles/TodoItem.module.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";

const TodoItem = ({ itemProp,  handleChange,  setUpdate, setTodos, todos }) => {
  const [editing, setEditing] = useState(false);
  const handleEditing = () => {
    setEditing(true);
  };

  let viewMode = {};
  let editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };
    const delTodo = (id) => {
        setTodos([
          ...todos.filter((todo) => {
            return todo.id !== id;
          }),
        ]);
      };
      

    return (
      <li className={styles.item}>
        <div className={styles.content}>
        <input 
        type="checkbox"
        checked={itemProp.completed}
        onChange={() => handleChange(itemProp.id)}
         />
        <button onClick={handleEditing}>
        <AiFillEdit style={{ color: "#5e5e5e", fontSize: "16px" }} />
          </button> 
        <button onClick={() => delTodo(itemProp.id)}>
        <FaTrash style={{ color: "#5e5e5e", fontSize: "16px" }} />
        </button>
        <span
          style={{
            textDecoration: itemProp.completed ? 'line-through' : 'none',
          }}
        >
          {itemProp.title}
        </span>
        </div>
        <input
      type="text"
      value={itemProp.title}
      className={styles.textInput}
      style={editMode}
      onChange={(e) => setUpdate(e.target.value, itemProp.id)}
      onKeyDown={handleUpdatedDone}
    /> 
      </li>
    );
  };

  // Define propTypes to validate props
TodoItem.propTypes = {
  itemProp: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
  setTodos: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
};
  export default TodoItem;
  