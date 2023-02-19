import {useState} from 'react';
import { projectProps } from '../types/projectProps';

export const useProjects = () => {
    const apiAll = 'https://portafolionewbackend-production.up.railway.app/api/v1/projects'
    const apiFrontend = 'https://portafolionewbackend-production.up.railway.app/api/v1/projects/search/stack?projectStack=Frontend'
    const apiBackend = 'https://portafolionewbackend-production.up.railway.app/api/v1/projects/search/stack?projectStack=Backend'
    const apiFullstack = 'https://portafolionewbackend-production.up.railway.app/api/v1/projects/search/stack?projectStack=Fullstack'
    
    const [allProjects,setDataAllProjects] = useState(new Array<projectProps>)
    const [frontend,setDataFrontend] = useState(new Array<projectProps>)
    const [backend,setDataBackend] = useState(new Array<projectProps>)
    const [fullstack,setDataFullstack] = useState(new Array<projectProps>)

    fetch(apiAll,{
        method:'GET',
    })
    .then(response => response.json())
    .then(info => setDataAllProjects(info.results))

    fetch(apiFrontend,{
        method:'GET',
    })
    .then(response => response.json())
    .then(info => setDataFrontend(info.project))

    fetch(apiBackend,{
        method:'GET',
    })
    .then(response => response.json())
    .then(info => setDataBackend(info.project))

    fetch(apiFullstack,{
        method:'GET',
    })
    .then(response => response.json())
    .then(info => setDataFullstack(info.project))

    
   return {
    allProjects,
    frontend,
    backend,
    fullstack
   }

}