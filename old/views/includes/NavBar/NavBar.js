import Header from "@tailblocks/Header"

let links = [
    {
        name: 'Featured',
        href: '#featured'
    },
    {
        name: 'Store',
        href: '#store'
    },
    {
        name: 'About Us'
    },
    {
        name: 'Benefits/ FAQs'
    }
]

const NavBar = (props) => {

    return (
        <Header links={links} />
    )
}

export default NavBar