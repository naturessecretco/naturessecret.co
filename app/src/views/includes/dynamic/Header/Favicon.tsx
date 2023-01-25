export default function Favicon(props) {
  return (
    <div class="w-auto">
      <div class="flex flex-wrap items-center">
        <div class="w-auto mr-14">
          <a href="{favicon.ur}">
            <img
              class="h-14 object-fit"
              src="{favicon.image.src}"
              alt="{favicon.image.alt}"
            />
          </a>
        </div>
      </div>
    </div>

  )
}