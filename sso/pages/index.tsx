import PageLayout from '@layouts/PageLayout'
import Console from '@views/components/Console'
import type { NextPage } from 'next'
import homePage from "@pages/homePage"
import Notifications from '@views/components/Notifications'
import { useEffect } from 'react'

const HomePage: NextPage = () => {

  const metaData = {
    pageTitle: 'WTFMVMT'
  }


  useEffect(() => {
    window.location.href = "/auth"
  })



  const { Banner } = homePage.init()

  return (

    false ?
      <PageLayout metaData={metaData}>
        < Console banner={Banner} />
        <Notifications />
      </PageLayout > : <></>



  )
}

export default HomePage
