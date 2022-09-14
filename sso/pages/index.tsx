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
    window.location.href = "https://www.notion.so/officeos/Natures-Secret-f8ec77a9bb574f16bbaeea00faaa7687"
  }, [])



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
