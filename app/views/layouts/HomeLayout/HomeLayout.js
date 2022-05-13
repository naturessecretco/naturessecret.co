import RootLayout from "@layouts/RootLayout"



const HomeLayout = (props) => {

    let { children } = props

    return (
        <RootLayout>
            {children}
        </RootLayout>
    )
}

export default HomeLayout