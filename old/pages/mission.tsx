import Post from "@components/Post"
import PageLayout from '@layouts/PageLayout'
import PageService from "@services/pages"

import { useEffect } from "react"

const HomePage = ({ page }) => {

  useEffect(() => {
    console.log(`[Naturesecret.co@${page.version}]`, page)
  }, [page])

  return (

      <Post {...page.data.post} />

  )
}

export default HomePage

export async function getServerSideProps() {

  const { getPage } = PageService()

  const page = await getPage("mission")

  return {
    props: {
      page: page
    },
  }
}
