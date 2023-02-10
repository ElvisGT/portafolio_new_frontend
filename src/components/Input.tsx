import { forwardRef  } from "react"
import { inputProps } from "../types/inputProps"

 export const Input = forwardRef(function Input({type,id,placeholder,name,handleSearch}:inputProps,ref){
   return (
     <input id={id}
            type={type}
            required
            placeholder={placeholder}
            className="border-main
                 outline-none
                 border-2
                 p-2
                 rounded-xl
                 w-64
                 h-12
                 focus-visible:border-alert
                 focus-visible:border-4
                 shadow-lg"
          name={name}
          //@ts-ignore
           ref={ref}
           onChange={handleSearch}/>
   )

 })


