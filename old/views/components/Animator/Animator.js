import { AnimationWrapper } from 'react-hover-animation';


const Animator = (props) => {

    let { children } = props

    return (
        <AnimationWrapper>
            {children}
        </AnimationWrapper>
    )
}

export default Animator