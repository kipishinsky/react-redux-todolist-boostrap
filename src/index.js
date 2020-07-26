import React from 'react';
import ReactDOM from 'react-dom';


const Todolist = () => {
    return (
        <ul>
            <li>learn react</li>
            <li>read books</li>
        </ul>
    )
}

const AppHeader = () => {
    return <h1>My Todo List</h1>
}

const SearchPanel = () => {
    return <input placeholder="searh"/>
}

const App = () => {
    return (
        <div className="APP">
            <AppHeader />
            <SearchPanel />
            <Todolist />
        </div>
    )
}


/*
//равносильно const a = <h1>hello world</h1>
const a = React.createElement('h1', null, 'hello world')

virtual DOM - использование легковесных объектов, поэтому работает быстро

*/


ReactDOM.render (<App />, document.getElementById('root'));