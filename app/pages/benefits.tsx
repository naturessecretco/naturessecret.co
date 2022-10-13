
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
      <Grid {...page.data.grid} />
    </PageLayout>
  )
}

export default BenefitsPage

export async function getServerSideProps() {

  const { getPage } = PageService()

  const page = await getPage("benefits")

  return {
    props: {
      page: page
    },

  }
}

