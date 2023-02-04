import type { LinkProps } from "@typings/Link"

export interface ILink {
  links?: LinkProps[]
}

export const defaultProps = {
  links: [...new Array(6).map(i => ({
    url: `${i}_NOT_FOUND`,
    name: 'URL_NAME_NOT_FOUND'
  }))]
}

const heading = ""
export default function Links({ links }: ILink) {

  return (
    <div className="hidden w-auto lg:block">
      <ul className="flex items-center mr-16">
        {
          links.map((link) => (
            <li
              className="font-thin px-5 ease-in-out duration-300 hover:shadow-xl py-2 hover:bg-opacity-50 hover:border-1 hover:border-white rounded-2xl hover:bg-yellow-500 font-serif uppercase underline-offset-4 shadow-black text-shadow-sm  mr-9 hover:text-gray-800"
            >
              <a href={link?.url}>{link?.name}</a>
            </li>
          ))
        }
      </ul>
    </div>

  )
}