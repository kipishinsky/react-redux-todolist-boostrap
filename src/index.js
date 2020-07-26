import React from 'react';
import ReactDOM from 'react-dom';


const Todolist = () => {

	const items = ['Drink coffee', 'Build Awesome APP']

	return (
		<ul>
			<li> { items[0] } </li>
			<li> { items[1] } </li>
		</ul>
	)
}

const AppHeader = () => {
	return <h1>My Todo List</h1>
}

const SearchPanel = () => {

	const searchText = 'Type here to search'
	const searchStyle = {
		fontSize: '20px'
	}

	return <input
		placeholder={searchText}
		style={searchStyle}
	/>
}

const App = () => {

	const isLoggedIn = true;
	const loginBox = <span>Log in please</span>
	const welcomeBox = <span>Welcome Back</span>
	const value = `<script> alert('saooo')</script>`

	return (
		<div className="APP">
			{value}
			{ isLoggedIn ? welcomeBox : loginBox}
			<AppHeader />
			<SearchPanel />
			<Todolist />
		</div>
	)
}

ReactDOM.render(<App/>, document.getElementById('root'));