import PageLayout from '@layouts/PageLayout'
import PageService from "@services/pages"

import ProductsSearch from "@views/components/ProductsSearch"
import { useEffect } from "react"

const ProductsIndexPage = ({ page }) => {

  const version = "0.0.1"

  useEffect(() => {
    console.log(`[Naturesecret.co@${version}]`, page)
  }, [page])

  return (
    <PageLayout {...page.layout}>
      <ProductsSearch {...page.data.productsSearch} />
    </PageLayout>
  )
}

export default ProductsIndexPage

export async function getStaticProps() {

  const { getPage } = PageService.methods

  const page = await getPage("products")

  return {
    props: {
      page: page
    }
  }
}