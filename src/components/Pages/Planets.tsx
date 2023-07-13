import data from "../../data.json"
import {useContext} from "react"
import { activeContext } from "../../App"


const Planets = () => {
    const context = useContext(activeContext);
    console.log(context)
    return (
        <>
        {context}
        </>
    )
}

export default Planets;