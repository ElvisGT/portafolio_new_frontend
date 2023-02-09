import { MouseEventHandler } from "react"

export type buttonProps = {
    handleStack?:MouseEventHandler<HTMLButtonElement>,
    text:string
    type:string,
    customClass?:boolean
}