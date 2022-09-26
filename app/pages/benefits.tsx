import Featured from "@components/Featured"
import Hero from "@components/Hero"
import MediaRow from "@components/MediaRow"
import Product from "@components/Product"
import Summary from "@components/Summary"

import Grid from "@components/Grid"
import PageLayout from '@layouts/PageLayout'
import PageService from "@services/pages"

import { useEffect } from "react"

const BenefitsPage = ({ page }) => {

  useEffect(() => {
    console.log(`[Naturesecret.co@${page.version}]`, page)
  }, [page])

  return (
    <PageLayout {...page.layout}>
      <h1 className="mt-6 text-5xl mb-2 leading-tight font-bold font-heading">Benefits in Eating SuperFoods</h1>
      <Grid {...page.data.grid} />
    </PageLayout>
  )
}

export default BenefitsPage

export async function getServerSideProps() {

  const { getPage } = PageService

  const page = await getPage("benefits")

  return {
    props: {
      page: page
    },

  }
}

