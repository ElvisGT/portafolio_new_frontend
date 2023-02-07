
export const About = () => {
  return (
    <div className="h-screen
                 bg-white 
                 z-0 
                 flex 
                 flex-col 
                 items-center">

      <h2 className="font-bold 
                    text-3xl 
                    my-6">
        ElvisGT
      </h2>
      <img className="h-56 
                    w-56
                    rounded-full 
                    ring-4
                  ring-main"

        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""></img>
      <p className="mx-2 my-8 leading-normal text-lg text-center">Mi nombre es Elvis y soy un desarrollador de software 
        apasionado por la programación y las computadoras.
        LLevo 3 años estudiando y superándome de forma autodidacta, realizando numerosos proyectos
        tanto solo como con otros programadores, lo que me ha permitido 
        elevar mi capacidad de adaptación y aprender a trabajar en equipo. Me considero un 
        programador orientado al <strong>Backend</strong> con conocimiento y entendimiento de las 
        tecnologías <strong>Frontend</strong>, lo que me permite moverme por ambos mundos de manera eficiente.
      </p>
    </div>
  )
}
