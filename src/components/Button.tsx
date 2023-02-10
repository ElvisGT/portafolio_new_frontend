import { buttonProps } from "../types"

export const Button = ({ handleStack, text,customClass}: buttonProps) => {
	const activeButtonStyles = 'bg-alert  min-w-20  w-24 h-8 text-white rounded-xl  m-2'

    return (
        <button onClick={handleStack}
            className={customClass ? activeButtonStyles : 
            "bg-main  min-w-20  w-24 h-8 text-white rounded-xl m-2"}>
            {text}
        </button>
    )
}
