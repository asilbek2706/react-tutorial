# Todo App

A simple React todo application built with Create React App.

## Features

- Fetches an initial todo list from `https://jsonplaceholder.typicode.com/todos?_limit=5`
- Shows a loading spinner while todos are being fetched
- Marks todos as completed or incomplete
- Adds new todos from the input form
- Removes todos from the list

## Tech Stack

- React
- Create React App
- PropTypes

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Create a production build:

```bash
npm run build
```

Run tests:

```bash
npm test
```

## Project Structure

```text
src/
  App.js
  context.js
  index.css
  index.js
  loader.js
  Todo/
    AddTodo.js
    Todo.css
    TodoItem.js
    TodoList.js
```

## How It Works

- `App.js` loads todos, manages state, and provides the remove action through React context.
- `AddTodo.js` handles creation of new todos through a controlled input.
- `TodoList.js` renders the todo collection.
- `TodoItem.js` handles completion toggling and deletion UI for each todo.
- `loader.js` renders the loading spinner.

## Notes

- Initial todos come from a public placeholder API.
- New todos are stored only in local component state and are not persisted to a backend.
