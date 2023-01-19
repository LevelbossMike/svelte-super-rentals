<script>
  import "../app.css";
  import Link from '$lib/link.svelte';
  import { page } from '$app/stores';
</script>
<svelte:head>
  <title>{$page.data.title}</title>
</svelte:head>
<nav class="bg-gray-400">
  <ul class="container mx-auto h-10 flex items-center space-x-2">
    <li>
      <Link>
        Home
      </Link>
    </li>
    <li>
      <Link href="/about" route='/about'>
        About
      </Link>
    </li>
    <li>
      <Link href="/getting-in-touch" route='/[page=contact]'>
        Contact
      </Link>
    </li>
  </ul>
</nav>
<div class="container mx-auto">
  <slot />
</div>