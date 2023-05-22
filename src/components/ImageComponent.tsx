import { imgProps } from "../types"

export const ImageComponent = ({src,alt,height,width,customClass}:imgProps) => {
    const defaultClass = `h-${height} w-${width} 
                            object-contain
                            rounded-full 
                            ring-4 
                            m-4
                            ring-main`
    return (
        <img src={src} 
            alt={alt} 
            className={customClass ? `${customClass}` : defaultClass}/>

    )
}
