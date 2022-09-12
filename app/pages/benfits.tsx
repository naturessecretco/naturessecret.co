import PageLayout from "@layouts/PageLayout"
import benefitsPage from "@pages/benefitsPage"

const BenefitsPage = ({ pageData }) => {

    return (

        <PageLayout {...pageData.layout}>

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