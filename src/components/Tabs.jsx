import React from 'react'
import Tab from './Tab';

export default function Tabs({activeTab, setActiveTab}) {
	return (
		<div className='w-full flex justify-center gap-6 py-5'>
			<Tab click={setActiveTab} active={activeTab === 'All'}>All</Tab>
			<Tab click={setActiveTab} active={activeTab === 'Active'}>Active</Tab>
			<Tab click={setActiveTab} active={activeTab === 'Done'}>Done</Tab>
		</div>
	)
}
