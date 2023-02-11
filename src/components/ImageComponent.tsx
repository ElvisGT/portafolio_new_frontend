import { imgProps } from "../types"

export const ImageComponent = ({src,alt,height,width}:imgProps) => {
    return (
        <img src={src} 
            alt={alt} 
            className={`h-${height} w-${width} 
                        rounded-full 
                        ring-4 
                        ring-main 
                        m-4
                        z-0
                        `}/>

    )
}
