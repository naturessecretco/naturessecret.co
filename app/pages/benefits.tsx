import PageLayout from "@layouts/PageLayout"
import benefitsPage from "@pages/benefitsPage"
import Grid from "@components/Grid"
import TextData from "@components/TextData"

const BenefitsPage = ({ pageData }) => {

    return (

        <PageLayout {...pageData.layout}>
            <TextData {...pageData.textData} />
            <Grid {...pageData.grid} />
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