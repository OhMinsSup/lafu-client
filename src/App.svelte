<script lang="ts">
  import "./TailwindStyles.svelte";

  import { onMount } from "svelte";
  import { QueryClient, QueryClientProvider } from "@sveltestack/svelte-query";
  import Router from "svelte-spa-router";

  import routes from "@/pages";
  import MobileHeader from "~/components/base/MobileHeader.svelte";
  import DesktopHeader from "./components/base/DesktopHeader.svelte";

  import { browserWidth, myInfoState } from "./store/main";
  import myInfo from "./data/myinfo";

  let clientWidth = 0;
  const queryClient = new QueryClient();

  onMount(() => {
    myInfoState.set(myInfo as any);
  });

  $: update(clientWidth);

  function update(clientWidth: number) {
    browserWidth.update(() => clientWidth);
  }
</script>

<QueryClientProvider client={queryClient}>
  {#if clientWidth < 1024}
    <MobileHeader />
  {:else}
    <DesktopHeader />
  {/if}
  <div class="h-full" bind:clientWidth>
    <div class="h-full">
      <Router {routes} restoreScrollState={true} />
    </div>
  </div>
</QueryClientProvider>

<style lang="scss">
  :global(body) {
    background-color: rgb(249, 249, 249);
    margin: 0px;
    -webkit-font-smoothing: antialiased;
  }

  :global(*) {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  }
</style>
