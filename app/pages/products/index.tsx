import Hero from "@components/Hero"

import PageLayout from '@layouts/PageLayout'
import PageService from "@services/pages"

import { useEffect } from "react"

const ProductsIndexPage = ({ page }) => {

  useEffect(() => {
    console.log(`[Naturesecret.co@${page.version}]`, page)
  }, [page])

  return (
    <PageLayout {...page.layout}>
    </PageLayout>
  )
}

export default ProductsIndexPage

export async function getServerSideProps() {

  const { getPage } = PageService

  const page = await getPage("products")

  return {
    props: {
      page: page
    },

  }
}

