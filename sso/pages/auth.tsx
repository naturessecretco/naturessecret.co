import RootLayout from "@layouts/RootLayout"
import Authenticator from "@views/components/Authenticator"
import authenticator from "@configs/authenticator"


const AuthPage = () => {

    return (
        <RootLayout metaData={{ pageTitle: 'Auth ' }}>
            <Authenticator {...authenticator} />
        </RootLayout>
    )
}

export default AuthPage