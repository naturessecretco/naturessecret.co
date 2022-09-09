const homePage = {
    init: () => {

        return { ...homePage.data }
    },

    data: {

        Banner: {
            heading: "WTFMVMT: Admin Panel",
            description: 'Home for Managing Anayltics, Social Media, Content, Forms, etc...',
            logo: {
                src: '/assets/images/logo-transparent.png',
                alt: ''
            }
        }
    }
}

export default homePage