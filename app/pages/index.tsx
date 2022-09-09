import type { NextPage } from 'next'
import PageLayout from '@views/layouts/PageLayout'
import Hero from "@components/Hero"
import LogoRow from "@components/LogoRow"


const HomePage: NextPage = () => {

  return (
    <PageLayout metaData={{ pageTitle: 'Natures Secret' }}>
      <Hero/>
      <LogoRow/>
    </PageLayout>
  )
}

export default HomePage

export async function getStaticProps() {

  return {
    props: {
      pageData: { hero: [] }
    }
  }
}