import { projectProps } from "../types"

export const ProjectsItem = ({imgUri,imgAlt,name,description}:projectProps) => {
    return (
        <div className="bg-alert
                            w-72
                            min-h-96
                            mb-20
                            flex
                            flex-col
                            items-end
                            rounded-xl
                            md:w-80
                            md:mx-4
                            ">
            <img src={imgUri}
                className="
							z-0 
							h-[calc(384px - 192px)]
							w-72
							object-cover
                            rounded-tl-xl
                            rounded-tr-xl
                            md:w-80
							"
                alt={imgAlt}
            />
            <div className="
                            w-72
                            md:w-80
                            h-52
                            bg-main 
                            z-20
                            bottom-0
                            rounded-b-xl
                            ">
                <div className="flex 
                                justify-between 
                                ml-4 
                                mt-4 
                                w-10/12
                                text-white
                                text-xl">
                    <h2 className="">{name}</h2>
                    <a className="bg-alert
                                    w-20
                                    text-center
                                    rounded-lg
                                    md:hover:cursor-pointer
                                   " 
                        href="#" 
                        target={"_blank"}>Enlace</a>
                </div>
                <div className="flex 
                                items-center
                                flex-wrap 
                                m-4
                                ">
                    <p className="text-white mx-2 my-2 italic">{description}</p>
                </div>
            </div>
        </div>
    )
}
