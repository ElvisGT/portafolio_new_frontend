import { projectProps } from "../types"

export const ProjectsItem = ({imgUri,imgAlt,name,description}:projectProps) => {
    return (
        <div className="bg-alert
                            w-72
                            h-96
                            mb-14
                            flex
                            items-end
                            rounded-xl
                            md:w-80
                            md:h-80
                            ">
            <img src={imgUri}
                className="
							z-0 
							w-72
							h-96
							object-cover
							absolute
							rounded-xl
                            md:w-80
                            md:h-80
							"
                alt={imgAlt}
            />
            <div className="
                            w-72
                            h-52
                            bg-main 
                            z-20
                            bottom-0
                            rounded-b-xl
                            md:w-80">
                <div className="flex 
                                justify-between 
                                ml-4 
                                my-2 
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
                                justify-evenly
                                flex-wrap 
                                w-10/12
                                mx-4
                                mb-2
                                mt-1
                                ">
                    <p className="text-white mx-2 mb-2">{description}</p>
                </div>
            </div>
        </div>
    )
}
