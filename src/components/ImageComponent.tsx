import { imgProps } from "../types"

export const ImageComponent = ({src,alt,height,width,customClass}:imgProps) => {
    return (
        <img src={src} 
            alt={alt} 
            className={customClass ? customClass :`h-${height} w-${width} 
                        rounded-full 
                        ring-4 
                        ring-main 
                        m-4
                        object-contain
                        `}/>

    )
}
