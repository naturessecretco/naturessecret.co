
import PageLayout from '@layouts/PageLayout'
import PageService from "@services/pages"

import ProductsSearch from '@views/components/ProductsSearch'
import { useEffect } from "react"

const ProductsPage = ({ page }) => {


  const { layout, data: {
    productsSearch
  } } = page


  useEffect(() => {
    console.log(`[Naturesecret.co@${page.version}]`, page)
  }, [page])


  return (
    <PageLayout {...layout}>
      <ProductsSearch {...productsSearch} />

    </PageLayout>
  )
}

export default ProductsPage

export async function getServerSideProps() {

  const { getPage } = PageService()

  const page = await getPage("products")

  return {
    props: {
      page
    },
  }
}

