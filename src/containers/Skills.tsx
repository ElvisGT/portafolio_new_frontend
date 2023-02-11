import {ImageComponent} from '../components/ImageComponent'
import { useSkills } from '../hooks/useSkills'

export const Skills = () => {
    const {frontend,backend} = useSkills()
    
    return (
        <div className="bg-white min-h-screen">
            <h2 className="text-3xl text-center py-4 drop-shadow-md">Frontend</h2>
            <div className='flex flex-wrap justify-evenly'>
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
            <h2 className="text-3xl text-center py-4 drop-shadow-md">Backend</h2>
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
