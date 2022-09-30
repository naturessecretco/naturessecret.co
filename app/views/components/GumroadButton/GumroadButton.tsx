const GumroadButton = ({ productLink }) => {

    return (
        <a
            className="gumroad-button"
            href={productLink ? productLink : "https://gum.co/feature"}
            data-gumroad-single-product="true"
        >
            Order Now!
        </a>
    )
}

export default GumroadButton