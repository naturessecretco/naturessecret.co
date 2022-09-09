import Hero from "@components/Hero"
import LogoRow from "@components/LogoRow"
import homePage from '@pages/homePage'
import PageLayout from '@views/layouts/PageLayout'


const HomePage = ({ pageData }) => {

  return (
    <PageLayout {...pageData.layout}>
      <Hero {...pageData.hero} />
      <LogoRow />
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