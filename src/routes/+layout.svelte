<script>
  import "../app.css";
  import { page } from '$app/stores';
</script>
<nav class="bg-gray-400">
  <ul class="container mx-auto h-10 flex items-center space-x-2">
    <li>
      <a href="/" class="hover:underline" class:font-semibold={$page.route.id === '/'}>
        Home
      </a>
    </li>
    <li>
      <a href="/about" class="hover:underline" class:font-semibold={$page.route.id === '/about'}>
        About
      </a>
    </li>
  </ul>
</nav>
<div class="container mx-auto">
  <slot />
</div>