import CommentBox from "@components/CommentBox"
import Featured from "@components/Featured"
import Grid from "@components/Grid"
import Hero from "@components/Hero"
import MediaRow from "@components/MediaRow"
import Product from "@components/Product"
import Summary from "@components/Summary"
import PageService from "@services/pages"
import LogoCloud from "@views/components/LogoCloud"
import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use';

const HomePage = ({ page: { data } }) => {

  const { hero, featured, product, mediaRow, summary, grid, logoCloud } = data ?? null
  const { height, width } = useWindowSize()

  return (
    <>
      <Confetti height={height} width={width} recycle={false} numberOfPieces={120}

      />
      <Hero {...hero} />,
      <Featured {...featured} />
      <Product {...product} />
      <Grid {...grid} />
      <MediaRow {...mediaRow} />
      <LogoCloud {...logoCloud} />
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

