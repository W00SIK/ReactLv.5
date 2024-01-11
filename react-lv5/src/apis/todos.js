import api from "./api";

const getTodos = async () => {
    const response = await api.get("/todo")
    return response.data
}

const addTodos = async (newUser) => {
    const response = await api.post("/todo", newUser)
    return response.data
}

const deletTodos = async (id) => {
    const response = await api.delete(`/todo/${id}`)
    return response.data
}

const changeTodos = async (state) => {
    console.log(state.id, state.isDone)
    const response = await api.patch(`/todo/${state.id}`,
    {
        isDone: state.isDone === false ? true: false
    })
    return response.data
}

export {getTodos, addTodos, deletTodos, changeTodos}