import React from 'react'
import Task from './Task'

export default function TaskList({ tasks, activeTab, setTasks }) {
	const getFilteredTaskList = () => {
		if (activeTab === 'Active') {
			return tasks.filter(task => task.active)
		} else if (activeTab === 'Done') {
			return tasks.filter(task => !task.active)
		} else {
			return tasks
		}
	}

	const updateTaskList = () => {
		setTasks([...tasks])
	}
	const deleteTask = (id) => {
		setTasks(tasks.filter(task => task.id !== id))
	}

	return (
		<div className='w-full md:px-6 lg:px-10'>
			{getFilteredTaskList().map(task => (
				<Task key={task.id} task={task} updateTaskList={updateTaskList} deleteTask={deleteTask}>
					{task.text}
				</Task>
			))}
		</div>
	)
}
