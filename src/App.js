import TodoList from './Todo/TodoList';
import { useState } from 'react';
import Context from './context';

function App() {
    const [todos, setTodos] = useState([
        { id: 1, completed: false, title: 'Real Madrid' },
        { id: 2, completed: true, title: 'Barcelona' },
        { id: 3, completed: true, title: 'Chelsea' },
    ]);

    function toggleTodo(id) {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        );
    }

    function removeTodo(id) {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    return (
        <Context.Provider value={{ removeTodo }}>
            <div className='App'>
                <h1>React Tutorial</h1>
                <TodoList todos={todos} onToggle={toggleTodo} />
            </div>
        </Context.Provider>
    );
}

export default App;
