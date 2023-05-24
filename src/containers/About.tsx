import { Button } from "../components/Button";
import { ImageComponent } from "../components/ImageComponent";

const About = () => {
  return (
    <div
      className="min-h-screen
                  w-screen
                 z-0 
                 md:w-10/12
                 md:m-auto
                 overflow-y-hidden
                 "
    >
      <div
        className="flex
                  flex-col
                  md:flex-row
                  justify-evenly
                  items-center
                  h-48
                  mt-16
                  mb-28
                  md:mt-28
                  md:mb-12
                  "
      >
        <h2
          className="font-bold 
                    text-3xl
                    mt-12 
                    mb-8
                    drop-shadow-md"
        >
          ElvisGT
        </h2>
        <a href="https://www.instagram.com/elvisgt.99/" target="_blank">
          <ImageComponent
            src="https://i.ibb.co/YQrxrSV/20230501-173727-1.jpg"
            alt="Imagen de ElvisGT"
            customClass="w-40 h-40 object-cover mb-8"
          />
        </a>
        <a
          href="pdf/Elvis-CV-Programador.pdf"
          download="Elvis-CV-Programador.pdf"           
        >
          <Button text="Descargar CV" type="button" />
        </a>
      </div>
      <p className="mx-2 
                    leading-normal 
                    text-lg 
                    text-center 
                    text-font">
        Mi nombre es Elvis y soy un desarrollador de software apasionado por la
        programación y los ordenadores. LLevo 3 años en el mundo de la programación
        superándome de forma autodidacta, realizando numerosos proyectos tanto
        solo como con otros programadores, lo que me ha permitido elevar mi
        capacidad de adaptación y aprender a trabajar en equipo. Me gustan los
        videojuegos y todo lo relacionado con tecnología.
      </p>
    </div>
  );
};

export default About;
