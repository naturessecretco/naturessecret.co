import header from "@configs/header";
import footer from "@configs/footer"

const layout = () => {

    const [headerData, footerData] = [header(), footer()]

    return {
        header: headerData,
        footer: footerData,
    }
}

export default layout 