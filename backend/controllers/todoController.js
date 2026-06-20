const Todo = require("../models/Todo");

// Create Todo
const createTodo = async (req, res) => {
  try {
    const todo = await Todo.create({
      task: req.body.task,
    });

    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Todos
const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();

    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateTodo = async (req,res)=>{
    try{
     const todo = await Todo.findByIdAndUpdate(req.params.id,req.body,{new:true});
     res.status(200).json(todo);
    }catch(error){
        res.status(500).json({
            message:error.message
        })
}
}

const deleteTodo = async (req,res)=>{
    try{
        await Todo.findByIdAndDelete(req.params.id);
        res.status(200).json({message: "Todo deleted successfully"});
    }catch(error){
        res.status(500).json({
            message:error.message,
        })
    }
}

module.exports = {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
};
