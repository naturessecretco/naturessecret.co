export default function Links({ links }) {

  return (
    <div class="hidden w-auto lg:block">
      <ul class="flex items-center mr-16">
        {
          links.map((link) => (
            <li
              class="font-medium rounded-md hover:shadow-2xl mr-9 hover:text-gray-700"
            >
              <a href="">{link?.name}</a>
            </li>
          ))
        }
      </ul>
    </div>

  )
}