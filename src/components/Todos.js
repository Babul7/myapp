import React from 'react'
import TodoItem from './TodoItem'
import '../css/Todos.css'

const Todos = (props) => {

  let myStyle = {
    minHeight: "100vh",
  }

  return (
    <>
      <div className="container" style={myStyle}>
        <h3 className='my-4'>Todos List</h3>
        {props.todos.length === 0 ? <div className="card">
                                      <div className="card-body">
                                        <p className='text-capitalize'>No todos to display</p>
                                      </div>
                                    </div> :
          props.todos.map((todo) => {
            return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
          })
        }
      </div>
    </>
  )
}

export default Todos
