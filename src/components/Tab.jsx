import React from 'react'

export default function Tab({active, click, children}) {
	return (
		<div
			onClick={() => click(children)}
			className={`${active ? 'bg-main text-white' : 'bg-transparent text-main'} text-center font-semibold w-16 border-2 border-main rounded-2xl py-1 md:py-3 md:px-2 md:w-52 transition lg:text-2xl lg:w-64 xl:text-3xl xl:border-4`}>
			{children}
		</div>
	)
}
