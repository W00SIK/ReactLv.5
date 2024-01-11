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
}

export {getTodos, addTodos, deletTodos}