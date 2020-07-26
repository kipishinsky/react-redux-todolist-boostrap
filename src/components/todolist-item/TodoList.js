import React from "react";
import {TodoListItem} from "./TodoListItem"

export const Todolist = (props) => {
	return (
		<ul>
			<li><TodoListItem
				label={"Drink Coffee"}
				important={true}
			/></li>
			<li><TodoListItem label={'Build React APP'}/></li>
			<li><TodoListItem label={'I need book ReactJS'}/></li>
			<li><TodoListItem label={'I love create app'}/></li>
		</ul>
	)
}