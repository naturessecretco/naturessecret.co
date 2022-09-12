import PageLayout from "@layouts/PageLayout"
import productsPage from "@pages/productsPage"
import ProductsSearch from "@components/ProductsSearch"



const ProductsPage = ({ pageData }) => {

    return (

        <PageLayout {...pageData.layout}>
            <ProductsSearch {...pageData.productsSearch} />


        </PageLayout>
    )
}

export default ProductsPage



export async function getStaticProps() {

    return {
        props: {
            pageData: productsPage.init()
        }
    }
}