import PropTypes from 'prop-types';

import './Todo.css';

function TodoItem({ todo, index, onChange }) {
    return (
        <li className={'li-item'}>
            <span>
                <input type={'checkbox'} onChange={() => onChange(todo.id)} /> &nbsp;
                <b>{index + 1}</b> &nbsp;
                {todo.title}
            </span>
            <button> &times; </button>
        </li>
    );
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
};

export default TodoItem;
