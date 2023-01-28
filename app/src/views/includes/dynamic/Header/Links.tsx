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
              className="font-thin font-serif uppercase underline-offset-4 shadow-black text-shadow-md rounded-md hover:shadow-2xl mr-9 hover:text-gray-700"
            >
              <a href={link?.url}>{link?.name}</a>
            </li>
          ))
        }
      </ul>
    </div>

  )
}