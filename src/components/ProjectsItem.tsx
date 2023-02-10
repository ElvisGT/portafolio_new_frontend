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
                            rounded-xl
                            animate-oncePulse">
            <img src={imgUri}
                className="
                            min-w-48
                            min-h-32
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
                            min-h-36
                            bg-main 
                            z-20
                            bottom-0
                            rounded-b-xl
                            opacity-90">
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
                                    rounded-lg" 
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
                   {techs.map(tech => (
                    <p className="text-white mx-2 mb-2" key={tech}>{tech}</p>
                   ))}
                </div>
            </div>
        </div>
    )
}
