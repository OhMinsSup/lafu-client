<script lang="ts">
  import "./TailwindStyles.svelte";

  import { fade } from "svelte/transition";
  import { QueryClient, QueryClientProvider } from "@sveltestack/svelte-query";
  import Router from "svelte-spa-router";
  import routes from "@/pages";

  import Header from "@/components/base/Header.svelte";

  const queryClient = new QueryClient();
</script>

<Header />
<QueryClientProvider client={queryClient}>
  <div class="h-full">
    <div class="h-full" in:fade>
      <Router {routes} restoreScrollState={true} />
    </div>
  </div>
</QueryClientProvider>

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
