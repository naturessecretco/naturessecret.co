import Hero from "@tailblocks/Hero"

const Featured = (props) => {

    let { title } = props 

    return (
        <Hero id="featured" content={{
            image: {
                alt: 'Seamoss Product Render',
                src: '/assets/images/seamoss.png'
            },
            title: title,
            labelInfo: 'Phone or Email',
            description: 'Made-to-order pure-grade Seamoss wildcrafted',
            ctx: 'Pre-order Yours Now'
        }} />
    )
}

export default Featured