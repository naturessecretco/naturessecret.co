import PageService from "@services/pages"

const HomePage = ({ page: { data } }) => {


  return (
    <>

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

