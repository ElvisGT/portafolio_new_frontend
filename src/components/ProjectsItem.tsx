import { projectProps } from "../types"

export const ProjectsItem = ({imgUri,imgAlt,name,techs}:projectProps) => {
    return (
        <div className="bg-alert
                            min-w-48
                            min-h-32
                            w-72
                            h-72
                            my-8
                            flex
                            items-end
                            rounded-xl">
            <img src={imgUri}
                className="
							z-0 
							w-72
							h-72
							object-cover
							absolute
							rounded-xl
							"
                alt={imgAlt}
            />
            <div className="
                            w-72
                            h-28
                            bg-main 
                            z-20
                            bottom-0
                            rounded-b-xl
                            opacity-90">
                <h2 className="text-white ml-4 my-2">{name}</h2>
                <div className="flex 
                                justify-between 
                                flex-wrap 
                                mx-4
                                mb-2
                                mt-4
                                ">
                   {techs.map(tech => (
                    <p className="text-white">{tech}</p>
                   ))}
                </div>
            </div>
        </div>
    )
}
