<script lang="ts">
  import "./TailwindStyles.svelte";

  import { fade } from "svelte/transition";
  import Router from "svelte-spa-router";
  import routes from "@/pages";

  import Header from "@/components/base/Header.svelte";
</script>

<Header />
<div class="h-full">
  <div class="h-full" in:fade>
    <Router {routes} restoreScrollState={true} />
  </div>
</div>

<style lang="scss">
  /*  */
  :global(body) {
    background-color: rgb(249, 249, 249);
    margin: 0px;
    -webkit-font-smoothing: antialiased;
  }

  :global(*) {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  }
</style>
