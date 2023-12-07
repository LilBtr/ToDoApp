import React, { useState } from 'react'
import Tabs from './components/Tabs'
import TaskList from './components/TaskList'
import AddTask from './components/AddTask'

export default function App() {
	const [tasks, setTasks] = useState([])

	const [activeTab, setActiveTab] = useState('All')

	const addNewTask = text => {
		if (text) {
			const task = {
				text: text,
				id: Date.now(),
				active: true,
			}
			setTasks([task, ...tasks])
		}
	}

	return (
		<div className='box-border px-4 xl:px-24'>
			<AddTask addNewTask={addNewTask} />
			<Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
			<TaskList tasks={tasks} setTasks={setTasks} activeTab={activeTab} />
		</div>
	)
}
