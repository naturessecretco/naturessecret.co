
import Grid from "@components/Grid"
import PageService from "@services/pages"

import { useEffect } from "react"

const BenefitsPage = ({ page }) => {



  return (

    <Grid {...page.data.grid} />

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

