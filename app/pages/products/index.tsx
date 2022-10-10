
import PageLayout from '@layouts/PageLayout'
import PageService from "@services/pages"

import { useEffect } from "react"

const ProductsPage = ({ page }) => {

  useEffect(() => {
    console.log(`[Naturesecret.co@${page.version}]`, page)
  }, [page])


  const { layout } = page

  return (
    <PageLayout {...layout}>

    </PageLayout>
  )
}

export default ProductsPage

export async function getServerSideProps() {

  const { getPage } = PageService

  const page = await getPage("products")

  return {
    props: {
      page
    },
  }
}

