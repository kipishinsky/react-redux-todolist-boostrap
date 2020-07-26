import React from "react";
import {TodoListItem} from "./TodoListItem"

export const Todolist = (props) => {

	const todoListItem = props.todoData.map (td => {
		return <li><TodoListItem {...td}/></li>
	})
	return (
		<ul>
			{todoListItem}
		</ul>
	)
}