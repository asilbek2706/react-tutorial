import TodoList from './Todo/TodoList';
import { useEffect, useState } from 'react';
import Context from './context';
import AddTodo from './Todo/AddTodo';
import Loader from './loader';

function App() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
            .then((response) => response.json())
            .then((todos) => {
                setTimeout(() => {
                    setTodos(todos);
                    setLoading(false);
                }, 1000);
            });
    }, []);

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

    function addTodo(title) {
        setTodos(
            todos.concat({
                title,
                id: Date.now(),
                completed: false,
            })
        );
    }

    return (
        <Context.Provider value={{ removeTodo }}>
            <div className='App'>
                <h1>React Tutorial</h1>
                <AddTodo onCreate={addTodo} />
                {loading && <Loader />}
                {todos.length ? (
                    <TodoList todos={todos} onToggle={toggleTodo} />
                ) : loading ? null : (
                    <p>Todos does not exist</p>
                )}
            </div>
        </Context.Provider>
    );
}

export default App;
