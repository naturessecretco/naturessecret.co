import type { ImageProps } from "@typings/Image"
export interface FaviconProps {
  url?: string;
  image?: ImageProps;

}

export const defaultProps: FaviconProps = {
  url: "[@props]: URL_NOT_FOUND ",
  image: {
    src: "[@props]: IMAGE_SRC_NOT_FOUND",
    alt: "[@props]: ALT_SRC_NOT_FOUND"
  }
}

export default function Favicon({ url, image }) {
  return (
    <div class="w-auto">
      <div class="flex flex-wrap items-center">
        <div class="w-auto mr-14">
          <a href={url ?? defaultProps.url}>
            <img
              class="h-14 object-fit"
              src={image?.src ?? defaultProps.image.src}
              alt={image?.alt ?? defaultProps.image.alt}
            />
          </a>
        </div>
      </div>
    </div>

  )
}