import {AppHeader} from "./components/app-header/AppHeader";
import {SearchPanel} from "./components/search-panel/SearchPanel";
import {Todolist} from "./components/todolist-item/TodoList";
import React from "react";

export const App = () => {
	return (
		<div className="APP">
			<AppHeader/>
			<SearchPanel/>
			<Todolist/>
		</div>
	)
}