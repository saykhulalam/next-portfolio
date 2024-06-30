import React from 'react'

const Title = ({Name, className}) => {
  return <h1 className={`text-black dark:text-white font-bold font-inter tracking-[1px] text-[30px] after:contents-[""] after:w-[30px] after:h-10 after:rounded-lg after:bg-blue-600 after:absolute pl-9 after:left-[-3px]  relative ${className}`}> {Name}</h1>
  
}

export default Title
