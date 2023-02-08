import { MutableRefObject } from "react"

export type inputProps = {
    id:string,
    type:string,
    placeholder:string,
    name:string,
    ref:MutableRefObject<null>
}