<script lang="ts">
  import "./TailwindStyles.svelte";
  import Router from "svelte-spa-router";
  import routes from "@/pages";
</script>

<Router {routes} restoreScrollState={true} />
