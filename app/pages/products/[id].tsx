import products from "@pages/products"
import PageLayout from "@views/layouts/PageLayout"
import Product from "@views/components/Product"

const ProductPage = ({ pageData }) => {

    return (

        <PageLayout {...pageData.layout}>
            <Product {...pageData.product}/>
        </PageLayout>
    )
}

export default ProductPage


export async function getStaticPaths() {

    const pathData = products.init().products.map((product) => ({ params: { id: product.id } }))

    return {
        paths: pathData,
        fallback: true
    }
}


export async function getStaticProps({ params }) {

    const productData = products.init().products.find(product => product.id === params.id)
    const pageLayout = products.init().layout

    return {
        props: {
            pageData: {
                layout: pageLayout,
                product: productData
            }
        },
        revalidate: 15
    }
}