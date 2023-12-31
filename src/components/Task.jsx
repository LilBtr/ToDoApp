import React from 'react'

export default function Task({ children, task, updateTaskList, deleteTask }) {
	return (
		<div className='w-full flex justify-between p-2 mb-3 border-4 border-main rounded-lg'>
			<div className={`w-[84%] whitespace-break-spaces overflow-auto text-lg text-center ${!task.active ? 'line-through' : ''} md:text-xl lg:text-3xl xl:text-4xl`}>
				{children}
			</div>
			<div className='flex flex-col justify-around gap-1 lg:gap-2'>
				<button
					onClick={() => {
						task.active ? task.active = false : task.active = true
						updateTaskList()
					}}
					className={`p-2 text-main border-2 border-main rounded-lg transition ${!task.active ? 'bg-main text-white' : ''} md:p-3 xl:p-4 xl:border-4`}>
					{task.active ? (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-6 h-6 lg:w-9 lg:h-9'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M4.5 12.75l6 6 9-13.5'
							/>
						</svg>
					) : (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-6 h-6 lg:w-9 lg:h-9'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M6 18L18 6M6 6l12 12'
							/>
						</svg>
					)}
				</button>
				<button onClick={() => deleteTask(task.id)} className='p-2 text-main border-2 border-main rounded-lg transition hover:bg-main hover:text-white md:p-3 xl:p-4 xl:border-4'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-6 h-6 lg:w-9 lg:h-9'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
						/>
					</svg>
				</button>
			</div>
		</div>
	)
}
