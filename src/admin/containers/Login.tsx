import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        //TODO
        //Hacer peticion a la API
        //useLogin()
/*
        if(useLogin()){
            navigate('/add');
        }
*/

    }

    return(
        <div className="w-full h-screen flex items-center justify-center">
            <form onSubmit={handleSubmit} className="flex justify-evenly items-center flex-col h-56">
                <label htmlFor="name">
                    <input id="name" placeholder="Name"
                            className="border-2 border-black rounded-2xl p-2"
                    />
                </label>
                <label htmlFor="password">
                    <input id="password" placeholder="Password"
                         className="border-2 border-black rounded-2xl p-2"
                    />
                </label>
                <input value="Entrar" type="submit" className="bg-main text-white 
                        w-20 rounded-lg hover:cursor-pointer hover:bg-focus" 
                        />
            </form>
        </div>
    )
}