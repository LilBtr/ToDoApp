import React, { useState } from 'react'

export default function AddTask({ addNewTask }) {
	const [input, setInput] = useState('')

	return (
		<div
			onKeyDown={e => {
				if (e.key === 'Enter') {
					addNewTask(input)
					setInput('')
				}
			}}
			className='py-4 flex justify-center gap-2.5 xl:px-12'>
			<input
				type='text'
				value={input}
				onChange={e => setInput(e.target.value)}
				className='py-1 pl-1 outline-none border-2 border-main rounded-xl bg-transparent md:w-96 lg:w-full lg:max-w-[80vw] lg:text-2xl xl:border-4 xl:text-3xl'
			/>
			<button
				onClick={() => {
					addNewTask(input)
					setInput('')
				}}
				className='w-12 py-1 text-2xl text-main bg-transparent border-2 border-main rounded-xl transition hover:bg-main hover:text-white md:p-2 md:w-20 lg:text-4xl xl:border-4 xl:text-5xl'>
				+
			</button>
		</div>
	)
}
