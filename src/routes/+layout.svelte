<script>
  import "../app.css";
</script>
<nav class="bg-gray-400">
  <ul class="container mx-auto h-10 flex items-center space-x-2">
    <li>
      <a href="/" class="hover:underline">Home</a>
    </li>
    <li>
      <a href="/about" class="hover:underline">About</a>
    </li>
  </ul>
</nav>
<div class="container mx-auto">
  <slot />
</div>