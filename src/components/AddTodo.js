import React, { useState } from 'react'
import '../css/AddTodo.css'

const AddTodo = ({ addTodo }) => {

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        }
        else {
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }

    return (
        <>
            <div className="container mt-4">
                <h3>Add Todos</h3>
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={submit}>
                            <div className="form-title mb-3">
                                <label htmlFor="title" className="form-label">Todo Title</label>
                                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" />
                            </div>
                            <div className="form-desc mb-3">
                                <label htmlFor="desc" className="form-label">Todo Description</label>
                                <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" />
                            </div>
                            <button type="submit" className="btn btn-sm btn-primary">Add Todo</button>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AddTodo