import React, { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge';

type TextAreaProps = ComponentProps<"textarea"> & {};

function TextArea({className, ...props}: TextAreaProps) {
  return (
    <textarea name="" id="" className={twMerge("bg-secondary px-2 py-1 rounded-md w-full", className)} {...props} 
    placeholder='Enter all details'
    />
  )
}

export default TextArea