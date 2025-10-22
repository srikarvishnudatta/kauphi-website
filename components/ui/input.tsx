import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
type InputProps = ComponentProps<"input"> & {};

export default function Input({className, ...props}: InputProps) {
  return <input {...props} className={twMerge("bg-secondary px-2 py-1 rounded-md w-full", className)}/>;
}
