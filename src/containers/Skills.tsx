import { ImageComponent } from "../components/ImageComponent";
import { TechTitle } from "../components/TechTitle";
import { useSkills } from "../hooks/useSkills";

const Skills = () => {
  const { frontend, backend } = useSkills();

  return (
    <div
      className="min-h-screen md:mt-12 
                        md:w-10/12 
                        md:m-auto 
                       "
    >
        <TechTitle title={'Frontend'}/>
      <div className="flex flex-wrap justify-evenly md:mb-16 w-full">
        {frontend.length > 0 &&
          frontend.map((skill) => (
            <div
              key={skill.src}
              className="w-20 justify-center items-center m-4"
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

      <TechTitle title={'Backend'}/>
      
      <div className="flex flex-wrap justify-evenly">
        {backend.length > 0 &&
          backend.map((skill) => (
            <div
              key={skill.src}
              className="w-20 justify-center items-center m-4"
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
