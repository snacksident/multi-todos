import React from "react"
import { useDoc } from "@syncstate/react"

export default function TodoItem({ todoItemPath, todo }) {
    const [todos, setTodos] = useDoc("/todos",Infinity)
    const [todoItem, setTodoItem ] = useDoc(todoItemPath)

    const deleteTodo = (id) => {
        let index
        for(let i = 0; i < todos.length; i++){
            if(todos[i].id === id){
                index = i
                break
            }
        }
        setTodos((todos)=>{
            todos.splice(index, 1)
        })
    }

    const toggleTodo = (completed) => {
        setTodoItem((todoItem)=>{
            todoItem.completed = completed
        })
    }
    const getTextStyle = () => {
        return {
          textDecoration: todoItem.completed ? "line-through" : "none",
          marginLeft: "10px",
        }
      }
    return (
        <div>
            <div className="d-flex align-content-center">
            <div
                className="custom-checkbox custom-control d-flex align-items-center"
                style={{ marginBottom: "2px" }}
            >
                <input
                    type="checkbox"
                    className="form-check-input"
                    checked={todoItem.completed}
                    onChange={(e) => {
                    toggleTodo(e.target.checked);
                    }}
                />
            </div>
            
                <div className="d-flex align-items-center todoTile" style={getTextStyle()}>
                    <div style={{ width: "100%" }}>{todo.caption}</div>
                </div>
                <div className="ml-auto d-flex align-items-center">
                    <button
                        className="border-0 btn-transition btn btn-outline-danger"
                        onClick={()=>{
                            deleteTodo(todoItem.id)
                        }}
                    >
                        <i className="fa fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}
