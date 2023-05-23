
export const useProjects = () => {
    //informacion de prueba
    const data = {
        frontend: [
            {
                imgAlt: "Mesa con laptop",
                imgUri: "https://i.ibb.co/PW0J0wW/pexels-andrew-neel-2312369-compressed.jpg",
                name: "Proyecto 1",
                description: `Proyecto para ser millonario en poco tiempo y con poca inversion,
                se debe de desarrollar en node y tiene que tener siempre una base de datos para 
                almacenar todo el flujo de la aplicacion`,
                stack: 'frontend'
            },

            {
                imgAlt: "Mesa con laptop",
                imgUri: "https://i.ibb.co/PW0J0wW/pexels-andrew-neel-2312369-compressed.jpg",
                name: "Proyecto 3",
                description: 'js',
                stack: 'frontend'
            },

        ],
        backend: [
            {
                imgAlt: "Mesa con laptop",
                imgUri: "https://i.ibb.co/PW0J0wW/pexels-andrew-neel-2312369-compressed.jpg",
                name: "Proyecto 2",
                description: 'python',
                stack: 'backend'
            },
            {
                imgAlt: "Mesa con laptop",
                imgUri: "https://i.ibb.co/PW0J0wW/pexels-andrew-neel-2312369-compressed.jpg",
                name: "Proyecto 5",
                description: 'node',
                stack: 'backend'
            },
        ],
        fullstack: [
            {
                imgAlt: "Mesa con laptop",
                imgUri: "https://i.ibb.co/PW0J0wW/pexels-andrew-neel-2312369-compressed.jpg",
                name: "Proyecto 4",
                description: 'mysql',
                stack: 'fullstack'
            },
        ],
        
    }

    return data
}