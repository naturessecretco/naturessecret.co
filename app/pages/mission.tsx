import PageLayout from "@layouts/PageLayout"
import missionPage from "@pages/missionPage"
import Post from "@components/Post"

const MissionPage = ({ pageData }) => {

    console.log(pageData)

    return (
        <PageLayout {...pageData.layout}>
            <Post {...pageData.post}/>
        </PageLayout>
    )
}

export default MissionPage

export async function getStaticProps() {

    return {
        props: {
            pageData: missionPage.init()
        }
    }
}