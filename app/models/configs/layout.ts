import header from "@configs/header";
import footer from "@configs/footer"

const layout = {
    header: { ...header.init() },
    footer: { ...footer.init() },
    metaData: { pageTitle: 'Home' }
}

export default layout 