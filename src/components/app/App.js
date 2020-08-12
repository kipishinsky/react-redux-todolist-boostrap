import React, {Component} from 'react'
import AppHeader from '../app-header/AppHeader'
import SearchPanel from '../search-panel/SearchPanel'
import TodoList from '../todo-list/Todolist'
import ItemStatusFilter from '../item-status-filter/ItemStatusFilter'

import './App.css'
import ItemAddForm from "../item-add-form";


export default class App extends Component {

	maxId = 100

	state = {
		todoData: [
			this.createTodoItem('Drink Coffee'),
			this.createTodoItem('Make Awesome App'),
			this.createTodoItem('Have a lunch')
		]
	}

	createTodoItem (label) {
		return {
			label,
			important: false,
			done: false,
			id: this.maxId++
		}
	}

	deleteItem = (id) => {
		// неправильно мапятся элементы
		this.setState( ({ todoData }) => {
			const idx = todoData.findIndex( (el) => el.id === id)
			const newArray = {
				...todoData.slice(0, idx),
				...todoData.slice(idx + 1)
			}
			return {
				todoData: newArray
			}
		})
	}

	addItem = (text) => {
		const newItem = this.createTodoItem(text)

		this.setState( ({ todoData }) => {
			const newArr = [
				...todoData,
				newItem
			]
			return {
				todoData: newArr
			}
		})
	}

	toggleProperty (arr, id, propName) {

		const idx = arr.findIndex( (el) => el.id === id)

		const oldItem = arr[idx]
		const newItem = {...oldItem, [propName]: !oldItem[propName]}
		debugger
		return [
			...arr.slice(0, idx),
			newItem,
			...arr.slice(idx + 1)

		] // пушится не {} а newItem как новый элемент стейта
	}

	onToggleImportant = (id) => {
		this.setState(({todoData}) => {
			return {
				todoDate: this.toggleProperty(todoData, id, 'important')
			}
		})
	}

	onToggleDone = (id) => {
		this.setState(({todoData}) => {

			return {
				todoDate: this.toggleProperty(todoData, id, 'done')
			}
		})
	}

	render() {

		const { todoData } = this.state
		const doneCount = todoData.filter( el => el.done).length
		const todoCount = todoData.length - doneCount

		return (
			<div className="todo-app">
				<AppHeader toDo={todoCount} done={doneCount}/>
				<div className="top-panel d-flex">
					<SearchPanel/>
					<ItemStatusFilter/>
				</div>

				<TodoList
					todos={todoData}
					onDeleted={this.deleteItem}
					onToggleImportant={this.onToggleImportant}
					onToggleDone={this.onToggleDone}
				/>

				<ItemAddForm addItem={this.addItem}/>
			</div>
		)
	}
}

