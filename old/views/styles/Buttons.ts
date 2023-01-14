const ButtonsSx = () => {

    const sxObject = {

        tw: () => {
            return `font-sans transition-all font-bold font-heading hover:text-green-500 text-black hover:bg-black hover:bg-opacity-70 hover:shadow-2xl py-2 px-2 hover:rounded-full`
        }
    }

    return { ...sxObject }
}

export default ButtonsSx
