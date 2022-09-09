import PageLayout from '@layouts/PageLayout'
import Console from '@views/components/Console'
import type { NextPage } from 'next'
import homePage from "@pages/homePage"
import Notifications from '@views/components/Notifications'

const HomePage: NextPage = () => {

  const metaData = {
    pageTitle: 'WTFMVMT'
  }

  const { Banner } = homePage.init()

  return (
    <PageLayout metaData={metaData}>
      <Console banner={Banner} />
      <Notifications />
    </PageLayout>
  )
}

export default HomePage
