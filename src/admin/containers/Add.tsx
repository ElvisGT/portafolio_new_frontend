import { Button } from "../../components/Button"

export const Add = () => {
  return (
    <div>
        <div className="flex flex-col w-full h-screen justify-center items-center">
        <h1 className="text-center text-3xl mb-8">Que quieres agregar ?</h1>
            <Button type="button" text="Proyecto"/>
            <Button type="button" text="Habilidad"/>
        </div>
    </div>
  )
}
