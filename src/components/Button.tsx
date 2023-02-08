import { buttonProps } from "../types"

export const Button = ({ handleStack, text }: buttonProps) => {
    return (
        <button onClick={handleStack}
            className="bg-main
                        min-w-20
                        w-24
                        h-8
                        text-white
                        rounded-xl
                    hover:bg-alert"
                     >
            {text}
        </button>
    )
}
