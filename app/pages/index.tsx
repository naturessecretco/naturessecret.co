import CommentBox from "@components/CommentBox"
import Featured from "@components/Featured"
import Grid from "@components/Grid"
import Hero from "@components/Hero"
import MediaRow from "@components/MediaRow"
import Product from "@components/Product"
import Summary from "@components/Summary"
import PageService from "@services/pages"
import LogoCloud from "@views/components/LogoCloud"

const HomePage = ({ page: { data } }) => {

  const { hero, featured, product, mediaRow, summary, grid } = data ?? null

  return (
    <>
      <Hero {...hero} />,
      <Featured {...featured} />
      <Product {...product} />
      <Grid {...grid} />
      <MediaRow {...mediaRow} />
      <LogoCloud />
      <Summary {...summary} />
    </>
  )
}

export default HomePage


export async function getServerSideProps() {

  const { getPage } = PageService()

  const page = await getPage("home")

  return {
    props: {
      page
    },
  }
}

