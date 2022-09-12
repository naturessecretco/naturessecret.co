import products from "@pages/products"
import PageLayout from "@views/layouts/PageLayout"
import Product from "@views/components/Product"

const ProductPage = ({ pageData }) => {

    return (

        <PageLayout {...pageData.layout}>
            <Product {...pageData.product} />
        </PageLayout>
    )
}

export default ProductPage


export async function getStaticPaths() {

    const pathData = products.init().products.map((product) => ({ params: { id: product.id } }))

    return {
        paths: pathData,
        fallback: false
    }
}


export async function getStaticProps({ params }) {

    const dataPage = products.init()
    const pageLayout = dataPage.layout

    const productData = dataPage.products.find((product) => product.id === params.id)

    return {
        props: {
            pageData: {
                layout: { ...pageLayout },
                product: productData
            }
        },
        revalidate: 5
    }
}