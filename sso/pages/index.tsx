import PageLayout from '@layouts/PageLayout'
import Console from '@views/components/Console'
import type { NextPage } from 'next'
import homePage from "@pages/homePage"
import Notifications from '@views/components/Notifications'
import { useEffect } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"


const HomePage: NextPage = () => {
  const { data: session } = useSession()


  const metaData = {
    pageTitle: 'WTFMVMT'
  }


  useEffect(() => {

    session ? window.location.href = "/auth" : null
    console.log(session)
  })



  const { Banner } = homePage.init()

  return (

    true ?
      <PageLayout metaData={metaData}>
        < Console banner={Banner} />
        <Notifications />
      </PageLayout > : <></>



  )
}

export default HomePage
