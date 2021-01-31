<script lang="ts">
  import { useRecommendQuery } from "@/libs/hooks/main";
  import CollectionList from "@/components/common/CollectionList.svelte";

  export let clientWidth: number;

  const queryResult = useRecommendQuery();

  console.log(clientWidth);
</script>

<div class="content-container">
  <div>
    {#if $queryResult.data}
      {#each $queryResult.data.data as recommend (recommend.id)}
        <CollectionList {recommend} />
      {/each}
    {/if}
  </div>
</div>

<style lang="scss">
  .content-container {
    padding-top: 2.5em;
    padding-bottom: 9.125em;
    overflow-x: hidden;
    width: 100%;

    @media (max-width: 1024px) {
      font-size: 15px;
    }

    @media (max-width: 768px) {
      font-size: 12px;
    }

    @media (max-width: 480px) {
      font-size: 9px;
    }

    @media (max-width: 375px) {
      font-size: 6px;
    }
  }
</style>
