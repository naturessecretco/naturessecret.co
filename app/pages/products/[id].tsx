import Product from "@components/Product"
import PageLayout from '@layouts/PageLayout'
import PageService from "@services/pages"

import { useEffect } from "react"

const ProductPage = ({ page }) => {

    const version = "0.0.1"

    useEffect(() => {
        console.log(`[Naturesecret.co@${version}]`, page)
    }, [page])

    return (
        <PageLayout {...page.layout}>
            <Product {...page.data.product} />
        </PageLayout>
    )
}

export default ProductPage

export async function getStaticPaths() {


}

export async function getServerSideProps() {

    const { getPage } = PageService.methods

    const page = await getPage("products")

    return {
        props: {
            page: page
        }
    }
}