"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodos = exports.createTodo = void 0;
var todo_1 = require("../models/todo");
var TODOS = [];
var createTodo = function (req, res, next) {
    var text = req.body.text;
    var newTodo = new todo_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: 'TODO', createdTodo: newTodo });
};
exports.createTodo = createTodo;
var getTodos = function (rew, res, next) {
    res.json({ todos: TODOS });
};
exports.getTodos = getTodos;
var updateTodo = function (req, res, next) {
    var todoId = req.params.id;
    var updateText = req.body.text;
    var todoIndex = TODOS.findIndex(function (todo) { return todo.id === todoId; });
    if (todoIndex < 0) {
        throw new Error("Error");
    }
    TODOS[todoIndex] = new todo_1.Todo(todoId, updateText);
};
exports.updateTodo = updateTodo;
var deleteTodo = function (req, res, next) {
    var todoId = req.params.id;
    var todoIndex = TODOS.findIndex(function (todo) { return todo.id === todoId; });
    if (todoIndex < 0) {
        throw new Error("Error");
    }
    TODOS.splice(todoIndex);
    res.json({ message: "DELETE" });
};
exports.deleteTodo = deleteTodo;
