import TodoItem from './TodoItem';

export default function TodoList(props) {
    return (
        <ul>
            {props.todo.map((todo) => {
                return <TodoItem todo={todo} />;
            })}
        </ul>
    );
}
