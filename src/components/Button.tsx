import { buttonProps } from "../types"

export const Button = ({ handleStack, text,customClass}: buttonProps) => {
	const activeButtonStyles = `bg-alert px-4 w-auto 
                                h-8 
                                text-white 
                                rounded-xl  
                                shadow-xl
                                m-2
                                md:hover:cursor-pointer
                                md:animate-bounce
								`

    return (
        <button onClick={handleStack}
            className={customClass ? activeButtonStyles : 
            `bg-main w-auto 
                px-4 
                min-h-8 
                h-8 
                text-white 
                rounded-xl 
                m-2 
                shadow-xl
                md:hover:bg-alert
                `}>
            {text}
        </button>
    )
}
