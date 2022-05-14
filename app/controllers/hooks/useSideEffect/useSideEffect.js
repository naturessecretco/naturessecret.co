import { useEffect } from "react"


const useSideEffect = (props) => {

    let { cb } = props

    return (
        useEffect(cb, [])
    )
}

export default useSideEffect