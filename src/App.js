import React, { useState, useEffect } from 'react'
import AddTodo from './components/AddTodo'
import Footer from './components/Footer'
import Header from './components/Header'
import Todos from './components/Todos'
import About from './components/About'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

const App = () => {

  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {

    setTodos(todos.filter((e) => {
      return e !== todo
    }))
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 1;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState(initTodo)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])


  return (
    <>
      <Router>
        <Header title="Todo" serchBar={false} />
        <Switch>
          <Route exact path="/" render={() => {
            return(
              <>
                {<AddTodo addTodo={addTodo} />}
                {<Todos todos={todos} onDelete={onDelete} />}
              </>
            )
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch> 
        <Footer />
      </Router>
    </>
  )
}

export default App