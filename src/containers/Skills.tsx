import {ImageComponent} from '../components/ImageComponent'
import { useSkills } from '../hooks/useSkills'

const Skills = () => {
    const {frontend,backend} = useSkills()
    
    return (
        <div className="min-h-screen md:mt-12 
                        md:w-10/12 
                        md:m-auto 
                       ">
            <h2 className="text-3xl text-center py-4 drop-shadow-md md:mb-4">Frontend</h2>
            <div className='flex flex-wrap justify-evenly md:mb-16'>
                {frontend.length > 0 && 
                    frontend.map(skill => (
                        <ImageComponent src={skill.src}
                            alt={skill.alt}
                            height='24'
                            width='24'
                            key={skill.src}
                        />
                    ))
                }
            </div>
            <h2 className="text-3xl text-center py-4 drop-shadow-md md:my-4">Backend</h2>
            <div className='flex flex-wrap justify-evenly'>
                {backend.length > 0 && 
                        backend.map(skill => (
                            <ImageComponent src={skill.src}
                                alt={skill.alt}
                                height='24'
                                width='24'
                                key={skill.src} 
                            />
                        ))
                }
            </div>
        </div>
    )
}


export default Skills;