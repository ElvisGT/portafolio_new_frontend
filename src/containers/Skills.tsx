import { ImageComponent } from "../components/ImageComponent";
import { PageTitle } from "../components/PageTitle";
import { useSkills } from "../hooks/useSkills";

const Skills = () => {
  const { frontend, backend } = useSkills();

  return (
    <div
      className="min-h-screen
                        w-full
                        flex 
                        flex-col 
                        items-center  
                        md:my-0
                        md:w-10/12 
                        md:mx-auto
                       "
    >
        <PageTitle title={'Frontend'}/>
      <div className="flex flex-wrap 
                      justify-evenly 
                      mt-5 
                      w-full">
        {frontend.length> 0 &&
          frontend.map((skill) => (
            <div
              key={skill.src}
              className="w-20 justify-center 
                          items-center 
                          m-4
                          md:m-8"
            >
              <ImageComponent
                src={skill.src}
                alt={skill.alt}
                height="20"
                width="20"
                key={skill.src}
              />
              <h2 className="my-4 text-center">{skill.name}</h2>
            </div>
          ))}
      </div>

      <PageTitle title={'Backend'}/>
      
      <div className="flex flex-wrap 
                      justify-evenly 
                      mt-5 
                      w-full">
        {backend.length > 0 &&
          backend.map((skill) => (
            <div
              key={skill.src}
              className="w-20 justify-center 
                          items-center 
                          m-4
                          md:m-8"
            >
              <ImageComponent
                src={skill.src}
                alt={skill.alt}
                height="20"
                width="20"
                key={skill.src}
              />
              <h2 className="my-4 text-center">{skill.name}</h2>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Skills;
