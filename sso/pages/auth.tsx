import RootLayout from "@layouts/RootLayout"
import Authenticator from "@views/components/Authenticator"


const AuthPage = () => {

    return (
        <RootLayout metaData={{ pageTitle: 'Auth '}}>
            <Authenticator />
        </RootLayout>
    )
}

export default AuthPage