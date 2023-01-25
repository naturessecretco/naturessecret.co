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

export default function Links({ links }: ILink) {

  return (
    <div class="hidden w-auto lg:block">
      <ul class="flex items-center mr-16">
        {
          links.map((link) => (
            <li
              class="font-medium rounded-md hover:shadow-2xl mr-9 hover:text-gray-700"
            >
              <a href={link?.url}>{link?.name}</a>
            </li>
          ))
        }
      </ul>
    </div>

  )
}