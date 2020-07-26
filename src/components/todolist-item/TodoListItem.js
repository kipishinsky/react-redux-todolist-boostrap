import React from "react";

export const TodoListItem = (props) => {
	const style = {
		color: props.important ? 'tomato' : 'black'
	}
	return (
		<li style={style}>{props.label}</li>
	)
}
