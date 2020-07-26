import {AppHeader} from "./components/app-header/AppHeader";
import {SearchPanel} from "./components/search-panel/SearchPanel";
import {Todolist} from "./components/todolist-item/TodoList";
import React from "react";

export const App = (props) => {

	const todoData = [
		{label: 'Drink Coffee', important: false},
		{label: 'Build React APP', important: true},
		{label: 'I need book ReactJS', important: false},
		{label: 'I love create app', important: false}
	];

	return (
		<div className="APP">
			<AppHeader/>
			<SearchPanel/>
			<Todolist todoData={todoData}/>
		</div>
	)
}