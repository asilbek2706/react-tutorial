import TodoList from './Todo/TodoList';

function App() {
    const todos = [
        { id: 1, completed: false, title: 'Real Madrid' },
        { id: 2, completed: false, title: 'Barcelona' },
        { id: 3, completed: false, title: 'Chelsea' },
    ];
    return (
        <div className='App'>
            <h1>React Tutorial</h1>
            <TodoList todos={todos} />
        </div>
    );
}

export default App;
