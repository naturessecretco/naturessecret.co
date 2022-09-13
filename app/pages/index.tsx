import Featured from "@views/components/Featured"
import homePage from '@pages/homePage'
import PageLayout from '@views/layouts/PageLayout'
import Hero from "@components/Hero"
import Gallery from "@components/Gallery"
import MediaRow from "@views/components/MediaRow"
import Summary from "@views/components/Summary"


const HomePage = ({ pageData }) => {

  console.log(`[pageData]`, pageData)
  
  return (
    <PageLayout {...pageData.layout}>
      <Hero {...pageData.hero} />
      <Featured {...pageData.featured} />
      <MediaRow {...pageData.mediaRow} />
      <Summary {...pageData.summary} />
      <Gallery {...pageData.gallery} />
    </PageLayout>
  )
}

export default HomePage

export async function getStaticProps() {

  return {
    props: {
      pageData: homePage.init()
    }
  }
}