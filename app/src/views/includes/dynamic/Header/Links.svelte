<script>
  export let links = [
    {
        name: "NOT",
        url: ""
    }
  ];
</script>

<div class="hidden w-auto lg:block">
  <ul class="flex items-center mr-16">
    {#each links as link}
      <li
        class="font-medium rounded-md hover:shadow-2xl mr-9 hover:text-gray-700"
      >
        <a href={link.url}>{link.name}</a>
      </li>
    {/each}
  </ul>
</div>
