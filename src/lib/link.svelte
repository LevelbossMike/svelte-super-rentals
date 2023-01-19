<script>
	import { page } from "$app/stores";
  export let route = '/';
  export let href = '/';
</script>
<a {href} class="hover:underline" class:font-semibold={$page.route.id === route}>
  <slot />
</a>