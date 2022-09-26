import Featured from "@components/Featured"
import Hero from "@components/Hero"
import MediaRow from "@components/MediaRow"
import Product from "@components/Product"
import Summary from "@components/Summary"

import PageLayout from '@layouts/PageLayout'
import PageService from "@services/pages"

import NotionService from '@services/notion'

import { useEffect } from "react"

const HomePage = ({ page }) => {

  useEffect(() => {
    console.log(`[Naturesecret.co@${page.version}]`, page)
  }, [page])

  return (
    <PageLayout {...page.layout}>
      <Hero {...page.data.hero} />
      <Featured {...page.data.featured} />
      <Product {...page.data.product} />
      <MediaRow {...page.data.mediaRow} />
      <Summary {...page.data.summary} />
    </PageLayout>
  )
}

export default HomePage

export async function getServerSideProps() {

  const { getPage } = PageService


  const { loadDataPage } = PageService
  const { loadCentralDogma } = NotionService

  const centralDogma = (await loadCentralDogma()).results

  const { layout, data, id, version } = loadDataPage(centralDogma, "home")


  const page = {
    id: 'natures-secret-pages',
    db: id,
    version: version,
    layout: layout,
    ...data,
  }

  

  return {
    props: {
      page: page
    },

  }
}

