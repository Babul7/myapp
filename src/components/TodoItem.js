import React from 'react'
import '../css/TodoItem.css'

const TodoItem = ({ todo, onDelete }) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="card-header text-capitalize">
            {todo.title}
          </div>
          <p className="card-text text-capitalize">{todo.desc}</p><hr />
          <button className="btn btn-sm btn-danger" onClick={() => { onDelete(todo) }}>Delete</button>
        </div>
      </div>
      {/* <h5 className='text-capitalize'>{todo.title}</h5>
      <p className='text-capitalize'>{todo.desc}</p>
      <button className="btn btn-sm btn-danger" onClick={() => {onDelete(todo)}}>Delete</button><hr /> */}
    </>
  )
}

export default TodoItem