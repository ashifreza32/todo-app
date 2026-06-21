import axios from "axios";

const API_URL = "http://localhost:3000/api/todos";

export const createTodo = (todoData) => {
  return axios.post(API_URL, todoData);
};