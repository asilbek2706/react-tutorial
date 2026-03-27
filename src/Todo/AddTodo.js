import { useState } from 'react';
import PropTypes from 'prop-types';

function useInputValue(defaultValue = '') {
    const [value, setValue] = useState(defaultValue);

    return {
        bind: {
            value,
            onChange: (event) => setValue(event.target.value),
        },
        clear: () => setValue(''),
        value: () => value,
    };
}

function AddTodo({ onCreate }) {
    const input = useInputValue('');
    function submitHandler(event) {
        event.preventDefault();

        if (input.value().trim()) {
            onCreate(input.value());
            input.clear();
        }
    }

    return (
        <form
            style={{
                display: 'flex',
                gap: '10px',
                marginBottom: '20px',
                maxWidth: '500px',
            }}
            onSubmit={submitHandler}
        >
            <input
                placeholder='Add new todo...'
                style={{
                    flex: '1',
                    padding: '12px 15px',
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                    fontSize: '16px',
                    outline: 'none',
                    transition: 'border-color 0.3s ease',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                }}
                {...input.bind}
            />
            <button
                type={'submit'}
                style={{
                    padding: '12px 20px',
                    borderRadius: '8px',
                    border: 'none',
                    backgroundColor: '#007bff',
                    color: 'white',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease',
                    boxShadow: '0 2px 4px rgba(0,123,255,0.3)',
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
                onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
            >
                Add
            </button>
        </form>
    );
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired,
};

export default AddTodo;
