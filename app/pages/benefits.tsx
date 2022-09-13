import PageLayout from "@layouts/PageLayout"
import benefitsPage from "@pages/benefitsPage"
import Grid from "@components/Grid"


const BenefitsPage = ({ pageData }) => {

    return (

        <PageLayout {...pageData.layout}>
            <Grid/>

        </PageLayout>

    )
}

export default BenefitsPage



export async function getStaticProps() {

    return {
        props: {
            pageData: benefitsPage.init()
        }
    }
}