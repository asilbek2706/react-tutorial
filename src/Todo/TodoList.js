import TodoItem from './TodoItem';

export default function TodoList(props) {
    const listStyle = {
        ul: {
            listStyleType: 'none',
            padding: 0,
        },
    };
    return (
        <ul style={listStyle.ul}>
            {props.todos.map((todo) => {
                return <TodoItem todo={todo} key={todo.id} />;
            })}
        </ul>
    );
}
