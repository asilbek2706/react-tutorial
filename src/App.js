import TodoList from './Todo/TodoList';

function App() {
    let todos = [
        { id: 1, completed: false, title: 'Real Madrid' },
        { id: 2, completed: false, title: 'Barcelona' },
        { id: 3, completed: false, title: 'Chelsea' },
    ];

    function toggleTodo(id) {
        todos = todos.map((todo) => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
        });
    }

    return (
        <div className='App'>
            <h1>React Tutorial</h1>
            <TodoList todos={todos} onToggle={toggleTodo} />
        </div>
    );
}

export default App;
