
export const useProjects = () => {
    //informacion de prueba
    const data = {
        frontend: [
            {
                imgAlt: "Mesa con laptop",
                imgUri: "https://i.ibb.co/PW0J0wW/pexels-andrew-neel-2312369-compressed.jpg",
                name: "Proyecto 1",
                techs: ['js', 'ts', 'react'],
                stack: 'frontend'
            },

            {
                imgAlt: "Mesa con laptop",
                imgUri: "https://i.ibb.co/PW0J0wW/pexels-andrew-neel-2312369-compressed.jpg",
                name: "Proyecto 3",
                techs: ['js', 'html', 'css'],
                stack: 'frontend'
            },

        ],
        backend: [
            {
                imgAlt: "Mesa con laptop",
                imgUri: "https://i.ibb.co/PW0J0wW/pexels-andrew-neel-2312369-compressed.jpg",
                name: "Proyecto 2",
                techs: ['python'],
                stack: 'backend'
            },
            {
                imgAlt: "Mesa con laptop",
                imgUri: "https://i.ibb.co/PW0J0wW/pexels-andrew-neel-2312369-compressed.jpg",
                name: "Proyecto 5",
                techs: ['node','express','js'],
                stack: 'backend'
            },
        ],
        fullstack: [
            {
                imgAlt: "Mesa con laptop",
                imgUri: "https://i.ibb.co/PW0J0wW/pexels-andrew-neel-2312369-compressed.jpg",
                name: "Proyecto 4",
                techs: ['js', 'ts', 'react', 'mongodb', 'node', 'express', 'mysql', 'docker', 'python'],
                stack: 'fullstack'
            },
        ]
    }

    return data
}