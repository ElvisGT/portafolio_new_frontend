import { buttonProps } from "../types"

export const Button = ({ handleStack, text,customClass}: buttonProps) => {
	const activeButtonStyles = 'bg-alert px-4 w-auto h-8 text-white rounded-xl  m-4'

    return (
        <button onClick={handleStack}
            className={customClass ? activeButtonStyles : 
            "bg-main w-auto px-4 min-h-8 h-8 text-white rounded-xl m-4 shadow-xl"}>
            {text}
        </button>
    )
}
